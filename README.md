# Sitio web de Diia Litoral SRL

Hecho con Astro sobre la plantilla Bigspring (licencia MIT, Themefisher).

## Dónde se edita cada cosa
- Productos de cada línea: `src/data/productos.ts`
- Teléfono, mails, textos del pie y descripción para Google: `src/config/config.json`
- Fotos: `src/assets/images` (logo y favicon en `public/images`)
- Páginas: `src/pages` (inicio, productos, empresa, contacto)

## Probarlo en la computadora
```
npm install --legacy-peer-deps
npm run dev
```

## Publicar en Vercel
1. Subir esta carpeta a un repositorio de GitHub de la empresa.
2. En vercel.com: Add New → Project → importar el repositorio (Vercel detecta Astro solo).
3. En el proyecto: Settings → Domains → agregar `diialitoral.com` y `www.diialitoral.com`.

Las direcciones del sitio viejo (`/blog/...`, `/elements`, `/contact`) redirigen a las nuevas (ver `vercel.json`).
