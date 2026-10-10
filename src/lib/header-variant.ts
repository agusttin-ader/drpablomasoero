export const HEADER_STORAGE_KEY = "masoero-header-variant";

export type HeaderVariantId = 1 | 2 | 3 | 4 | 5;

export const headerVariants = [
  {
    id: 1 as HeaderVariantId,
    name: "Editorial",
    tagline: "Nav centrado, nombre serif, barra clásica premium.",
  },
  {
    id: 2 as HeaderVariantId,
    name: "Doble franja",
    tagline: "Banda superior + fila principal — más presencia de marca.",
  },
  {
    id: 3 as HeaderVariantId,
    name: "Ultra minimal",
    tagline: "Barra baja, tipografía uppercase, look fashion.",
  },
  {
    id: 4 as HeaderVariantId,
    name: "Cápsula glass",
    tagline: "Menú flotante al centro — impacto moderno.",
  },
  {
    id: 5 as HeaderVariantId,
    name: "Cinema",
    tagline: "Barra limpia + menú pantalla completa dramático.",
  },
] satisfies ReadonlyArray<{ id: HeaderVariantId; name: string; tagline: string }>;

export function getHeaderVariant(): HeaderVariantId {
  if (typeof window === "undefined") return 1;
  const raw = window.localStorage.getItem(HEADER_STORAGE_KEY);
  const n = raw ? Number.parseInt(raw, 10) : 1;
  if (n >= 1 && n <= 5) return n as HeaderVariantId;
  return 1;
}

export function setHeaderVariant(id: HeaderVariantId) {
  window.localStorage.setItem(HEADER_STORAGE_KEY, String(id));
  window.dispatchEvent(new Event("header-variant-change"));
}
