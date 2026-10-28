// Información comercial centralizada. Edita aquí y se actualiza en todo el sitio.
import odontologoPhoto from "@/assets/odontologo-1.webp";

export const site = {
  name: "Odontología DOVA Dental Care",
  shortName: "DOVA Dental Care",
  city: "Villavicencio",
  region: "Meta",
  country: "Colombia",
  neighborhood: "Hacarítama",
  address: "Cl. 4 #16-57, Villavicencio, Meta, Colombia",
  streetAddress: "Cl. 4 #16-57",
  phoneDisplay: "+57 320 253 3409",
  phoneE164: "+573202533409",
  whatsappNumber: "573202533409",
  email: "dovadental@gmail.com",
  social: {
    instagram: "https://www.instagram.com/odontologiadovadental/",
    facebook: "https://www.facebook.com/profile.php?id=61595472553700",
    tiktok: "https://www.tiktok.com/@consultorio.odont44",
    googleReview: "https://g.page/r/CSQParFdBFfNEBM/review",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Cl. 4 #16-57, Villavicencio, Meta, Colombia"),
  mapsEmbed: "https://www.google.com/maps?q=" + encodeURIComponent("Cl. 4 #16-57, Villavicencio, Meta, Colombia") + "&output=embed",
  hours: { weekdays: "Lunes a sábado: 9:00 a. m. – 8:00 p. m.", sunday: "Domingo: cerrado" },
  payments: ["Efectivo", "Tarjeta", "Transferencia bancaria", "Nequi", "Addi", "Sistecrédito"],
  doctor: {
    name: "Dubbling Orlando Vargas Ávila",
    role: "Odontólogo general",
    experience: "Más de 14 años de experiencia",
    education: "Odontólogo de la Universidad del Magdalena",
    photo: odontologoPhoto,
  },
  // Solo se muestran cifras cuando verified = true.
  reviews: { verified: false, rating: 5, count: 10 },
  dataController: {
    name: "Leydy Yulieth Barragán Vásquez",
    personType: "Persona natural",
    id: "1.116.545.297",
    nit: "1.116.545.297-1",
    rutAddress: "Cra. 8 # 13A-04, Aguazul, Casanare",
    email: "leidybarragan104@gmail.com",
    activity: "8620 — actividades de práctica médica y odontológica",
    startDate: "10 de octubre de 2022",
  },
  legalUpdated: "25 de octubre de 2026",
} as const;
