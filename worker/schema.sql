-- WeLux Hub — esquema de la base de datos D1 `welux-leads`.
-- Aplicar con: npx wrangler d1 execute welux-leads --remote --file schema.sql
-- (ver worker/README.md). Las tres tablas guardan los campos del formulario
-- y la fecha de cada envio, mas si el correo al equipo se envio o no.

CREATE TABLE IF NOT EXISTS candidaturas (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  sector TEXT,
  idiomas TEXT,
  oferta TEXT,
  cv_url TEXT,
  mensaje TEXT,
  pagina TEXT,
  idioma TEXT,
  email_enviado INTEGER NOT NULL DEFAULT 0,
  email_error TEXT
);
CREATE INDEX IF NOT EXISTS idx_candidaturas_created ON candidaturas(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_candidaturas_email ON candidaturas(email);

CREATE TABLE IF NOT EXISTS contactos (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  asunto TEXT,
  mensaje TEXT,
  pagina TEXT,
  idioma TEXT,
  email_enviado INTEGER NOT NULL DEFAULT 0,
  email_error TEXT
);
CREATE INDEX IF NOT EXISTS idx_contactos_created ON contactos(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contactos_email ON contactos(email);

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  origen TEXT,
  pagina TEXT,
  idioma TEXT,
  datos TEXT,
  email_enviado INTEGER NOT NULL DEFAULT 0,
  email_error TEXT
);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
