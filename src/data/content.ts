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
    description: "Especialmente diseñado para mujeres emprendedoras, profesionales y madres que sostienen el triple rol sin manual de instrucciones. Herramientas prácticas para recuperar la calma y la energía diaria.",
    tags: ["Ayuntamientos", "Emprendedoras", "Profesionales", "Familias"],
    duration: "Taller vivencial de 2 a 3 horas",
    target: "Mujeres +35, emprendedoras, profesionales y madres",
  },
  {
    id: "aula",
    title: "Climaterio, conciliación y bienestar escolar",
    description: "Dirigido a claustros docentes, equipos de orientación y familias (AMPAs). Porque sostener la educación y la crianza en plena transición vital y sobrecarga cotidiana exige herramientas reales de autorregulación y cuidado de la energía.",
    tags: ["Escuelas", "Institutos", "Docentes", "AMPAs"],
    duration: "Seminario / Taller práctico para centros educativos",
    target: "Claustros docentes, equipos de orientación y familias (AMPAs)",
  },
  {
    id: "organizacion",
    title: "Sostenibilidad ejecutiva y talento sénior en la organización",
    description: "Intervención corporativa para comités, equipos de Personas/RRHH y trabajadoras +35. Retención del talento femenino sénior, foco mental frente al brain fog y prevención del burnout.",
    tags: ["Empresas", "RRHH", "Comités de Dirección"],
    duration: "Keynote (60-90 min) o Workshop intensivo (3 h)",
    target: "Dirección, People/RRHH, comités y trabajadoras +35",
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
  bookUrl: "https://tally.so/r/yXZyq4",
  corporateUrl: "https://naaraleadership.com",
  whatsappUrl: "https://wa.me/34600000000?text=Hola%20Sarah,%20me%20gustar%C3%ADa%20hablar%20sobre%20tus%20servicios.",
  // Enlace del formulario oficial de Tally (contacto general):
  contactFormUrl: "https://tally.so/r/jeDoNY",
  // Enlace del formulario oficial de lista de espera Club Naara Women:
  clubFormUrl: "https://tally.so/r/aONBJv",
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
