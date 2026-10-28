// favicon.ico (48x48) generado desde el logo al compilar; Google lo busca en la raíz del sitio.
import type { APIRoute } from "astro";
import fs from "node:fs";
import sharp from "sharp";

export const GET: APIRoute = async () => {
  const svg = fs.readFileSync("public/images/favicon.svg");
  const png = await sharp(svg, { density: 300 }).resize(48, 48).png().toBuffer();
  // Archivo ICO con una sola imagen PNG adentro
  const cab = Buffer.alloc(22);
  cab.writeUInt16LE(0, 0);
  cab.writeUInt16LE(1, 2);
  cab.writeUInt16LE(1, 4);
  cab.writeUInt8(48, 6);
  cab.writeUInt8(48, 7);
  cab.writeUInt16LE(1, 10);
  cab.writeUInt16LE(32, 12);
  cab.writeUInt32LE(png.length, 14);
  cab.writeUInt32LE(22, 18);
  return new Response(new Uint8Array(Buffer.concat([cab, png])), { headers: { "Content-Type": "image/x-icon" } });
};
