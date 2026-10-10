import Image from "next/image";
import Link from "next/link";
import { Fade } from "@/components/motion/fade";
import { CollageMotion, ImageReveal, MaskText, StaggerItem } from "@/components/motion/reveal";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { resultSlides } from "@/lib/results-cases";
import { images, site } from "@/lib/site";
import { Hero } from "./hero";
import { MobileContactForm } from "./mobile-contact-form";
import { MobileNav } from "./mobile-nav";
import { Placeholder } from "./placeholder";
import { SiteFooter } from "./site-footer";

function Spaced({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p
      className={`mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.55em] text-muted md:text-[0.75rem] md:tracking-[0.7em] ${className}`}
    >
      {children}
    </p>
  );
}

const pill =
  "inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.9375rem] font-medium transition-transform active:scale-[0.97] md:h-14 md:px-9 md:hover:scale-[1.03]";

const wrap = "mx-auto w-full max-w-[80rem] px-4 md:px-10";

export function MobileHome() {
  return (
    <div>
      <Hero />

      {/* Collage */}
      <section
        id="m-especialidad"
        className={`${wrap} pt-10 md:grid md:grid-cols-2 md:items-center md:gap-14 md:pt-24 lg:gap-24`}
      >
        <div className="relative h-[22rem] overflow-hidden rounded-[2rem] md:h-[34rem] md:rounded-[2.5rem] lg:h-[40rem]">
          <CollageMotion className="absolute left-1/2 top-1/2 grid w-[150%] grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <StaggerItem key={i}>
                <Placeholder className="aspect-square rounded-[1.75rem] md:rounded-[2.25rem]" label="" />
              </StaggerItem>
            ))}
          </CollageMotion>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-canvas to-transparent md:hidden" />
        </div>

        <Fade className="px-2 pb-6 text-center md:px-0 md:pb-0 md:text-left">
          <MaskText className="font-hero text-[2rem] leading-[1.05] text-ink md:text-[clamp(2.75rem,4.5vw,4.25rem)]">
            {instagram.specialty}.
          </MaskText>
          <Spaced className="hidden md:block">{instagram.degree}</Spaced>
          <p className="mx-auto mt-3 max-w-[18rem] text-[0.875rem] leading-relaxed text-muted md:mx-0 md:mt-6 md:max-w-md md:text-[1.0625rem]">
            {doctoralia.rinoplastyService}. {doctoralia.clinic}.
          </p>
          <Link
            href="#m-contacto"
            className={`${pill} mt-7 w-full bg-logo text-[#101012] md:mt-10 md:w-auto`}
          >
            {instagram.turnos}
          </Link>
        </Fade>
      </section>

      {/* Resultados — editorial + carrusel */}
      <section id="m-galeria" className={`${wrap} pt-14 md:pt-32`}>
        <Fade className="text-center md:text-left">
          <MaskText
            delay={0.1}
            className="font-hero text-[2.25rem] leading-[1.05] text-ink md:text-[clamp(2.75rem,4.5vw,4.25rem)]"
          >
            Resultados
          </MaskText>
          <p className="mt-4 text-[0.6875rem] font-medium uppercase tracking-[0.55em] text-muted md:text-[0.75rem] md:tracking-[0.7em]">
            {instagram.hashtags}
          </p>
        </Fade>

        <div
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:gap-6"
          aria-label="Galería de resultados"
        >
          {resultSlides.map((slide, i) => (
            <Fade
              key={slide.id}
              delay={0.08 + i * 0.08}
              className="w-[min(88vw,24rem)] shrink-0 snap-center md:w-auto"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-canvas md:rounded-[2rem]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 88vw, 33vw"
                />
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Sobre el doctor — solo desktop */}
      <section id="m-sobre" className={`${wrap} hidden pt-32 lg:block`}>
        <div className="grid grid-cols-2 items-center gap-16 xl:gap-24">
          <ImageReveal className="relative aspect-[4/5] rounded-[2.5rem]">
            <Image
              src={images.portrait}
              alt={doctoralia.name}
              fill
              className="object-cover object-[center_8%]"
              sizes="50vw"
            />
          </ImageReveal>

          <Fade>
            <MaskText className="font-hero text-[clamp(2.75rem,4.5vw,4.25rem)] leading-[1.05] text-ink">
              {doctoralia.name}.
            </MaskText>
            <Spaced>{instagram.locations.replace(" y ", ", ")}</Spaced>
            <p className="mt-8 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
              {instagram.specialty} · {instagram.degree}. {doctoralia.specialty} · M.P. {doctoralia.license}.
            </p>
            <blockquote className="mt-10 max-w-lg border-l border-logo/40 pl-6 font-serif text-[1.375rem] leading-relaxed text-ink">
              “{doctoralia.reviewQuote}”
              <footer className="mt-4 font-sans text-[0.75rem] uppercase tracking-[0.3em] text-muted">
                Opinión verificada · Doctoralia
              </footer>
            </blockquote>
            <p className="mt-10 text-[0.875rem] text-muted">
              {doctoralia.clinic} · {doctoralia.addressLine}
            </p>
            <Link
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} mt-8 bg-logo text-[#101012]`}
            >
              WhatsApp
            </Link>
          </Fade>
        </div>
      </section>

      {/* Opinión + contacto */}
      <section
        id="m-contacto"
        className={`${wrap} pb-14 pt-14 md:pb-20 md:pt-32 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-6`}
      >
        <Fade className="lg:hidden">
          <div className="flex min-h-[34rem] flex-col overflow-hidden rounded-[2rem] border border-line bg-canvas-soft md:min-h-[38rem] md:rounded-[2.5rem]">
            <div className="relative min-h-[22rem] flex-[7.5] basis-0">
              <Image
                src={images.portrait}
                alt={doctoralia.name}
                fill
                className="object-cover object-[center_2%] md:object-[center_5%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[28%] backdrop-blur-xl [mask-image:linear-gradient(to_top,black_25%,transparent)]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-canvas-soft from-10% via-canvas-soft/45 via-45% to-transparent"
              />
            </div>
            <div className="relative z-10 -mt-2 flex-[2.5] shrink-0 px-5 pb-5 pt-1 md:-mt-3 md:px-8 md:pb-8">
              <MaskText delay={0.15} className="font-hero text-[2rem] leading-[1.05] text-ink md:text-[2.75rem]">
                {doctoralia.name}.
              </MaskText>
              <Spaced>{instagram.locations.replace(" y ", ", ")}</Spaced>
              <blockquote className="mt-5 text-[0.875rem] leading-relaxed text-ink-soft md:mt-7 md:text-[1rem]">
                “{doctoralia.reviewQuote}”
                <footer className="mt-2 text-[0.6875rem] text-muted md:text-[0.75rem]">Opinión verificada · Doctoralia</footer>
              </blockquote>
              <p className="mt-5 text-[0.8125rem] text-muted md:text-[0.875rem]">
                {doctoralia.clinic} · {doctoralia.addressLine} · M.P. {doctoralia.license}
              </p>
              <div className="mt-6 md:mt-8">
                <Link
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pill} w-full bg-logo text-[#101012]`}
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </Fade>
        <Fade className="mt-4 md:mt-6 lg:mt-0" delay={0.08}>
          <MobileContactForm />
        </Fade>
        <Fade className="hidden lg:block" delay={0.16}>
          <div className="relative h-full min-h-[32rem] overflow-hidden rounded-[2.5rem] border border-line bg-canvas-soft">
            <iframe
              title={`Mapa: ${doctoralia.clinic}, ${doctoralia.addressLine}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${doctoralia.addressLine}, Río Negro, Argentina`)}&z=16&output=embed`}
              className="absolute inset-0 h-full w-full border-0 [filter:invert(0.9)_hue-rotate(180deg)_saturate(0.6)_brightness(0.95)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas-soft via-canvas-soft/85 to-transparent px-8 pb-7 pt-16">
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.3em] text-logo">Consultorio</p>
              <p className="mt-2 text-[1rem] text-ink">{doctoralia.clinic}</p>
              <p className="text-[0.875rem] text-muted">{doctoralia.addressLine}</p>
            </div>
          </div>
        </Fade>
      </section>

      <SiteFooter />
      <MobileNav />
    </div>
  );
}
