import Image from "next/image";
import { Fade } from "@/components/motion/fade";
import { SectionLabel } from "@/components/ui/section-label";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { images, site } from "@/lib/site";

export function Profile() {
  return (
    <section id="perfil" className="section-pad mx-auto max-w-[88rem]">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Fade className="lg:col-span-5">
          <SectionLabel>Doctoralia</SectionLabel>
          <h2 className="mt-4 font-serif text-[clamp(1.75rem,6vw,3.5rem)] leading-[1.08] text-ink">
            {doctoralia.name} · {doctoralia.specialty}
          </h2>
          <div className="mt-8 space-y-4 text-[15px] leading-[1.75] text-muted sm:mt-10 sm:space-y-5 sm:text-[16px] sm:leading-[1.8]">
            <p>
              {doctoralia.clinic}. {doctoralia.addressLine}. Matrícula provincial Nº {doctoralia.license}.
            </p>
            <p className="text-ink-soft">
              {instagram.degree}. {instagram.specialty}. {instagram.locations}.
            </p>
          </div>
        </Fade>

        <Fade delay={0.08} className="relative lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-canvas-elevated sm:aspect-[16/11]">
            <Image
              src={images.hero}
              alt=""
              fill
              className="object-cover opacity-80"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-canvas/80 via-transparent to-turquoise/5" />
          </div>
          <blockquote className="mt-6 border-l-2 border-turquoise/50 pl-4 font-serif text-lg leading-relaxed text-ink sm:mt-8 sm:pl-6 sm:text-xl md:text-2xl">
            “{doctoralia.reviewQuote}”
          </blockquote>
          <p className="mt-3 text-sm text-muted sm:mt-4">{site.nameFull}</p>
        </Fade>
      </div>
    </section>
  );
}
