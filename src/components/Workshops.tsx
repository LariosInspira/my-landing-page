import React from "react";
import { Mail, ArrowRight, CheckCircle2, Calendar, MapPin, Sparkles } from "lucide-react";
import { WORKSHOPS, CONTACT_INFO } from "../data/content";

interface WorkshopsProps {
  onOpenInquiry: (topic?: string) => void;
}

export const Workshops: React.FC<WorkshopsProps> = ({ onOpenInquiry }) => {
  const cardColorStyles = [
    {
      border: "border-[#FCD6CA] hover:border-[#D35431]",
      tagColor: "text-[#D35431]",
      btnColor: "text-[#D35431] hover:text-[#BA3E1E]",
      dot: "bg-[#D35431]",
    },
    {
      border: "border-[#C5DDD1] hover:border-[#164E38]",
      tagColor: "text-[#164E38]",
      btnColor: "text-[#164E38] hover:text-[#0F3524]",
      dot: "bg-[#164E38]",
    },
    {
      border: "border-[#F6E3B8] hover:border-[#D4A338]",
      tagColor: "text-[#B5851C]",
      btnColor: "text-[#B5851C] hover:text-[#8C640C]",
      dot: "bg-[#D4A338]",
    },
    {
      border: "border-[#FCD6CA] hover:border-[#E25A36]",
      tagColor: "text-[#E25A36]",
      btnColor: "text-[#E25A36] hover:text-[#BA3E1E]",
      dot: "bg-[#E25A36]",
    },
  ];

  return (
    <section id="formaciones" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Header & Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4F0] border border-[#C5DDD1] text-[#164E38] text-xs uppercase tracking-[0.2em] font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#164E38]" />
              <span>Formación & talleres</span>
            </div>

            <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917] leading-tight">
              Llevar el climaterio donde más importa.
            </h2>

            <p className="text-base sm:text-lg text-[#57534E] font-light leading-relaxed max-w-3xl">
              Trabajo con ayuntamientos, centros de salud, escuelas y organizaciones que entienden que el bienestar femenino es una inversión, no un gasto. Talleres a medida, presenciales u online, sobre demanda.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              type="button"
              onClick={() => onOpenInquiry("Formación general")}
              className="inline-flex items-center gap-2.5 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#164E38] hover:bg-[#103828] rounded-md transition-colors shadow-md whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-[#FDE68A]" />
              <span>Solicita información</span>
            </button>
          </div>
        </div>

        {/* Environmental Photography Banner with vibrant badge */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[21/9] sm:aspect-[16/6] bg-[#EAE5DC] border-2 border-[#E7E2DA]">
          <img
            src="/src/assets/images/talleres_climaterio_espacio_1791546947311.jpg"
            alt="Espacio formativo luminoso y moderno para talleres sobre climaterio y liderazgo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2A1E]/95 via-[#0C2A1E]/60 to-transparent p-6 sm:p-10 flex flex-col justify-end text-white max-w-xl">
            <span className="px-3 py-1 rounded-full bg-[#E25A36] text-white text-xs font-bold uppercase tracking-wider mb-2.5 w-fit shadow-xs">
              Intervenciones con impacto
            </span>
            <p className="font-serif-brand text-2xl sm:text-3xl font-medium leading-snug">
              Espacios de rigor, cercanía y escucha activa.
            </p>
            <p className="text-xs sm:text-sm text-[#D8E6DF] font-light mt-2">
              Diseño cada intervención para generar impacto medible en las personas y en la cultura de la organización.
            </p>
          </div>
        </div>

        {/* The 4 Workshop Cards Grid with distinct colored accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORKSHOPS.map((workshop, idx) => {
            const style = cardColorStyles[idx % cardColorStyles.length];
            return (
              <div
                key={workshop.id}
                className={`p-8 rounded-2xl bg-white border-2 ${style.border} shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6 relative overflow-hidden`}
              >
                <div className="space-y-4">
                  {/* Clean tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold">
                    <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                    {workshop.tags.map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span className={style.tagColor}>{tag}</span>
                        {tIdx < workshop.tags.length - 1 && (
                          <span aria-hidden="true" className="text-[#D4A338]">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917] leading-snug">
                    {workshop.title}
                  </h3>

                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {workshop.description}
                  </p>

                  {workshop.duration && (
                    <div className="pt-2 text-xs text-[#78716C] flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#164E38]" />
                      <span>Formato: {workshop.duration}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenInquiry(workshop.title)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${style.btnColor} transition-colors`}
                  >
                    <span>Pedir propuesta para este taller</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Email Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#EBF4F0] via-[#F4FAF6] to-[#FFF8F3] border-2 border-[#C5DDD1] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-brand text-xl font-bold text-[#164E38]">
              ¿Tienes una fecha o proyecto institucional en marcha?
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E]">
              Escríbeme directamente a <strong className="text-[#164E38]">{CONTACT_INFO.email}</strong> o reserva un café virtual de valoración.
            </p>
          </div>

          <a
            href={`mailto:${CONTACT_INFO.email}?subject=Consulta%20sobre%20Formaci%C3%B3n%20y%20Talleres`}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#164E38] hover:bg-[#103828] rounded-md transition-colors whitespace-nowrap shadow-md"
          >
            Escribir a Sarah Larios
          </a>
        </div>
      </div>
    </section>
  );
};
