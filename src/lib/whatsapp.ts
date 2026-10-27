import { site } from "@/config/site";

export const WA_MESSAGES = {
  general: "Hola, quiero agendar una cita en DOVA Dental Care.",
  doctor: "Hola, quiero agendar una cita con el odontologo Dubbling",
  valoracion: "Hola, quiero agendar una valoración para mejorar mi sonrisa",
} as const;

export function waLink(message: string = WA_MESSAGES.general): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type AppointmentRequest = {
  name: string;
  phone: string;
  service: string;
  preferred?: string;
  message?: string;
};

export function buildAppointmentMessage(r: AppointmentRequest): string {
  return [
    "Hola, quiero solicitar una cita en DOVA Dental Care.",
    `Nombre: ${r.name.trim()}`,
    `Teléfono: ${r.phone.trim()}`,
    `Servicio de interés: ${r.service}`,
    `Fecha u horario preferido: ${r.preferred?.trim() || "Sin preferencia"}`,
    `Mensaje adicional: ${r.message?.trim() || "Ninguno"}`,
    "Gracias.",
  ].join("\n");
}

// Acepta formatos flexibles: +57 320 253 3409, 3202533409, (320) 253-3409
export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return /^[+\d\s().-]+$/.test(phone.trim()) && digits.length >= 7 && digits.length <= 15;
}
