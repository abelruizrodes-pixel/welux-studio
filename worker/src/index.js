/**
 * WeLux Hub — API de formularios (Cloudflare Worker + D1 + correo).
 *
 * Recibe los formularios de weluxhub.com (candidatura de Careers y demas
 * formularios del sitio), guarda cada envio en la base de datos D1
 * `welux-leads` (tablas candidaturas, contactos y leads, con fecha) y lo
 * notifica por correo a info@weluxhub.com y a stayarista@gmail.com.
 *
 * Rutas:
 *   POST /api/lead | /api/candidatura | /api/contacto | /api/contact
 *        Body JSON: { tipo, nombre, email, telefono, sector, idiomas,
 *        oferta, cv_url, mensaje, pagina, idioma, honeypot }
 *        Responde { ok: true, id, tipo, email_enviado } o un error 400/500.
 *   GET  /api/health  -> { ok: true }
 *   GET  /api/leads?token=... -> ultimos envios (solo con LEADS_TOKEN).
 *
 * Correo: sin clave, por MailChannels (el servicio de envio que Cloudflare
 * recomienda para Workers). Requiere que weluxhub.com tenga el SPF con
 * MailChannels (ver worker/README.md). Si se define el secreto
 * RESEND_API_KEY, se usa Resend en su lugar. Si el envio de correo falla,
 * el dato queda igualmente guardado en D1 con email_enviado = 0 y el
 * motivo en email_error: un envio nunca se pierde por el correo.
 *
 * Despliegue: ver worker/README.md (wrangler d1 create, schema.sql, deploy).
 */

const TEAM_EMAILS = ['info@weluxhub.com', 'stayarista@gmail.com'];
const FROM_EMAIL = 'candidaturas@weluxhub.com';
const ALLOWED_ORIGINS = [
  'https://www.weluxhub.com',
  'https://weluxhub.com',
  'https://abelruizrodes-pixel.github.io',
];

/* Limite simple por IP (10 envios por minuto). Es por instancia del Worker;
   como refuerzo se recomienda la regla de Rate Limiting de Cloudflare. */
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 60000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 10;
}

function cors(origin) {
  const o = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': o,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors(origin), 'Content-Type': 'application/json' },
  });
}

function clean(v, max) {
  return String(v === undefined || v === null ? '' : v).trim().replace(/[<>]/g, '').slice(0, max);
}

function textoCorreo(d) {
  return [
    'Nueva ' + d.tipo + ' en WeLux Hub',
    '',
    'Nombre: ' + d.nombre,
    'Correo: ' + d.email,
    'Telefono: ' + (d.telefono || '-'),
    'Sector: ' + (d.sector || '-'),
    'Idiomas: ' + (d.idiomas || '-'),
    'Oferta / asunto: ' + (d.oferta || '-'),
    'Enlace al CV: ' + (d.cv_url || '-'),
    'Mensaje: ' + (d.mensaje || '-'),
    '',
    'Pagina: ' + d.pagina,
    'Idioma de la pagina: ' + d.idioma,
    'Fecha (UTC): ' + d.created_at,
    'Id en D1: ' + d.id,
  ].join('\n');
}

async function enviarCorreoEquipo(env, d) {
  const subject = '[WeLux] Nueva ' + d.tipo + ': ' + d.nombre;
  const text = textoCorreo(d);
  if (env.RESEND_API_KEY) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + env.RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'WeLux Hub <' + FROM_EMAIL + '>',
        to: TEAM_EMAILS,
        subject,
        text,
      }),
    });
    if (!res.ok) throw new Error('Resend HTTP ' + res.status);
    return true;
  }
  const res = await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      personalizations: [{ to: TEAM_EMAILS.map((email) => ({ email })) }],
      from: { email: FROM_EMAIL, name: 'WeLux Hub' },
      subject,
      content: [{ type: 'text/plain', value: text }],
    }),
  });
  if (res.status !== 202 && !res.ok) {
    throw new Error('MailChannels HTTP ' + res.status + ': ' + (await res.text()).slice(0, 200));
  }
  return true;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors(origin) });
    }
    if (url.pathname === '/api/health') {
      return json({ ok: true, service: 'weluxhub-api', time: new Date().toISOString() }, 200, origin);
    }
    if (url.pathname === '/api/leads' && request.method === 'GET') {
      if (!env.LEADS_TOKEN || url.searchParams.get('token') !== env.LEADS_TOKEN) {
        return json({ ok: false, error: 'No autorizado' }, 403, origin);
      }
      const candidaturas = await env.DB.prepare(
        'SELECT id, created_at, nombre, email, telefono, sector, idiomas, oferta, cv_url, mensaje, pagina, idioma, email_enviado FROM candidaturas ORDER BY created_at DESC LIMIT 50'
      ).all();
      const contactos = await env.DB.prepare(
        'SELECT id, created_at, nombre, email, telefono, asunto, mensaje, pagina, idioma, email_enviado FROM contactos ORDER BY created_at DESC LIMIT 50'
      ).all();
      const leads = await env.DB.prepare(
        'SELECT id, created_at, nombre, email, telefono, origen, pagina, idioma, email_enviado FROM leads ORDER BY created_at DESC LIMIT 50'
      ).all();
      return json({ ok: true, candidaturas: candidaturas.results, contactos: contactos.results, leads: leads.results }, 200, origin);
    }
    const esEnvio =
      ['/api/lead', '/api/candidatura', '/api/contacto', '/api/contact'].includes(url.pathname) &&
      request.method === 'POST';
    if (!esEnvio) return json({ ok: false, error: 'No encontrado' }, 404, origin);
    const ip = request.headers.get('CF-Connecting-IP') || 'desconocida';
    if (limited(ip)) return json({ ok: false, error: 'Demasiados envios, intentalo en un minuto' }, 429, origin);
    let data;
    try {
      data = await request.json();
    } catch (e) {
      return json({ ok: false, error: 'JSON no valido' }, 400, origin);
    }
    if (data && data.honeypot) return json({ ok: true, id: 'honeypot' }, 200, origin);
    const tipo = ['candidatura', 'contacto', 'lead', 'reserva'].includes(data.tipo) ? data.tipo : 'lead';
    const d = {
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      tipo,
      nombre: clean(data.nombre, 200),
      email: clean(data.email, 200),
      telefono: clean(data.telefono, 50),
      sector: clean(data.sector, 100),
      idiomas: clean(data.idiomas, 200),
      oferta: clean(data.oferta, 200),
      cv_url: clean(data.cv_url, 500),
      mensaje: clean(data.mensaje, 4000),
      pagina: clean(data.pagina, 500),
      idioma: clean(data.idioma || 'es', 10),
    };
    if (!d.nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
      return json({ ok: false, error: 'Faltan el nombre y un correo valido' }, 400, origin);
    }
    try {
      if (tipo === 'candidatura') {
        await env.DB.prepare(
          'INSERT INTO candidaturas (id, created_at, nombre, email, telefono, sector, idiomas, oferta, cv_url, mensaje, pagina, idioma) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(d.id, d.created_at, d.nombre, d.email, d.telefono, d.sector, d.idiomas, d.oferta, d.cv_url, d.mensaje, d.pagina, d.idioma).run();
      } else if (tipo === 'contacto') {
        await env.DB.prepare(
          'INSERT INTO contactos (id, created_at, nombre, email, telefono, asunto, mensaje, pagina, idioma) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(d.id, d.created_at, d.nombre, d.email, d.telefono, d.oferta, d.mensaje, d.pagina, d.idioma).run();
      } else {
        await env.DB.prepare(
          'INSERT INTO leads (id, created_at, nombre, email, telefono, origen, pagina, idioma, datos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(d.id, d.created_at, d.nombre, d.email, d.telefono, clean(data.origen || tipo, 100), d.pagina, d.idioma, clean(JSON.stringify(data), 8000)).run();
      }
    } catch (e) {
      return json({ ok: false, error: 'No se pudo guardar en la base de datos' }, 500, origin);
    }
    let emailOk = false;
    let emailError = '';
    try {
      emailOk = await enviarCorreoEquipo(env, d);
    } catch (e) {
      emailError = String((e && e.message) || e);
    }
    try {
      const tabla = tipo === 'candidatura' ? 'candidaturas' : tipo === 'contacto' ? 'contactos' : 'leads';
      await env.DB.prepare('UPDATE ' + tabla + ' SET email_enviado = ?, email_error = ? WHERE id = ?')
        .bind(emailOk ? 1 : 0, emailError.slice(0, 500), d.id)
        .run();
    } catch (e) {
      /* El envio ya quedo guardado; no se pierde nada. */
    }
    return json({ ok: true, id: d.id, tipo, email_enviado: emailOk }, 200, origin);
  },
};
