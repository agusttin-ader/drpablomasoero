import { doctoralia, instagram } from "./doctor-content";

export const site = {
  name: "Pablo Masoero",
  nameFull: doctoralia.name,
  role: `${instagram.specialty} · ${doctoralia.specialty}`,
  description: `${doctoralia.rinoplastyService}. ${doctoralia.clinic}, ${doctoralia.addressLine}.`,
  intro: `${instagram.degree}. ${instagram.locations}.`,
  instagram: instagram.url,
  email: "drpablomasoero@gmail.com",
  phone: "+54 294 465-9055",
  phoneHref: "tel:+542944659055",
  address: `${doctoralia.clinic} — ${doctoralia.addressLine}`,
  whatsapp: "https://wa.me/542944659055",
  linkedin: "https://www.linkedin.com/in/pablo-masoero-960305160/",
  facebook:
    "https://www.facebook.com/people/Dr-Masoero-Pablo/100063579576081/",
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
  heroCircuit: "/images/hero/circuito-chico.jpg",
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
