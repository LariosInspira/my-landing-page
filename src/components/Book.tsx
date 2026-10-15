import React from "react";
import { BookOpen, Sparkles, ArrowUpRight, BookMarked, HeartHandshake } from "lucide-react";
import { CONTACT_INFO } from "../data/content";
// Nota para Sarah: Las partes y las 8 palancas del libro están guardadas en "../data/content" 
// (BOOK_PARTS y LIDERATE_LEVERS) y preparadas para cuando decidas reactivar la vista detallada.

interface BookProps {
  onOpenWaitlist?: () => void;
}

export const Book: React.FC<BookProps> = () => {
  return (
    <section 
      id="libro" 
      className="py-20 lg:py-28 bg-gradient-to-br from-[#A83818] via-[#B83E1E] to-[#7E250E] text-white border-b border-[#6E1F0A] relative overflow-hidden"
    >
      {/* Warm energetic ambient glows */}
      <div 
        className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#F97316]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-[#EAB308]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Book Description with Curiosity and No Spoilers */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs border border-white/25 text-[#FDE68A] text-xs uppercase tracking-[0.2em] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
              <span>El libro · Próximo estreno</span>
            </div>

            <h2 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
              Mi segunda primera vez
            </h2>

            <p className="text-xl sm:text-2xl font-serif-brand italic text-[#FDE68A] leading-snug">
              Cómo la perimenopausia agrietó mi vida — y me enseñó a reconstruirla desde mi verdad.
            </p>

            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
              El libro que ojalá hubiera existido cuando empecé. No es un manual clínico de síntomas: es un relato íntimo, lúcido y transformador para las mujeres que hicieron todo bien y aún así sienten que algo se tambalea.
            </p>

            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 shadow-sm">
              <blockquote className="font-serif-brand text-2xl sm:text-3xl italic font-normal text-white">
                “Cuando la casa se cae, no se repara. Se rediseña.”
              </blockquote>
            </div>

            <p className="text-base text-white/85 leading-relaxed">
              Descubre las páginas antes que nadie, participa en la elección de la portada y sé parte de la comunidad de lectoras pioneras.
            </p>

            {/* Direct book waitlist link */}
            <div className="pt-2">
              <a
                href={CONTACT_INFO.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-[#8A2C10] bg-white hover:bg-[#FEF3C7] rounded-md transition-all shadow-lg hover:shadow-xl active:scale-[0.99]"
              >
                <BookOpen className="w-4 h-4 text-[#8A2C10]" />
                <span>Quiero estar en la lista de espera oficial</span>
                <ArrowUpRight className="w-4 h-4 text-[#8A2C10]" />
              </a>
            </div>

            {/* Participa en la portada callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-between gap-4 mt-6">
              <div className="space-y-0.5">
                <div className="text-xs uppercase tracking-wider font-bold text-[#FDE68A]">
                  Participa en la portada
                </div>
                <p className="text-xs text-white/90">
                  Las primeras en registrarse tienen voz en el proceso de diseño y portada.
                </p>
              </div>
              <a
                href={CONTACT_INFO.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold text-[#7E250E] bg-[#FDE68A] hover:bg-white rounded-md transition-all whitespace-nowrap shrink-0 shadow-md inline-flex items-center gap-1"
              >
                <span>Unirme</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 
              ============================================================
              CÓDIGO GUARDADO PARA EL FUTURO (EXPLICACIÓN DE LAS PARTES Y 8 PALANCAS):
              Descomentar este bloque cuando Sarah decida desvelar la estructura:
              ============================================================
              <div className="pt-8 border-t border-white/20 space-y-6">
                ... (BOOK_PARTS y LIDERATE_LEVERS listos en content.ts)
              </div>
            */}
          </div>

          {/* Right Column: Visual del Libro Abierto (sin capa cerrada de portada) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Luminous aura */}
              <div 
                className="absolute -inset-4 rounded-2xl border-2 border-[#FDE68A]/40 rotate-2 pointer-events-none"
                aria-hidden="true"
              />

              {/* Libro abierto visual de arte arquitectónico */}
              <div className="relative rounded-2xl overflow-hidden bg-white/95 backdrop-blur-md text-[#1C1917] p-8 shadow-2xl border-2 border-white/80 space-y-6">
                <div className="flex items-center justify-between border-b border-[#FCD6CA] pb-4">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#A83818]">
                    Libro Abierto
                  </span>
                  <span className="text-xs text-[#78716C] font-semibold">
                    Edición de autora
                  </span>
                </div>

                {/* Open book graphical emblem */}
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-4 bg-gradient-to-b from-[#FFF5EE] to-[#FAF8F5] rounded-xl border border-[#FCD6CA] p-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#D35431] text-white flex items-center justify-center shadow-lg">
                    <BookOpen className="w-10 h-10 stroke-[2]" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917]">
                      Mi segunda primera vez
                    </h3>
                    <p className="text-xs text-[#D35431] font-semibold">
                      Por Sarah Larios · Arquitecta del Climaterio
                    </p>
                  </div>

                  <p className="text-xs text-[#57534E] leading-relaxed max-w-xs">
                    Las páginas abiertas de una travesía real. Sin dogmas, sin filtros, con honestidad radical.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#44403C]">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#164E38] flex items-center justify-center shrink-0 text-[10px] font-bold">✓</div>
                    <span>Capítulos en proceso de edición anticipada</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#44403C]">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#164E38] flex items-center justify-center shrink-0 text-[10px] font-bold">✓</div>
                    <span>Votación comunitaria de la portada final</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#44403C]">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#164E38] flex items-center justify-center shrink-0 text-[10px] font-bold">✓</div>
                    <span>Acceso preferente al primer tiraje firmado</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#FCD6CA]">
                  <a
                    href={CONTACT_INFO.bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D35431] hover:bg-[#BA3E1E] rounded-xl transition-all shadow-md active:scale-[0.99]"
                  >
                    <span>Unirme a la lista del libro</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
