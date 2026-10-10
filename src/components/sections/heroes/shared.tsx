import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/site";
import { instagram } from "@/lib/doctor-content";

export function HeroCtas({ primary = "Pedir turno" }: { primary?: string }) {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
      <Link
        href="#contacto"
        className="hidden min-h-12 items-center justify-center rounded-full bg-turquoise px-8 py-3 text-[13px] font-medium text-[#101012] transition hover:brightness-110 md:inline-flex"
      >
        {primary}
      </Link>
      <Link
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 w-full items-center justify-center text-[14px] text-muted transition hover:text-turquoise sm:w-auto sm:justify-start sm:text-[13px]"
      >
        @{instagram.handle}
      </Link>
    </div>
  );
}

export function HeroLogoVisual({ className, priority = true }: { className?: string; priority?: boolean }) {
  return (
    <div className={className}>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70%,360px)] w-[min(70%,360px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise/10 blur-[60px] md:h-[min(85%,520px)] md:w-[min(85%,520px)] md:blur-[80px]"
        aria-hidden
      />
      <Image
        src={images.logo}
        alt=""
        width={900}
        height={900}
        priority={priority}
        className="relative z-10 mx-auto h-[min(42vw,220px)] w-auto max-w-[88vw] object-contain drop-shadow-[0_0_50px_rgba(46,232,214,0.3)] sm:h-[min(38vh,320px)] md:h-[min(58vh,560px)] lg:h-[min(72vh,720px)]"
      />
    </div>
  );
}

export function HeroPortrait({
  className,
  priority = true,
  alt,
}: {
  className?: string;
  priority?: boolean;
  alt: string;
}) {
  return (
    <div className={className}>
      <Image
        src={images.portrait}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}

export const heroSectionClass =
  "relative overflow-hidden pt-[var(--header-h)] md:min-h-[92svh] md:pt-[4.5rem]";
