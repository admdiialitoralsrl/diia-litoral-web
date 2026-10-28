// Íconos PNG del sitio, generados desde el logo (favicon.svg) al compilar.
// Google los usa para mostrar el logotipo junto al resultado de búsqueda.
import type { APIRoute } from "astro";
import fs from "node:fs";
import sharp from "sharp";

const tamanios: Record<string, { lado: number; margen: number; fondo: boolean }> = {
  "favicon-96": { lado: 96, margen: 0, fondo: false },
  "favicon-192": { lado: 192, margen: 0, fondo: false },
  "logo-diia-litoral-cuadrado": { lado: 600, margen: 40, fondo: true },
};

export function getStaticPaths() {
  return Object.keys(tamanios).map((icono) => ({ params: { icono } }));
}

export const GET: APIRoute = async ({ params }) => {
  const { lado, margen, fondo } = tamanios[params.icono as string];
  const svg = fs.readFileSync("public/images/favicon.svg");
  const interior = lado - margen * 2;
  let img = sharp(svg, { density: 600 }).resize(interior, interior);
  if (margen) img = img.extend({ top: margen, bottom: margen, left: margen, right: margen, background: "#ffffff" });
  if (fondo) img = img.flatten({ background: "#ffffff" });
  const png = await img.png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
