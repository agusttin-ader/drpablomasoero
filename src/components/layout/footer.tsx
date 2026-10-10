import Image from "next/image";
import Link from "next/link";
import { images, navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-10 px-4 py-12 sm:px-5 sm:py-16 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-4">
          <Image src={images.logo} alt="" width={44} height={44} className="h-10 w-10 object-contain" />
          <div>
            <p className="font-serif text-lg text-ink">{site.name}</p>
            <p className="text-sm text-muted">{site.role}</p>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-[15px] text-muted sm:flex sm:flex-wrap sm:gap-x-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="flex min-h-11 items-center hover:text-turquoise">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
