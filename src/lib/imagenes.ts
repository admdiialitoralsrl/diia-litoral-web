import type { ImageMetadata } from "astro";

// Las fotos viven en src/assets/images para que Astro las optimice (WebP, tamaños adaptados).
const todas = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

export const foto = (ruta: string): ImageMetadata => {
  const nombre = ruta.split("/").pop();
  const encontrada = todas[`/src/assets/images/${nombre}`];
  if (!encontrada) throw new Error(`Falta la foto ${nombre} en src/assets/images`);
  return encontrada.default;
};
