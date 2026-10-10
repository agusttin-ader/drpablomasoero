"use client";

import Image from "next/image";
import Link from "next/link";
import { Fade } from "@/components/motion/fade";
import { SectionLabel } from "@/components/ui/section-label";
import { images, site } from "@/lib/site";

const layout = [
  "sm:col-span-2 md:col-span-2 md:row-span-2",
  "",
  "",
  "",
  "",
  "",
];

export function Gallery() {
  return (
    <section id="galeria" className="section-pad mx-auto max-w-[88rem]">
      <Fade className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <SectionLabel>Galería</SectionLabel>
          <h2 className="mt-4 font-serif text-[clamp(1.75rem,6vw,3.25rem)] text-ink sm:mt-5">Detalle & atmósfera</h2>
        </div>
        <Link
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-[14px] text-muted hover:text-turquoise"
        >
          Ver Instagram →
        </Link>
      </Fade>

      <div className="mt-8 grid grid-cols-1 gap-2 sm:mt-12 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:auto-rows-[220px] lg:auto-rows-[260px]">
        {images.gallery.map((src, i) => (
          <Fade key={src} delay={(i % 3) * 0.05} className={layout[i] ?? ""}>
            <div className="group relative min-h-[200px] overflow-hidden rounded-xl bg-canvas-elevated sm:min-h-[220px] md:min-h-0 md:h-full">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover opacity-80 transition duration-700 group-active:scale-[1.02] md:opacity-75 md:group-hover:scale-[1.04] md:group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
