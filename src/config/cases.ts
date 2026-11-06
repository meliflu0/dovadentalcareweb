// Configuración de casos de éxito para la galería de antes/después
// Agrega aquí los casos reales cuando tengas autorización de los pacientes

import antes1 from "@/assets/ANTES_1.jpeg";
import despues1 from "@/assets/DESPUES_!.jpeg";
import antes2 from "@/assets/ANTES_2.jpeg";
import despues2 from "@/assets/DESPUES_2.jpeg";
import antes3 from "@/assets/ANTES_3.jpeg";
import despues3 from "@/assets/DESPUES_3.jpeg";
import antes4 from "@/assets/ANTES_4.jpeg";
import despues4 from "@/assets/DESPUES_4.jpeg";

export type Case = {
  id: string;
  treatment: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

export const cases: Case[] = [
  {
    id: "case-1",
    treatment: "Tratamiento estético dental",
    description: "Mejora de la apariencia de la sonrisa mediante tratamiento odontológico",
    beforeImage: antes1,
    afterImage: despues1,
    beforeAlt: "Sonrisa antes del tratamiento odontológico",
    afterAlt: "Sonrisa después del tratamiento odontológico",
  },
  {
    id: "case-2",
    treatment: "Tratamiento estético dental",
    description: "Mejora de la apariencia de la sonrisa mediante tratamiento odontológico",
    beforeImage: antes2,
    afterImage: despues2,
    beforeAlt: "Sonrisa antes del tratamiento odontológico",
    afterAlt: "Sonrisa después del tratamiento odontológico",
  },
  {
    id: "case-3",
    treatment: "Tratamiento estético dental",
    description: "Mejora de la apariencia de la sonrisa mediante tratamiento odontológico",
    beforeImage: antes3,
    afterImage: despues3,
    beforeAlt: "Sonrisa antes del tratamiento odontológico",
    afterAlt: "Sonrisa después del tratamiento odontológico",
  },
  {
    id: "case-4",
    treatment: "Tratamiento estético dental",
    description: "Mejora de la apariencia de la sonrisa mediante tratamiento odontológico",
    beforeImage: antes4,
    afterImage: despues4,
    beforeAlt: "Sonrisa antes del tratamiento odontológico",
    afterAlt: "Sonrisa después del tratamiento odontológico",
  },
];
