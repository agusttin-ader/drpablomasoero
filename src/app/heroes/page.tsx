import Link from "next/link";
import { HeroPicker } from "@/components/sections/heroes/picker";
import { HeroVariant6 } from "@/components/sections/heroes/variant-6";
import { HeroVariant7 } from "@/components/sections/heroes/variant-7";
import { HeroVariant8 } from "@/components/sections/heroes/variant-8";
import { HeroVariant9 } from "@/components/sections/heroes/variant-9";
import { HeroVariant10 } from "@/components/sections/heroes/variant-10";
import { ACTIVE_HERO_VARIANT, heroVariantsNew } from "@/lib/hero-variant";
import { doctoralia, instagram } from "@/lib/doctor-content";

const previews = [
  { meta: heroVariantsNew[0], Component: HeroVariant6 },
  { meta: heroVariantsNew[1], Component: HeroVariant7 },
  { meta: heroVariantsNew[2], Component: HeroVariant8 },
  { meta: heroVariantsNew[3], Component: HeroVariant9 },
  { meta: heroVariantsNew[4], Component: HeroVariant10 },
];

export default function HeroesPage() {
  return (
    <div className="ambient min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <Link href="/" className="text-sm text-muted hover:text-turquoise">← Volver al sitio</Link>
        <h1 className="mt-6 font-serif text-4xl">5 heroes nuevos (6–10)</h1>
        <p className="mt-4 text-muted">
          El sitio sigue con la <strong className="text-ink">opción {ACTIVE_HERO_VARIANT}</strong> hasta que pidas cambiarla.
          Textos de Instagram y Doctoralia.
        </p>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-5 pb-24 md:px-8">
        {previews.map(({ meta, Component }) => (
          <article key={meta.id} className="overflow-hidden rounded-2xl border border-line bg-canvas-soft">
            <div className="flex flex-col gap-2 border-b border-line px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-turquoise">Opción {meta.id}</p>
                <h2 className="mt-1 font-serif text-2xl">{meta.name}</h2>
                <p className="mt-1 text-sm text-muted">{meta.tagline}</p>
              </div>
              <HeroPicker variantId={meta.id} />
            </div>
            <Component preview />
          </article>
        ))}
      </div>
    </div>
  );
}
