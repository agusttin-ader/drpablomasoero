import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import { images, site } from "@/lib/site";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#18181b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <head>
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href={images.heroCircuit.fallback}
          imageSrcSet={images.heroCircuit.srcSet}
          imageSizes="100vw"
        />
      </head>
      <body className="min-h-full overflow-x-hidden bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
