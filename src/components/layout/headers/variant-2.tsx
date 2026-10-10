"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";
import { images, navLinks, site } from "@/lib/site";
import { HeaderShell, MenuButton } from "./shell";
import { MobileDropdown } from "./variant-1";

export function HeaderVariant2({ preview }: { preview?: boolean }) {
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
    <HeaderShell
      preview={preview}
      visible={preview ? true : visible}
      className="border-b border-line bg-canvas/95 backdrop-blur-xl"
    >
      <div className="border-b border-turquoise/15 bg-turquoise/[0.06] py-2 text-center text-[10px] uppercase tracking-[0.35em] text-turquoise">
        Rinoplastia · San Carlos de Bariloche
      </div>
      <div className="relative mx-auto flex h-[4.25rem] max-w-[88rem] items-center justify-between px-5 md:px-10">
        <Link href="#" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src={images.logo} alt="" width={36} height={36} className="h-8 w-8 object-contain" />
        </Link>
        <p className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 font-serif text-xl text-ink md:block">
          {site.name}
        </p>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[12px] uppercase tracking-[0.18em] text-muted hover:text-turquoise">
              {link.label}
            </Link>
          ))}
          <Link href="#contacto" className="rounded-full border border-turquoise/40 px-4 py-1.5 text-[11px] uppercase tracking-wider text-turquoise">
            Consulta
          </Link>
        </nav>
        <div className="md:hidden">
          <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
        </div>
      </div>
      <MobileDropdown open={open} onClose={() => setOpen(false)} className="md:hidden" />
    </HeaderShell>
  );
}
