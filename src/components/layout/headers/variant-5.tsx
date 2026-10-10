"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";
import { images, navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { HeaderShell } from "./shell";

export function HeaderVariant5({ preview }: { preview?: boolean }) {
  const [open, setOpen] = useState(false);
  const visible = useHideOnScroll(open && !preview);

  useEffect(() => {
    if (preview) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, preview]);

  return (
    <>
      <HeaderShell
        preview={preview}
        visible={preview ? true : visible}
        className="border-b border-transparent bg-gradient-to-b from-canvas/95 to-canvas/40 backdrop-blur-sm"
      >
        <div className="mx-auto flex h-[4.25rem] max-w-[88rem] items-center justify-between px-5 md:px-10">
          <Link href="#" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image src={images.logo} alt="" width={40} height={40} className="h-9 w-9 object-contain" />
            <span className="font-serif text-lg text-ink">{site.name}</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-ink"
          >
            Menú
            <span className="flex flex-col gap-1">
              <span className={cn("h-px w-4 bg-ink transition", open && "opacity-50")} />
              <span className={cn("h-px w-4 bg-ink transition", open && "opacity-50")} />
            </span>
          </button>
        </div>
      </HeaderShell>

      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-canvas/97 backdrop-blur-xl transition duration-500",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          preview && "absolute",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute right-5 top-5 text-[12px] uppercase tracking-[0.2em] text-muted md:right-10"
          onClick={() => setOpen(false)}
        >
          Cerrar
        </button>
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl text-ink transition hover:text-turquoise md:text-5xl"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contacto"
          onClick={() => setOpen(false)}
          className="mt-12 rounded-full bg-turquoise px-10 py-3 text-[13px] font-medium text-[#101012]"
        >
          Reservar consulta
        </Link>
      </div>
    </>
  );
}
