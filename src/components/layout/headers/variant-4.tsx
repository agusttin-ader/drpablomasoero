"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";
import { images, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { HeaderShell, MenuButton } from "./shell";
import { MobileDropdown } from "./variant-1";

export function HeaderVariant4({ preview }: { preview?: boolean }) {
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
    <HeaderShell preview={preview} visible={preview ? true : visible} className="pointer-events-none">
      <div className="relative mx-auto flex h-[4.75rem] max-w-[88rem] items-center px-5 md:px-10">
        <Link href="#" className="pointer-events-auto flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src={images.logo} alt="" width={40} height={40} className="h-9 w-9 object-contain" />
        </Link>

        <nav
          className={cn(
            "pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-line-strong bg-canvas-elevated/80 px-2 py-1.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:flex",
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[12px] text-muted transition hover:bg-white/5 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="pointer-events-auto ml-auto flex items-center gap-3">
          <Link
            href="#contacto"
            className="hidden rounded-full bg-turquoise px-5 py-2 text-[12px] font-medium text-[#101012] sm:inline-flex"
          >
            Consulta
          </Link>
          <div className="lg:hidden">
            <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </div>
      </div>
      <div className="pointer-events-auto border-t border-line bg-canvas/90 backdrop-blur-xl lg:hidden">
        <MobileDropdown open={open} onClose={() => setOpen(false)} />
      </div>
    </HeaderShell>
  );
}
