import { doctoralia, instagram } from "./doctor-content";

export const site = {
  name: "Pablo Masoero",
  nameFull: doctoralia.name,
  role: `${instagram.specialty} · ${doctoralia.specialty}`,
  description: `${doctoralia.rinoplastyService}. ${doctoralia.clinic}, ${doctoralia.addressLine}.`,
  intro: `${instagram.degree}. ${instagram.locations}.`,
  instagram: instagram.url,
  email: "drpablomasoero@gmail.com",
  phone: "+54 294 443-0977",
  phoneHref: "tel:+542944430977",
  address: `${doctoralia.clinic} — ${doctoralia.addressLine}`,
  whatsapp: "https://wa.me/542944430977",
  linkedin: "https://www.linkedin.com/",
} as const;

export const navLinks = [
  { href: "#perfil", label: "Perfil" },
  { href: "#especialidad", label: "Especialidad" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const images = {
  logo: "/images/logo/masoero-trasnaprente.png",
  logoMark: "/images/logo/masoero-trasnaprente.png",
  portrait: "/images/about/About.png",
  hero: "/images/hero/hero-01.jpg",
  gallery: [
    "/images/gallery/despues1.png",
    "/images/gallery/despues2.png",
    "/images/gallery/despues3.png",
  ],
} as const;

export const procedures = [
  {
    title: doctoralia.rinoplastyService,
    text: `Servicio publicado en Doctoralia. ${doctoralia.clinic}, ${doctoralia.addressLine}.`,
  },
  {
    title: "Rinoseptoplastia",
    text: doctoralia.reviewQuote,
  },
  {
    title: doctoralia.services[0],
    text: doctoralia.services.slice(1, 5).join(" · "),
  },
] as const;
