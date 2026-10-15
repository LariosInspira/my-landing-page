import React from "react";
import { BookOpen, GraduationCap, Users2, ArrowRight, ArrowUpRight, Sparkles, BookMarked } from "lucide-react";
import { CONTACT_INFO } from "../data/content";

interface HowIWorkProps {
  onOpenWaitlist?: () => void;
  onOpenInquiry: (topic?: string) => void;
}

export const HowIWork: React.FC<HowIWorkProps> = ({ onOpenInquiry }) => {
  return (
    <section 
      id="como-trabajo" 
      className="py-20 lg:py-28 bg-gradient-to-br from-[#B53E1C] via-[#C94A23] to-[#962F14] text-white border-b border-[#82270E] relative overflow-hidden"
    >
      {/* Decorative ambient auras for warmth, joy and creative energy */}
      <div 
        className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#FB923C]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-[#FDE68A]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs border border-white/25 text-[#FDE68A] text-xs uppercase tracking-[0.2em] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
            <span>Cómo trabajo · Ruptura y vitalidad</span>
          </div>

          <h2 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
            Construyo puentes entre la ciencia del climaterio y la vida real.
          </h2>

          <p className="text-lg sm:text-xl text-[#FDEEE9] font-light leading-relaxed">
            Un ecosistema integral para acompañar a mujeres, instituciones y organizaciones. Sin recetas genéricas, con rigor, calidez y dirección clara.
          </p>
        </div>

        {/* 3 Bridge Cards with high contrast, crisp white bodies on terracotta backdrop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Tarjeta 1 — El libro: Mi segunda primera vez (con el libro abierto) */}
          <div className="p-8 rounded-2xl bg-white text-[#1C1917] border-2 border-white/80 shadow-2xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 group relative overflow-hidden">
            <div className="h-2 w-full bg-[#D35431] absolute top-0 left-0" />
            
            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between">
                {/* Visual del libro abierto */}
                <div className="w-14 h-14 rounded-xl bg-[#FFF0EB] text-[#D35431] border border-[#FCD6CA] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <BookOpen className="w-7 h-7 stroke-[2.2]" />
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#D35431] bg-[#FFF0EB] px-2.5 py-1 rounded-md">
                  El libro
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#1C1917] group-hover:text-[#D35431] transition-colors leading-snug">
                  Mi segunda primera vez
                </h3>
                <p className="text-xs text-[#8A5A4A] font-semibold italic">
                  Próximo lanzamiento · Libro abierto a la comunidad
                </p>
              </div>

              {/* Elegant open-book artistic card placeholder */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF5EE] via-[#FFF9F5] to-[#FAF8F5] border border-[#FCD6CA]/70 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#D35431] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <BookMarked className="w-5 h-5" />
                </div>
                <div className="text-xs leading-tight text-[#44403C]">
                  <span className="font-bold text-[#1C1917] block">Páginas que se abren:</span>
                  14 años de experiencia sin spoilers. Sé parte del proceso antes del estreno.
                </div>
              </div>

              <p className="text-sm text-[#57534E] leading-relaxed">
                El libro que nace de 14 años de camino propio. Lista de espera oficial abierta: únete para participar en la votación de la portada y recibir novedades exclusivas.
              </p>
            </div>

            <div className="pt-4 border-t border-[#FCD6CA]">
              <a
                href={CONTACT_INFO.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-5 py-3.5 text-sm font-bold text-white bg-[#D35431] hover:bg-[#BA3E1E] rounded-xl transition-all shadow-md group-hover:shadow-lg active:scale-[0.99]"
              >
                <span>Lista de espera del libro</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tarjeta 2 — Formación (Warm Golden Amber) */}
          <div className="p-8 rounded-2xl bg-white text-[#1C1917] border-2 border-white/80 shadow-2xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 group relative overflow-hidden">
            <div className="h-2 w-full bg-[#D4A338] absolute top-0 left-0" />
            
            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-[#FEF9E7] text-[#B5851C] border border-[#F6E3B8] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-7 h-7 stroke-[2.2]" />
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#B5851C] bg-[#FEF9E7] px-2.5 py-1 rounded-md">
                  Formación
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#1C1917] group-hover:text-[#B5851C] transition-colors leading-snug">
                  Talleres y formaciones
                </h3>
                <p className="text-xs text-[#8F6E1C] font-semibold italic">
                  Presencial u online · A medida de tu entidad
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FEFBF2] border border-[#F6E3B8]/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#D4A338] text-[#0A2619] flex items-center justify-center shrink-0 shadow-sm font-bold text-xs">
                  A+
                </div>
                <div className="text-xs leading-tight text-[#44403C]">
                  <span className="font-bold text-[#1C1917] block">Impacto colectivo:</span>
                  Ayuntamientos, escuelas, familias y equipos mixtos.
                </div>
              </div>

              <p className="text-sm text-[#57534E] leading-relaxed">
                Intervenciones vivenciales adaptadas al contexto y duración que necesitas. Responden las preguntas que el sistema tradicional no tiene tiempo de contestar.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F6E3B8] flex flex-col gap-2">
              <a
                href="#formaciones"
                className="inline-flex items-center justify-between w-full px-5 py-3.5 text-sm font-bold text-[#0A2619] bg-[#D4A338] hover:bg-[#E5BA5A] rounded-xl transition-all shadow-md group-hover:shadow-lg"
              >
                <span>Ver formaciones</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tarjeta 3 — Club Naara Women (Pure Forest Emerald & Gold) */}
          <div className="p-8 rounded-2xl bg-white text-[#1C1917] border-2 border-white/80 shadow-2xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 group relative overflow-hidden">
            <div className="h-2 w-full bg-[#164E38] absolute top-0 left-0" />
            
            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-[#EAF4EF] text-[#164E38] border border-[#C5DDD1] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Users2 className="w-7 h-7 stroke-[2.2]" />
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#164E38] bg-[#EAF4EF] px-2.5 py-1 rounded-md">
                  Comunidad
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#1C1917] group-hover:text-[#164E38] transition-colors leading-snug">
                  Club Naara Women
                </h3>
                <p className="text-xs text-[#164E38] font-semibold italic">
                  Comunidad exclusiva · Próximamente
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F0F7F3] border border-[#C5DDD1]/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#164E38] text-[#FDE68A] flex items-center justify-center shrink-0 shadow-sm font-bold text-xs">
                  CNW
                </div>
                <div className="text-xs leading-tight text-[#44403C]">
                  <span className="font-bold text-[#1C1917] block">Acompañamiento real:</span>
                  Neurociencia, movimiento e identidad compartida.
                </div>
              </div>

              <p className="text-sm text-[#57534E] leading-relaxed">
                Un espacio con intención para mujeres que no quieren sobrevivir al climaterio, sino liderarlo con complicidad, rigor científico y fuerza interior.
              </p>
            </div>

            <div className="pt-4 border-t border-[#C5DDD1]">
              <a
                href="#club"
                className="inline-flex items-center justify-between w-full px-5 py-3.5 text-sm font-bold text-white bg-[#164E38] hover:bg-[#103A29] rounded-xl transition-all shadow-md group-hover:shadow-lg"
              >
                <span>Conocer el Club</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner inside HowIWork: Connecting directly with Sarah */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-brand text-2xl font-bold text-white">
              ¿No sabes qué puente se adapta mejor a tu momento?
            </h4>
            <p className="text-sm text-[#FDEEE9] font-light">
              Escríbeme directamente a <strong className="text-white font-bold">{CONTACT_INFO.email}</strong> y buscaremos el camino ideal.
            </p>
          </div>
          <a
            href="#contacto"
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#962F14] bg-white hover:bg-[#FFF5EE] rounded-lg transition-colors whitespace-nowrap shadow-md"
          >
            Escríbeme directamente
          </a>
        </div>
      </div>
    </section>
  );
};
