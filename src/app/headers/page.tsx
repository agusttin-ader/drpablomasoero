import Link from "next/link";
import { HeaderVariant1 } from "@/components/layout/headers/variant-1";
import { HeaderVariant2 } from "@/components/layout/headers/variant-2";
import { HeaderVariant3 } from "@/components/layout/headers/variant-3";
import { HeaderVariant4 } from "@/components/layout/headers/variant-4";
import { HeaderVariant5 } from "@/components/layout/headers/variant-5";
import { HeaderPicker } from "@/components/layout/headers/picker";
import { headerVariants } from "@/lib/header-variant";

const previews = [
  { meta: headerVariants[0], Component: HeaderVariant1 },
  { meta: headerVariants[1], Component: HeaderVariant2 },
  { meta: headerVariants[2], Component: HeaderVariant3 },
  { meta: headerVariants[3], Component: HeaderVariant4 },
  { meta: headerVariants[4], Component: HeaderVariant5 },
];

export default function HeadersPage() {
  return (
    <div className="ambient min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <Link href="/" className="text-sm text-muted hover:text-turquoise">← Volver al sitio</Link>
        <h1 className="mt-6 font-serif text-4xl">5 opciones de header</h1>
        <p className="mt-4 text-muted">
          Elegí una variante para aplicarla en la home. Todas ocultan la barra al bajar y la muestran al subir.
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
              <HeaderPicker variantId={meta.id} />
            </div>
            <div className="relative overflow-hidden bg-canvas">
              <Component preview />
              <div className="h-32 bg-gradient-to-b from-canvas-elevated/40 to-canvas px-5 pt-8">
                <p className="text-xs uppercase tracking-widest text-muted">Vista previa</p>
                <p className="mt-2 font-serif text-xl text-ink-soft">Contenido del hero debajo del header</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
