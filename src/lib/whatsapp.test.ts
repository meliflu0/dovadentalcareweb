import { describe, expect, it } from "vitest";
import { buildAppointmentMessage, isValidPhone, waLink, WA_MESSAGES } from "./whatsapp";

describe("whatsapp", () => {
  it("uses the clinic number", () => {
    expect(waLink("Hola")).toBe("https://wa.me/573202533409?text=Hola");
  });
  it("doctor link matches the official scheduling URL", () => {
    expect(waLink(WA_MESSAGES.doctor)).toBe(
      "https://wa.me/573202533409?text=Hola%2C%20quiero%20agendar%20una%20cita%20con%20el%20odontologo%20Dubbling",
    );
  });
  it("builds the appointment message in the required format", () => {
    const msg = buildAppointmentMessage({ name: "Ana", phone: "3001234567", service: "Ortodoncia", preferred: "Lunes", message: "" });
    expect(msg.split("\n")[0]).toBe("Hola, quiero solicitar una cita en DOVA Dental Care.");
    expect(msg).toContain("Servicio de interés: Ortodoncia");
    expect(msg.endsWith("Gracias.")).toBe(true);
  });
  it("validates phones flexibly", () => {
    expect(isValidPhone("+57 320 253 3409")).toBe(true);
    expect(isValidPhone("abc")).toBe(false);
    expect(isValidPhone("123")).toBe(false);
  });
});
