import { MobileHome } from "@/components/mobile/mobile-home";
import { ScrollToTopOnLoad } from "@/components/mobile/scroll-to-top-on-load";

export default function Home() {
  return (
    <div className="ambient min-h-screen">
      <ScrollToTopOnLoad />
      <MobileHome />
    </div>
  );
}
