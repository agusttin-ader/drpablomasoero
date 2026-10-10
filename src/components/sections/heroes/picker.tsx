import Link from "next/link";
import { ACTIVE_HERO_VARIANT, type HeroVariantId } from "@/lib/hero-variant";

export function HeroPicker({ variantId }: { variantId: HeroVariantId }) {
  const isActive = ACTIVE_HERO_VARIANT === variantId;

  if (isActive) {
    return (
      <Link
        href="/"
        className="mt-3 shrink-0 rounded-full bg-turquoise px-5 py-2.5 text-[13px] font-medium text-[#101012] md:mt-0"
      >
        Activa en el sitio →
      </Link>
    );
  }

  return (
    <p className="mt-3 text-sm text-muted md:mt-0">Pedí en el chat: «probemos el hero {variantId}»</p>
  );
}
