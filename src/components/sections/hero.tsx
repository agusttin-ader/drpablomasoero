import { ACTIVE_HERO_VARIANT } from "@/lib/hero-variant";
import { HeroVariant1 } from "./heroes/variant-1";
import { HeroVariant2 } from "./heroes/variant-2";
import { HeroVariant3 } from "./heroes/variant-3";
import { HeroVariant4 } from "./heroes/variant-4";
import { HeroVariant5 } from "./heroes/variant-5";
import { HeroVariant6 } from "./heroes/variant-6";
import { HeroVariant7 } from "./heroes/variant-7";
import { HeroVariant8 } from "./heroes/variant-8";
import { HeroVariant9 } from "./heroes/variant-9";
import { HeroVariant10 } from "./heroes/variant-10";

const map = {
  1: HeroVariant1,
  2: HeroVariant2,
  3: HeroVariant3,
  4: HeroVariant4,
  5: HeroVariant5,
  6: HeroVariant6,
  7: HeroVariant7,
  8: HeroVariant8,
  9: HeroVariant9,
  10: HeroVariant10,
} as const;

export function Hero() {
  const Component = map[ACTIVE_HERO_VARIANT];
  return <Component />;
}
