import Image from "next/image";
import Link from "next/link";
import { Fade } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { images, site } from "@/lib/site";

const links = [
  { href: site.phoneHref, label: instagram.phoneDisplay },
  { href: `mailto:${site.email}`, label: site.email },
] as const;

const socials = [
  {
    href: site.facebook,
    label: "Facebook",
    bg: "bg-[#1877f2]",
    path: "M13.5 12.5h2.75l.43-2.81H13.5V8.28c0-.81.22-1.36 1.38-1.36h1.5V4.46c-.26-.04-1.16-.11-2.2-.11-2.18 0-3.67 1.33-3.67 3.77v2.07H7.5v2.81h3.01v6.75h2.99v-6.75Z",
  },
  {
    href: site.linkedin,
    label: "LinkedIn",
    bg: "bg-[#0a66c2]",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-1.85 3.76-1.85 4.02 0 4.88 2.5 4.88 5.9v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z",
  },
  {
    href: site.instagram,
    label: "Instagram",
    bg: "bg-[linear-gradient(45deg,#f9a03f,#e1306c_55%,#c13584)]",
    path: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.8-8.85a1.07 1.07 0 1 0 0 2.14 1.07 1.07 0 0 0 0-2.14ZM12 4c2.17 0 2.43 0 3.29.05 2.2.1 3.23 1.15 3.33 3.33.04.86.05 1.12.05 3.29v2.66c0 2.17 0 2.43-.05 3.29-.1 2.18-1.12 3.23-3.33 3.33-.86.04-1.12.05-3.29.05s-2.43 0-3.29-.05c-2.21-.1-3.23-1.15-3.33-3.33C5.34 15.76 5.33 15.5 5.33 13.33v-2.66c0-2.17 0-2.43.05-3.29.1-2.18 1.12-3.23 3.33-3.33C9.57 4.01 9.83 4 12 4Zm0-1.6c-2.2 0-2.48 0-3.35.05-2.97.14-4.62 1.78-4.76 4.76C3.84 8.08 3.83 8.36 3.83 10.56v2.88c0 2.2 0 2.48.06 3.35.13 2.97 1.78 4.62 4.76 4.76.87.04 1.15.05 3.35.05s2.48 0 3.35-.05c2.97-.14 4.62-1.78 4.76-4.76.04-.87.05-1.15.05-3.35v-2.88c0-2.2 0-2.48-.05-3.35-.13-2.97-1.78-4.62-4.76-4.76C14.48 2.4 14.2 2.4 12 2.4Z",
  },
  {
    href: site.whatsapp,
    label: "WhatsApp",
    bg: "bg-[#25d366]",
    path: "M12.04 2.5a9.4 9.4 0 0 0-8.1 14.2L2.6 21.5l4.93-1.3a9.4 9.4 0 1 0 4.5-17.7Zm0 17.2a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-2.93.77.78-2.85-.19-.3a7.8 7.8 0 1 1 6.6 3.64Zm4.28-5.84c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.6.76-.74.91-.14.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.32-1.63-.14-.24-.01-.36.1-.48.11-.1.24-.27.36-.41.12-.14.16-.24.24-.4.08-.15.04-.29-.02-.4-.06-.12-.52-1.26-.72-1.73-.19-.45-.38-.39-.52-.4h-.45a.86.86 0 0 0-.62.3c-.21.23-.82.8-.82 1.94 0 1.15.84 2.26.95 2.41.12.16 1.65 2.52 4 3.53.56.24 1 .39 1.34.5.56.18 1.07.15 1.48.09.45-.07 1.38-.56 1.57-1.11.2-.55.2-1.02.14-1.12-.06-.1-.21-.16-.45-.27Z",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[80rem] px-4 pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:px-10 md:pb-32">
      <Fade className="rounded-[2rem] border border-line bg-canvas-soft px-6 py-10 text-center md:rounded-[2.5rem] md:px-12 md:py-14">
        <Image
          src={images.logoMark}
          alt={site.nameFull}
          width={160}
          height={160}
          className="mx-auto h-auto w-24 md:w-28"
        />
        <p className="mt-6 font-hero text-[1.75rem] leading-[1.05] text-ink md:text-[2.5rem]">
          {doctoralia.name}
        </p>
        <p className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.55em] text-muted md:text-[0.75rem] md:tracking-[0.7em]">
          Rinoplastia
        </p>

        <div className="mt-8 flex justify-center gap-3 md:gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`grid size-12 place-items-center rounded-full text-white transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 md:size-14 ${s.bg}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-6 md:size-7">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        <p className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-3 gap-y-2 text-[0.8125rem] leading-relaxed text-ink-soft md:gap-x-4 md:text-[0.9375rem]">
          {links.map((link, i) => (
            <span key={link.label} className="inline-flex items-center gap-3 md:gap-4">
              {i > 0 && (
                <span aria-hidden className="text-logo/60">
                  /
                </span>
              )}
              <Link
                href={link.href}
                className="transition-colors hover:text-logo"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </p>

        <div className="mx-auto mt-10 h-px max-w-xs bg-line" />

        <p className="mt-8 text-[0.8125rem] leading-relaxed text-muted">
          {doctoralia.clinic} · {doctoralia.addressLine}
          <br />
          {instagram.locations} · M.P. {doctoralia.license}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-line pt-6 md:flex-row md:justify-between">
          <p className="text-[0.6875rem] leading-relaxed text-muted/70">
            © 2026 {site.nameFull}. Todos los derechos reservados.
          </p>
          <p className="inline-flex items-center gap-2.5 text-xs text-white/65">
            <Image
              src="/images/logo-dev/logo-dev.webp"
              alt=""
              width={256}
              height={202}
              className="h-7 w-auto object-contain drop-shadow-[0_0_1.5px_rgba(255,255,255,0.85)] sm:h-8"
            />
            <span>
              Desarrollado por <span className="font-medium text-white/85">Agustin Ader</span>
            </span>
          </p>
        </div>
      </Fade>
    </footer>
  );
}
