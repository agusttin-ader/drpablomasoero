"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { images, site } from "@/lib/site";
import { heroSectionClass } from "./shared";

export function HeroVariant10({ preview }: { preview?: boolean }) {
  return (
    <section className={preview ? "bg-canvas px-5 py-14" : heroSectionClass}>
      <div
        className={
          preview
            ? "max-w-3xl"
            : "mx-auto flex min-h-[calc(92svh-4.5rem)] max-w-[88rem] flex-col justify-center px-5 md:px-10"
        }
      >
        <FadeIn className="flex items-start gap-6 md:items-center md:gap-10">
          <Image src={images.logo} alt="" width={120} height={120} className="h-20 w-20 shrink-0 object-contain md:h-28 md:w-28" priority />
          <div>
            <p className="label">{instagram.specialty}</p>
            <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">{doctoralia.name}</h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12 md:mt-16">
          <p className="text-[clamp(2.5rem,8vw,5.5rem)] font-serif leading-none tracking-tight text-turquoise">
            {instagram.phoneDisplay}
          </p>
          <p className="mt-4 text-lg text-muted">{instagram.turnos} · {instagram.locations}</p>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-10 flex flex-wrap gap-4">
          <Link
            href={site.phoneHref}
            className="rounded-full bg-turquoise px-8 py-3 text-[13px] font-medium text-[#101012]"
          >
            Llamar
          </Link>
          <Link href="#contacto" className="rounded-full border border-line-strong px-8 py-3 text-[13px] text-ink">
            {instagram.turnos}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
