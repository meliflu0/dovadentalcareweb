import clinic from "@/assets/clinic.jpg";
import smile from "@/assets/smile.jpg";
import hygiene from "@/assets/hygiene.jpg";
import kids from "@/assets/kids.jpg";
import diseñoSonrisa from "@/assets/diseño_sonrisa.jpg";
import limpiezaDental from "@/assets/limpieza-dental.png";
import implantes from "@/assets/implantes.jpg";
import cirugia from "@/assets/cirugia.jpg";
import periodoncia from "@/assets/periodoncia.jpg";
import estetica from "@/assets/estetica.jpg";
import ortodoncia from "@/assets/ortodoncia.jpg";

export type Service = {
  slug: string;
  name: string;
  h1: string;
  short: string;
  cardCta: string;
  cta: string;
  wa: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  what: string;
  forWho: string;
  benefits: string[];
  process: { title: string; text: string }[];
  care: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

const baseProcess = (plan: string, treat: string, follow: string) => [
  { title: "Valoración", text: "Conversamos sobre tus inquietudes y revisamos tu salud oral." },
  { title: "Diagnóstico", text: "El odontólogo identifica tu situación y te explica lo que encuentra." },
  { title: "Planificación", text: plan },
  { title: "Tratamiento indicado", text: treat },
  { title: "Controles", text: follow },
];

export const services: Service[] = [
  {
    slug: "odontologia-general-villavicencio",
    name: "Odontología general",
    h1: "Odontología general en Villavicencio",
    short: "Diagnóstico, prevención y tratamiento integral para cuidar tu salud oral.",
    cardCta: "Agendar consulta",
    cta: "Agendar consulta general",
    wa: "Hola, quiero solicitar una cita de odontología general en DOVA Dental Care.",
    image: clinic,
    imageAlt: "Consultorio odontológico moderno con sillón negro y detalles dorados (imagen ilustrativa)",
    metaTitle: "Odontología general en Villavicencio | DOVA Dental Care",
    metaDescription: "Consulta de odontología general en Villavicencio, barrio Hacarítama: prevención, diagnóstico y tratamiento integral. Agenda por WhatsApp.",
    intro: "La odontología general es el punto de partida para cuidar tu boca: prevenir, detectar a tiempo y tratar los problemas más habituales de salud oral.",
    what: "Incluye la revisión de dientes, encías y tejidos de la boca, la orientación sobre hábitos de higiene y el tratamiento de problemas frecuentes según lo que se encuentre en la valoración.",
    forWho: "Para niños, jóvenes y adultos que quieren revisar su salud oral, tienen alguna molestia o desean un control periódico. La indicación definitiva requiere valoración odontológica.",
    benefits: ["Detección temprana de problemas", "Orientación clara sobre tu salud oral", "Un plan de cuidado adaptado a ti", "Prevención de tratamientos más complejos"],
    process: baseProcess("Te proponemos las opciones de atención y su orden de prioridad.", "Se realiza la atención acordada contigo.", "Programamos controles periódicos cuando corresponde."),
    care: ["Cepíllate al menos dos veces al día", "Usa seda dental a diario", "Asiste a tus controles periódicos", "Consulta si notas molestias o cambios"],
    faqs: [
      { q: "¿Cada cuánto debo hacer una revisión?", a: "La frecuencia depende de cada persona. El odontólogo te recomendará un intervalo de controles según tu valoración." },
      { q: "¿Qué pasa en la primera consulta?", a: "Conversamos sobre tus inquietudes, revisamos tu boca y te explicamos las opciones de atención." },
      { q: "¿Atienden a toda la familia?", a: "Atendemos niños, jóvenes y adultos. Escríbenos para consultar disponibilidad." },
    ],
    related: ["limpieza-dental-villavicencio", "periodoncia-villavicencio", "odontopediatria-villavicencio"],
  },
  {
    slug: "limpieza-dental-villavicencio",
    name: "Limpieza dental",
    h1: "Limpieza dental en Villavicencio",
    short: "Elimina placa, sarro y manchas superficiales para mantener dientes y encías saludables.",
    cardCta: "Agendar limpieza",
    cta: "Agendar limpieza dental",
    wa: "Hola, quiero consultar disponibilidad para una limpieza dental en DOVA Dental Care.",
    image: limpiezaDental,
    imageAlt: "Cepillo de dientes, espejo dental y seda dental sobre lino beige (imagen ilustrativa)",
    metaTitle: "Limpieza dental en Villavicencio | DOVA Dental Care",
    metaDescription: "Limpieza dental profesional en Villavicencio para retirar placa y sarro y cuidar tus encías. Agenda tu cita por WhatsApp en DOVA Dental Care.",
    intro: "Una higiene profesional ayuda a retirar los depósitos que el cepillado diario no alcanza y a mantener dientes y encías en buen estado.",
    what: "Consiste en la remoción profesional de placa bacteriana, sarro y manchas superficiales, acompañada de recomendaciones de higiene en casa.",
    forWho: "Para la mayoría de personas como parte de su cuidado preventivo. El odontólogo determinará si necesitas una limpieza convencional u otro tipo de atención periodontal.",
    benefits: ["Sensación de boca limpia", "Ayuda a prevenir problemas de encías", "Mejora el aspecto superficial de los dientes", "Oportunidad para revisar tu salud oral"],
    process: baseProcess("Definimos el tipo de limpieza adecuado para tu caso.", "Se realiza la higiene profesional.", "Te recomendamos cada cuánto repetirla."),
    care: ["Mantén el cepillado y el uso de seda dental", "Si notas sensibilidad leve, coméntalo en tu control", "Limita alimentos y bebidas muy pigmentados las primeras horas"],
    faqs: [
      { q: "¿La limpieza dental duele?", a: "Suele ser bien tolerada. Si tienes sensibilidad, coméntalo para adaptar la atención." },
      { q: "¿Cada cuánto se recomienda?", a: "Depende de tu salud oral; el odontólogo te indicará la frecuencia adecuada." },
      { q: "¿La limpieza blanquea los dientes?", a: "Retira manchas superficiales, pero no cambia el color natural del diente. Para eso existe el blanqueamiento, previa valoración." },
    ],
    related: ["odontologia-general-villavicencio", "periodoncia-villavicencio", "blanqueamiento-dental-villavicencio"],
  },
  {
    slug: "blanqueamiento-dental-villavicencio",
    name: "Blanqueamiento dental",
    h1: "Blanqueamiento dental en Villavicencio",
    short: "Mejora el aspecto del color de tus dientes con un tratamiento indicado según tu valoración.",
    cardCta: "Consultar blanqueamiento",
    cta: "Consultar blanqueamiento",
    wa: "Hola, quiero recibir información sobre blanqueamiento dental en DOVA Dental Care.",
    image: smile,
    imageAlt: "Sonrisa natural y luminosa (imagen ilustrativa, no corresponde a un paciente)",
    metaTitle: "Blanqueamiento dental en Villavicencio | DOVA Dental Care",
    metaDescription: "Blanqueamiento dental en Villavicencio con valoración previa. Conoce si es adecuado para ti y agenda por WhatsApp en DOVA Dental Care.",
    intro: "El blanqueamiento busca aclarar el tono de los dientes. Antes de realizarlo, es importante valorar si es la opción indicada para ti.",
    what: "Es un tratamiento estético que aclara el color dental. El tipo de blanqueamiento y sus resultados dependen de las características de cada persona.",
    forWho: "Para personas con dientes y encías sanos que desean mejorar el color de su sonrisa. No todas las manchas responden igual; la valoración definirá si es adecuado.",
    benefits: ["Sonrisa con un tono más claro", "Tratamiento planificado según tu caso", "Orientación para mantener el resultado"],
    process: baseProcess("Definimos expectativas realistas y el método indicado.", "Se aplica el tratamiento según lo planificado.", "Revisamos la evolución y la sensibilidad."),
    care: ["Evita alimentos y bebidas muy pigmentados durante los días indicados", "Evita fumar", "Comenta cualquier sensibilidad al odontólogo"],
    faqs: [
      { q: "¿El blanqueamiento daña los dientes?", a: "Realizado con valoración y supervisión profesional, se busca minimizar riesgos. El odontólogo te explicará los efectos posibles, como sensibilidad temporal." },
      { q: "¿Cuánto dura el resultado?", a: "Varía según tus hábitos y características. Te daremos recomendaciones para mantenerlo." },
      { q: "¿Funciona en coronas o resinas?", a: "Los materiales de restauración no se aclaran como el diente natural. Por eso es importante la valoración previa." },
    ],
    related: ["estetica-dental-villavicencio", "diseno-de-sonrisa-villavicencio", "limpieza-dental-villavicencio"],
  },
  {
    slug: "diseno-de-sonrisa-villavicencio",
    name: "Diseño de sonrisa",
    h1: "Diseño de sonrisa en Villavicencio",
    short: "Explora opciones para armonizar la apariencia de tu sonrisa según tus características y necesidades.",
    cardCta: "Agendar valoración",
    cta: "Agendar valoración estética",
    wa: "Hola, quiero agendar una valoración para diseño de sonrisa en DOVA Dental Care.",
    image: diseñoSonrisa,
    imageAlt: "Sonrisa armoniosa en primer plano (imagen ilustrativa, no corresponde a un paciente)",
    metaTitle: "Diseño de sonrisa en Villavicencio | DOVA Dental Care",
    metaDescription: "Diseño de sonrisa en Villavicencio con planificación individual. Agenda tu valoración estética por WhatsApp en DOVA Dental Care.",
    intro: "El diseño de sonrisa es una planificación estética que busca armonizar forma, tamaño y color de los dientes con tu rostro.",
    what: "Parte de una valoración de tu sonrisa para proponer alternativas estéticas. Las opciones concretas se definen según tus características y expectativas.",
    forWho: "Para quienes desean mejorar la apariencia general de su sonrisa. Requiere una boca sana o el tratamiento previo de cualquier problema existente.",
    benefits: ["Planificación pensada para tu rostro", "Alternativas explicadas con claridad", "Resultado buscado de aspecto natural"],
    process: baseProcess("Analizamos tu sonrisa y definimos juntos los objetivos.", "Se realizan las fases acordadas en el plan.", "Hacemos controles para cuidar el resultado."),
    care: ["Mantén una higiene oral rigurosa", "Asiste a tus controles", "Evita morder objetos duros"],
    faqs: [
      { q: "¿Qué incluye un diseño de sonrisa?", a: "Depende de cada caso. Puede combinar distintos tratamientos estéticos y de salud oral definidos en la valoración." },
      { q: "¿El resultado se ve natural?", a: "El objetivo es una sonrisa armoniosa con tus rasgos. Los resultados varían según cada paciente." },
      { q: "¿Cuánto tiempo toma?", a: "El tiempo depende del plan de tratamiento; te lo explicaremos tras la valoración." },
    ],
    related: ["estetica-dental-villavicencio", "blanqueamiento-dental-villavicencio", "ortodoncia-villavicencio"],
  },
  {
    slug: "implantes-dentales-villavicencio",
    name: "Implantes dentales",
    h1: "Implantes dentales en Villavicencio",
    short: "Conoce las opciones de rehabilitación para reemplazar dientes ausentes mediante una valoración profesional.",
    cardCta: "Consultar implantes",
    cta: "Agendar valoración de implantes",
    wa: "Hola, quiero solicitar información sobre valoración para implantes dentales.",
    image: implantes,
    imageAlt: "Sillón odontológico en un consultorio luminoso (imagen ilustrativa)",
    metaTitle: "Implantes dentales en Villavicencio | DOVA Dental Care",
    metaDescription: "Valoración para implantes dentales en Villavicencio. Conoce alternativas para reemplazar dientes ausentes. Agenda por WhatsApp.",
    intro: "Los implantes dentales son una de las alternativas para rehabilitar espacios donde faltan dientes. Su indicación siempre requiere evaluación individual.",
    what: "Un implante es una pieza que se coloca en el hueso para servir de soporte a un diente artificial. La viabilidad depende de tu salud general y oral.",
    forWho: "Para personas que han perdido uno o varios dientes. El odontólogo evaluará si el implante es la opción adecuada o si existen otras alternativas.",
    benefits: ["Alternativa para recuperar función al masticar", "Mejora estética del espacio ausente", "Plan explicado paso a paso"],
    process: baseProcess("Evaluamos la viabilidad y te presentamos las alternativas.", "Se realizan las fases definidas en el plan.", "Los controles son parte importante del tratamiento."),
    care: ["Sigue las indicaciones entregadas en consulta", "Mantén una higiene cuidadosa en la zona", "Asiste a todos los controles programados"],
    faqs: [
      { q: "¿Cualquier persona puede tener implantes?", a: "No siempre. Depende de factores de salud general y oral que se analizan en la valoración." },
      { q: "¿Hay alternativas a los implantes?", a: "Sí. Según tu caso, el odontólogo te explicará otras opciones de rehabilitación." },
      { q: "¿Cuánto cuesta un implante?", a: "El costo depende del plan de tratamiento. Escríbenos para recibir información actualizada." },
    ],
    related: ["cirugia-oral-villavicencio", "periodoncia-villavicencio", "odontologia-general-villavicencio"],
  },
  {
    slug: "ortodoncia-villavicencio",
    name: "Ortodoncia",
    h1: "Ortodoncia en Villavicencio",
    short: "Evalúa opciones para mejorar la posición de tus dientes y la relación de tu mordida.",
    cardCta: "Agendar valoración",
    cta: "Agendar valoración de ortodoncia",
    wa: "Hola, quiero consultar una valoración de ortodoncia en DOVA Dental Care.",
    image: ortodoncia,
    imageAlt: "Sonrisa alineada en primer plano (imagen ilustrativa, no corresponde a un paciente)",
    metaTitle: "Ortodoncia en Villavicencio | DOVA Dental Care",
    metaDescription: "Valoración de ortodoncia en Villavicencio para mejorar la posición dental y la mordida. Agenda por WhatsApp en DOVA Dental Care.",
    intro: "La ortodoncia evalúa la posición de los dientes y la relación de la mordida para proponer opciones de corrección.",
    what: "Es el área de la odontología que busca mejorar la alineación dental y la mordida mediante aparatos indicados según cada caso.",
    forWho: "Para niños, jóvenes y adultos con dientes desalineados o problemas de mordida. El tipo de tratamiento se define en la valoración.",
    benefits: ["Mejor alineación dental", "Ayuda a la función de la mordida", "Facilita la higiene oral"],
    process: baseProcess("Te explicamos las opciones y la duración estimada.", "Se instala y ajusta el tratamiento indicado.", "Controles periódicos durante todo el proceso."),
    care: ["Cepíllate con especial cuidado alrededor de los aparatos", "Evita alimentos muy duros o pegajosos", "No faltes a tus controles"],
    faqs: [
      { q: "¿Hay una edad para la ortodoncia?", a: "Puede realizarse en distintas etapas de la vida. La valoración determinará el momento y la opción adecuados." },
      { q: "¿Cuánto dura el tratamiento?", a: "Depende de cada caso. Te daremos una estimación después de la valoración." },
      { q: "¿Es necesario usar retenedores?", a: "Generalmente se recomienda una fase de retención; el odontólogo te indicará cómo será en tu caso." },
    ],
    related: ["diseno-de-sonrisa-villavicencio", "odontopediatria-villavicencio", "estetica-dental-villavicencio"],
  },
  {
    slug: "odontopediatria-villavicencio",
    name: "Odontopediatría",
    h1: "Odontopediatría en Villavicencio",
    short: "Prevención y atención odontológica infantil con una comunicación cercana y adaptada a la edad.",
    cardCta: "Agendar cita para mi hijo",
    cta: "Agendar cita para mi hijo",
    wa: "Hola, quiero consultar disponibilidad para una cita de odontopediatría.",
    image: kids,
    imageAlt: "Niña sonriente cepillándose los dientes (imagen ilustrativa, no corresponde a un paciente)",
    metaTitle: "Odontopediatría en Villavicencio | DOVA Dental Care",
    metaDescription: "Atención odontológica para niños en Villavicencio: prevención y cuidado con trato cercano. Agenda la cita de tu hijo por WhatsApp.",
    intro: "Cuidar la salud oral desde la infancia ayuda a crear buenos hábitos y a detectar a tiempo cualquier problema.",
    what: "Atención odontológica para niños con enfoque preventivo, educación en higiene y tratamiento de problemas frecuentes según la edad.",
    forWho: "Para bebés, niños y preadolescentes. Recomendamos que el niño asista acompañado de un adulto responsable.",
    benefits: ["Experiencias positivas en el consultorio", "Hábitos de higiene desde temprano", "Detección temprana de problemas"],
    process: baseProcess("Explicamos a los padres las recomendaciones y opciones.", "Atendemos al niño con paciencia y lenguaje adaptado.", "Controles para acompañar su crecimiento."),
    care: ["Supervisa el cepillado de los más pequeños", "Limita dulces y bebidas azucaradas", "Asiste a los controles recomendados"],
    faqs: [
      { q: "¿Cuándo debe ser la primera visita?", a: "Te orientaremos según la edad del niño. Escríbenos y consulta la atención disponible." },
      { q: "¿Qué hago si mi hijo tiene miedo?", a: "Buscamos una comunicación cercana y paciente. Cuéntanos con antelación para preparar la visita." },
      { q: "¿Los padres pueden acompañar?", a: "Sí, el acompañamiento de un adulto responsable es importante." },
    ],
    related: ["odontologia-general-villavicencio", "limpieza-dental-villavicencio", "ortodoncia-villavicencio"],
  },
  {
    slug: "cirugia-oral-villavicencio",
    name: "Cirugía oral",
    h1: "Cirugía oral en Villavicencio",
    short: "Valoración de necesidades quirúrgicas orales y orientación sobre las alternativas indicadas.",
    cardCta: "Agendar valoración",
    cta: "Agendar valoración quirúrgica",
    wa: "Hola, quiero consultar una valoración de cirugía oral.",
    image: cirugia,
    imageAlt: "Consultorio odontológico ordenado y limpio (imagen ilustrativa)",
    metaTitle: "Cirugía oral en Villavicencio | DOVA Dental Care",
    metaDescription: "Valoración de cirugía oral en Villavicencio con orientación clara sobre las alternativas indicadas. Agenda por WhatsApp.",
    intro: "Algunas situaciones de la boca requieren un procedimiento quirúrgico. La valoración permite saber si es necesario y cuál es la mejor alternativa.",
    what: "La cirugía oral abarca procedimientos en dientes y tejidos de la boca. El procedimiento concreto se determina tras el diagnóstico.",
    forWho: "Para personas con indicación quirúrgica valorada por el odontólogo. En algunos casos puede requerirse remisión a otro profesional.",
    benefits: ["Orientación clara antes de decidir", "Atención planificada", "Indicaciones de cuidado posterior"],
    process: baseProcess("Te explicamos el procedimiento, riesgos y alternativas.", "Se realiza el procedimiento indicado.", "Control posterior para revisar la recuperación."),
    care: ["Sigue estrictamente las indicaciones recibidas", "Evita esfuerzos y alimentos calientes los primeros días si así se indica", "Consulta ante dolor intenso, fiebre o sangrado persistente"],
    faqs: [
      { q: "¿La cirugía oral es dolorosa?", a: "Se realiza con anestesia según el caso. Te explicaremos qué esperar durante la recuperación." },
      { q: "¿Cuánto tarda la recuperación?", a: "Depende del procedimiento y de cada persona. Recibirás indicaciones específicas." },
      { q: "¿Debo ir acompañado?", a: "En algunos casos se recomienda. Te lo indicaremos al programar la atención." },
    ],
    related: ["implantes-dentales-villavicencio", "odontologia-general-villavicencio", "periodoncia-villavicencio"],
  },
  {
    slug: "periodoncia-villavicencio",
    name: "Periodoncia",
    h1: "Tratamiento de encías en Villavicencio",
    short: "Salud de las encías y los tejidos de soporte con una evaluación cuidadosa.",
    cardCta: "Agendar valoración",
    cta: "Agendar valoración de encías",
    wa: "Hola, quiero consultar una valoración para el cuidado de mis encías.",
    image: periodoncia,
    imageAlt: "Elementos de higiene oral sobre lino (imagen ilustrativa)",
    metaTitle: "Tratamiento de encías en Villavicencio | DOVA Dental Care",
    metaDescription: "Periodoncia y tratamiento de encías en Villavicencio. Valoración de sangrado, inflamación y tejidos de soporte. Agenda por WhatsApp.",
    intro: "Unas encías sanas son la base de una boca sana. El sangrado o la inflamación son señales que conviene valorar.",
    what: "La periodoncia se ocupa de las encías y de los tejidos que sostienen los dientes, desde la prevención hasta el tratamiento de problemas periodontales.",
    forWho: "Para personas con sangrado, inflamación, mal aliento persistente o sensación de movilidad dental. La valoración definirá el tratamiento.",
    benefits: ["Control de la inflamación", "Cuidado de los tejidos de soporte", "Hábitos para mantener encías sanas"],
    process: baseProcess("Definimos el tratamiento según el estado de tus encías.", "Se realiza la atención periodontal indicada.", "Mantenimiento y controles periódicos."),
    care: ["Cepillado suave y uso de seda dental diario", "Evita fumar", "Asiste a las sesiones de mantenimiento indicadas"],
    faqs: [
      { q: "¿Es normal que me sangren las encías?", a: "No debería ser habitual. Es recomendable que un odontólogo lo valore." },
      { q: "¿Los problemas de encías tienen solución?", a: "Muchos pueden controlarse con tratamiento y buenos hábitos. El pronóstico depende de cada caso." },
      { q: "¿Necesito controles frecuentes?", a: "Suele recomendarse un mantenimiento periódico; te indicaremos la frecuencia." },
    ],
    related: ["limpieza-dental-villavicencio", "implantes-dentales-villavicencio", "cirugia-oral-villavicencio"],
  },
  {
    slug: "estetica-dental-villavicencio",
    name: "Estética dental",
    h1: "Estética dental en Villavicencio",
    short: "Alternativas para mejorar la apariencia de tus dientes y la armonía de tu sonrisa.",
    cardCta: "Quiero mejorar mi sonrisa",
    cta: "Quiero mejorar mi sonrisa",
    wa: "Hola, quiero recibir información sobre los servicios de estética dental.",
    image: estetica,
    imageAlt: "Sonrisa natural en primer plano (imagen ilustrativa, no corresponde a un paciente)",
    metaTitle: "Estética dental en Villavicencio | DOVA Dental Care",
    metaDescription: "Estética dental en Villavicencio: alternativas para mejorar la apariencia de tus dientes según tu valoración. Agenda por WhatsApp.",
    intro: "La estética dental reúne alternativas para mejorar la forma, el color y la armonía de los dientes, siempre sobre una base de salud oral.",
    what: "Comprende distintos tratamientos estéticos que se seleccionan según tus características, expectativas y la valoración profesional.",
    forWho: "Para quienes quieren mejorar la apariencia de su sonrisa. Primero se atiende cualquier problema de salud oral existente.",
    benefits: ["Sonrisa más armoniosa", "Opciones adaptadas a tus expectativas", "Planificación con criterio profesional"],
    process: baseProcess("Te presentamos las alternativas y lo que puedes esperar.", "Se realizan los tratamientos acordados.", "Controles para mantener el resultado."),
    care: ["Mantén una buena higiene oral", "Evita hábitos como morder uñas u objetos", "Asiste a tus controles"],
    faqs: [
      { q: "¿Qué tratamientos incluye la estética dental?", a: "Entre los servicios informados están el blanqueamiento y el diseño de sonrisa. La opción adecuada depende de la valoración." },
      { q: "¿Los resultados son permanentes?", a: "Depende del tratamiento y de tus hábitos. Te explicaremos el mantenimiento necesario." },
      { q: "¿Necesito una valoración previa?", a: "Sí. Es indispensable para elegir una opción segura y adecuada." },
    ],
    related: ["diseno-de-sonrisa-villavicencio", "blanqueamiento-dental-villavicencio", "ortodoncia-villavicencio"],
  },
];

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service ${slug}`);
  return s;
};

export const featuredServices = services.slice(0, 6);
