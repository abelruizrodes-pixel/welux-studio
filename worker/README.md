# WeLux Hub — backend de formularios (Cloudflare Worker + D1)

La web es estatica (GitHub Pages), pero los formularios ya no son un mock:
este Worker recibe los envios, los guarda en la base de datos D1
`welux-leads` y avisa por correo al equipo. El front (`assets/js/welux-backend.js`)
publica en `https://api.weluxhub.com/api/lead`.

## Circuito completo

```
Formulario (Careers y demas)  →  POST https://api.weluxhub.com/api/lead
  →  Worker (worker/src/index.js)
  →  D1 welux-leads: candidaturas | contactos | leads (con fecha)
  →  Correo a info@weluxhub.com y a stayarista@gmail.com (asunto "[WeLux] Nueva candidatura: <nombre>")
  →  Confirmacion visible al visitante ("Candidatura enviada…")
```

- `POST /api/lead` (alias: `/api/candidatura`, `/api/contacto`, `/api/contact`)
  con JSON `{ tipo, nombre, email, telefono, sector, idiomas, oferta, cv_url, mensaje, pagina, idioma }`.
  Responde `{ ok: true, id, tipo, email_enviado }` o un error 400/500.
- `GET /api/health` para comprobar que la API responde.
- `GET /api/leads?token=...` devuelve los ultimos envios (solo con el secreto `LEADS_TOKEN`).
- Si el correo falla, el dato queda igualmente guardado en D1 con
  `email_enviado = 0` y el motivo en `email_error`: un envio nunca se pierde
  por el correo.

## Estado actual (8 de noviembre de 2026)

El codigo esta completo y el front ya apunta a `api.weluxhub.com`, pero el
Worker y la D1 todavia NO estan desplegados: hace falta entrar en la cuenta
de Cloudflare que tiene el dominio `weluxhub.com` y ejecutar los pasos de
abajo. Hasta entonces el formulario muestra el error real ("servicio de
 envio pendiente de desplegar") y no finge un envio.

## Despliegue (lo hace el dueno, con la cuenta de Cloudflare del dominio)

Requisitos: Node.js instalado y acceso a la cuenta de Cloudflare de
`weluxhub.com`. Todo lo demas es gratis (plan free de Workers y D1).

```bash
cd worker
npx wrangler login            # abre el navegador; inicia sesion con la cuenta de Cloudflare del dominio
npx wrangler d1 create welux-leads
```

Wrangler mostrara un `database_id`: copialo en `wrangler.toml`, en el campo
`database_id` (ahora pone `REEMPLAZAR_TRAS_CREAR_LA_BD`). Despues:

```bash
npx wrangler d1 execute welux-leads --remote --file schema.sql
npx wrangler deploy
```

El despliegue crea el dominio propio `api.weluxhub.com` (el registro DNS lo
crea Cloudflare al desplegar con `custom_domain`).

## Correo: que llegue a info@weluxhub.com y a stayarista@gmail.com

El Worker envia por **MailChannels**, el servicio de envio que Cloudflare
recomienda para Workers y que no necesita clave. Para que Gmail acepte esos
correos, en el DNS de `weluxhub.com` (panel de Cloudflare → DNS) anade al
registro TXT de SPF el texto `include:_spf.mailchannels.net`. Ejemplo: si el
registro actual es `v=spf1 include:_spf.mx.cloudflare.net ~all`, dejalo en
`v=spf1 include:_spf.mx.cloudflare.net include:_spf.mailchannels.net ~all`
(si no hay registro SPF, crea uno con `v=spf1 include:_spf.mailchannels.net ~all`).

Si MailChannels devuelve errores de autenticacion, dos alternativas:

1. Anadir el registro DKIM de MailChannels para `weluxhub.com` (lo facilita
   MailChannels al configurar el dominio).
2. Usar Resend: crea una clave en resend.com, verifica el dominio
   `weluxhub.com` alli y define el secreto en el Worker:
   `npx wrangler secret put RESEND_API_KEY`.

Opcional, para consultar los envios desde `GET /api/leads`:

```bash
npx wrangler secret put LEADS_TOKEN   # inventa una contrasena larga; luego: /api/leads?token=ESA_CONTRASENA
```

## Verificacion del circuito (formulario → Worker → D1 → correo)

```bash
curl https://api.weluxhub.com/api/health
curl -X POST https://api.weluxhub.com/api/lead -H "Content-Type: application/json" -d '{"tipo":"candidatura","nombre":"Prueba WeLux","email":"prueba@example.com","telefono":"612345678","sector":"Hostelería","idiomas":"ES, EN","mensaje":"Prueba del circuito formulario-Worker-D1-correo"}'
```

El POST debe devolver `{ "ok": true, "id": "...", "tipo": "candidatura", "email_enviado": true }`.
Despues comprueba la fila en D1:

```bash
npx wrangler d1 execute welux-leads --remote --command "SELECT id, created_at, nombre, email, sector, email_enviado FROM candidaturas ORDER BY created_at DESC LIMIT 5;"
```

Y busca en los buzones de `info@weluxhub.com` y de `stayarista@gmail.com` el
correo con asunto `[WeLux] Nueva candidatura: Prueba WeLux`.
Finalmente, envia una candidatura real desde https://www.weluxhub.com/careers/:
debe aparecer el mensaje "Candidatura enviada. La hemos recibido y el equipo
te escribira pronto." y la fila debe aparecer en D1.

## Privacidad

Las tablas guardan datos personales de candidatos (nombre, correo, telefono).
El acceso a la D1 y a `/api/leads` es solo para el equipo; no se publica la
base de datos ni se comparten los datos con terceros.
