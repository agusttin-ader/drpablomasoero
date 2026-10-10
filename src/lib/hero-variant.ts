export const HERO_STORAGE_KEY = "masoero-hero-variant";

export type HeroVariantId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/** Hero activo en la home — cambiamos este número al probar cada opción. */
export const ACTIVE_HERO_VARIANT: HeroVariantId = 1;

export const heroVariants = [
  { id: 1 as HeroVariantId, name: "Editorial split", tagline: "Texto + logo grande lateral (activo)." },
  { id: 2 as HeroVariantId, name: "Imagen full", tagline: "Foto a pantalla con texto Doctoralia." },
  { id: 3 as HeroVariantId, name: "Cita paciente", tagline: "Opinión Doctoralia protagonista." },
  { id: 4 as HeroVariantId, name: "Datos & turnos", tagline: "Ficha + foto." },
  { id: 5 as HeroVariantId, name: "Tipográfico", tagline: "RINOPLASTIA gigante." },
  { id: 6 as HeroVariantId, name: "Monolito centrado", tagline: "Logo enorme al centro, copy debajo." },
  { id: 7 as HeroVariantId, name: "Logo bleed", tagline: "Logo cortado al borde — impacto editorial." },
  { id: 8 as HeroVariantId, name: "Tarjeta glass", tagline: "Bloque flotante con logo y CTA." },
  { id: 9 as HeroVariantId, name: "Columna dual", tagline: "Logo en columna izquierda, texto en derecha." },
  { id: 10 as HeroVariantId, name: "Señalética", tagline: "Teléfono y turnos grandes + logo compacto." },
] satisfies ReadonlyArray<{ id: HeroVariantId; name: string; tagline: string }>;

export const heroVariantsNew = heroVariants.filter((v) => v.id >= 6);

export function getHeroVariant(): HeroVariantId {
  return ACTIVE_HERO_VARIANT;
}

export function setHeroVariant(id: HeroVariantId) {
  window.localStorage.setItem(HERO_STORAGE_KEY, String(id));
  window.dispatchEvent(new Event("hero-variant-change"));
}
