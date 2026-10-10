import Link from "next/link";
import { instagram } from "@/lib/doctor-content";
import { site } from "@/lib/site";

/** Barra fija inferior solo en móvil — turnos a un toque. */
export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex h-[var(--mobile-cta-h)] items-stretch gap-2 px-3 py-2">
        <Link
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-xl border border-line-strong text-[14px] font-medium text-ink"
        >
          WhatsApp
        </Link>
        <Link
          href="#contacto"
          className="flex flex-[1.2] items-center justify-center rounded-xl bg-turquoise text-[14px] font-medium text-[#101012]"
        >
          {instagram.turnos}
        </Link>
      </div>
    </div>
  );
}
