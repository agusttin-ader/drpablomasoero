"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";
import { images, navLinks } from "@/lib/site";
import { HeaderShell, MenuButton } from "./shell";
import { MobileDropdown } from "./variant-1";

export function HeaderVariant3({ preview }: { preview?: boolean }) {
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
      className="border-b border-white/5 bg-canvas/80 backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-12 max-w-[88rem] items-center justify-between px-5 md:h-14 md:px-10">
        <Link href="#" onClick={() => setOpen(false)}>
          <Image src={images.logo} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className="hidden text-[11px] font-medium uppercase tracking-[0.28em] text-turquoise md:inline"
          >
            Consulta →
          </Link>
          <div className="md:hidden">
            <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </div>
      </div>
      <MobileDropdown open={open} onClose={() => setOpen(false)} className="md:hidden" />
    </HeaderShell>
  );
}
