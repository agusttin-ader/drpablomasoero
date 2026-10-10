/** Sube el número cuando reemplacés archivos con el mismo nombre (evita caché). */
export const galleryAssetVersion = 2;

const v = (path: string) => `${path}?v=${galleryAssetVersion}`;

/** Resultados — solo imágenes después (despues1–3) */
export const resultSlides = [
  { id: 1, src: v("/images/gallery/despues1.png"), alt: "Resultado caso 1" },
  { id: 2, src: v("/images/gallery/despues2.png"), alt: "Resultado caso 2" },
  { id: 3, src: v("/images/gallery/despues3.png"), alt: "Resultado caso 3" },
] as const;
