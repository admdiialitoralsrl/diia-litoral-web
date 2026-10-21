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

## Publicar en Cloudflare Pages
1. Subir esta carpeta a un repositorio de GitHub de la empresa.
2. En dash.cloudflare.com: Workers y Pages → Crear → Pages → Conectar con Git → elegir el repositorio.
3. Configuración de compilación: preset **Astro**, comando `npm run build`, carpeta de salida `dist`.
4. Variable de entorno `SITE_URL` con la dirección oficial (por ejemplo `https://diia-litoral.pages.dev`,
   y más adelante `https://diialitoral.com`). Después de cambiarla, volver a implementar.
5. Para el dominio propio: en el proyecto de Pages → Dominios personalizados → agregar `diialitoral.com`.

Las direcciones del sitio viejo (`/blog/...`, `/elements`, `/contact`) redirigen a las nuevas (ver `public/_redirects`).
