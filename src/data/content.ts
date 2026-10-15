export interface Workshop {
  id: string;
  title: string;
  description: string;
  tags: string[];
  duration?: string;
  target: string;
}

export const WORKSHOPS: Workshop[] = [
  {
    id: "perimenopausia",
    title: "Perimenopausia: lo que nadie os cuenta",
    description: "Taller vivencial de 2–3 horas que responde las preguntas que el sistema no tiene tiempo de contestar. Especialmente diseñado para emprendedoras y madres que llevan el triple rol sin manual de instrucciones.",
    tags: ["Ayuntamientos", "Emprendedoras", "Madres", "Centros cívicos"],
    duration: "2–3 horas vivencial",
    target: "Mujeres +38, emprendedoras, familias y comunidad",
  },
  {
    id: "aula",
    title: "Climaterio en el aula",
    description: "Para profesorado, equipos de orientación y familias. Porque educar en esta etapa no es fácil — para las alumnas ni para quienes las acompañan.",
    tags: ["Escuelas", "Institutos", "Familias", "Equipos docentes"],
    duration: "Seminario / Taller práctico",
    target: "Claustros de profesores, AMPAs y equipos de orientación",
  },
  {
    id: "organizacion",
    title: "Bienestar femenino en la organización",
    description: "Charla o taller para equipos mixtos sobre retención del talento femenino en el climaterio. Absentismo, rendimiento y liderazgo — con datos reales.",
    tags: ["Empresas", "RRHH", "Liderazgo"],
    duration: "Keynote (60 min) o Workshop (3h)",
    target: "Dirección, People & Culture, managers y equipos mixtos",
  },
  {
    id: "medida",
    title: "Formación a medida",
    description: "¿Tienes una necesidad específica? Diseño formaciones adaptadas al contexto, duración y público de tu organización.",
    tags: ["A medida", "Sin compromiso", "Presencial u Online"],
    duration: "Flexible y personalizado",
    target: "Cualquier colectivo, institución o empresa",
  },
];

export const BOOK_PARTS = [
  {
    number: "01",
    title: "Las grietas",
    subtitle: "El shock invisible",
    description: "Reconocer las fisuras cuando creías tener el control absoluto de tu cuerpo y tu carrera.",
  },
  {
    number: "02",
    title: "Levantamiento de planos",
    subtitle: "Comprender la biología",
    description: "Mapear la neurociencia, las hormonas y la realidad sin mitos ni atajos farmacéuticos genéricos.",
  },
  {
    number: "03",
    title: "Demolición consciente",
    subtitle: "Soltar lo que ya no sostiene",
    description: "Dejar caer expectativas caducadas, culpas heredadas y el mandato del autosacrificio constante.",
  },
  {
    number: "04",
    title: "Cimientos nuevos",
    subtitle: "Reconstruir desde tu verdad",
    description: "Diseñar tu etapa de máxima potencia con claridad física, lucidez mental y liderazgo personal.",
  },
];

export const LIDERATE_LEVERS = [
  { name: "Liderazgo", desc: "Soberanía sobre tus decisiones y tus tiempos" },
  { name: "Identidad", desc: "Quién eres más allá de tus roles y exigencias" },
  { name: "Dirección", desc: "Rumbo claro en lugar de dispersión informativa" },
  { name: "Energía metabólica", desc: "Nutrición y fuerza adaptadas a tu biología +40" },
  { name: "Regulación nerviosa", desc: "Gestión del cortisol y serenidad somática" },
  { name: "Arquitectura hormonal", desc: "Entender el ritmo real de tu transición" },
  { name: "Transformación física", desc: "Movimiento funcional y masa muscular protectora" },
  { name: "Enfoque vital", desc: "Propósito, plenitud y libertad interior" },
];

export const CONTACT_INFO = {
  email: "inspira@sarahlarios.com",
  instagram: "https://instagram.com/naarawomen",
  instagramHandle: "@naarawomen",
  linkedin: "https://www.linkedin.com/company/naara-leadership/",
  bookUrl: "https://misegundaprimeravez.netlify.app/",
  corporateUrl: "https://naaraleadership.com",
  whatsappUrl: "https://wa.me/34600000000?text=Hola%20Sarah,%20me%20gustar%C3%ADa%20hablar%20sobre%20tus%20servicios.",
  // Enlace del formulario oficial de Tally:
  contactFormUrl: "https://tally.so/r/jeDoNY",
};

export function getFormEmbedUrl(rawUrl: string): string {
  if (!rawUrl) return "";
  const trimmed = rawUrl.trim();
  if (trimmed.includes("tally.so/r/")) {
    const code = trimmed.split("tally.so/r/")[1]?.split("?")[0]?.split("#")[0];
    return `https://tally.so/embed/${code}?alignLeft=1&hideTitle=1&transparentBackground=1`;
  }
  if (trimmed.includes("tally.so/embed/")) {
    return trimmed;
  }
  return trimmed;
}

export function isEmbeddableFormUrl(url: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  return (
    trimmed.includes("tally.so/r/") ||
    trimmed.includes("tally.so/embed/") ||
    trimmed.includes("sibforms.com") ||
    trimmed.includes("brevo.com")
  );
}
