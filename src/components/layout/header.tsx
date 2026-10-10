"use client";

import { useEffect, useState } from "react";
import { getHeaderVariant, type HeaderVariantId } from "@/lib/header-variant";
import { HeaderVariant1 } from "./headers/variant-1";
import { HeaderVariant2 } from "./headers/variant-2";
import { HeaderVariant3 } from "./headers/variant-3";
import { HeaderVariant4 } from "./headers/variant-4";
import { HeaderVariant5 } from "./headers/variant-5";

const map: Record<HeaderVariantId, React.ComponentType> = {
  1: HeaderVariant1,
  2: HeaderVariant2,
  3: HeaderVariant3,
  4: HeaderVariant4,
  5: HeaderVariant5,
};

export function Header() {
  const [variant, setVariant] = useState<HeaderVariantId>(1);

  useEffect(() => {
    setVariant(getHeaderVariant());
    const sync = () => setVariant(getHeaderVariant());
    window.addEventListener("header-variant-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("header-variant-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const Component = map[variant];
  return <Component />;
}
