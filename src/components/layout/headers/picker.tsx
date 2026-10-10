"use client";

import { useRouter } from "next/navigation";
import { setHeaderVariant, type HeaderVariantId } from "@/lib/header-variant";

export function HeaderPicker({ variantId }: { variantId: HeaderVariantId }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        setHeaderVariant(variantId);
        router.push("/");
      }}
      className="mt-3 shrink-0 rounded-full border border-turquoise/50 px-5 py-2.5 text-[13px] text-turquoise transition hover:bg-turquoise hover:text-[#101012] md:mt-0"
    >
      Usar en el sitio
    </button>
  );
}
