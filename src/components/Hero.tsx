import React from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Compass, Sparkles, Building2, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "../data/content";
import heroPortrait from "../assets/images/regenerated_image_1791549963984.png";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#FFFDF9] via-[#FFF6EE] to-[#FAF8F5] border-b border-[#E7E2DA]">
      {/* Warm energetic artistic sun aura & grid */}
      <div 
        className="absolute top-10 right-1/4 w-[520px] h-[520px] bg-gradient-to-br from-[#F97316]/12 via-[#EAB308]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-10 left-10 w-[380px] h-[380px] bg-[#164E38]/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic core */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            {/* Luminous energetic pill kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EB] border border-[#FCD6CA] text-[#D35431] text-xs uppercase tracking-[0.2em] font-bold shadow-xs w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#D35431]" />
              <span>Arquitecta del Climaterio</span>
            </div>

            {/* Headline with vibrant contrast */}
            <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C1917] leading-[1.12] [text-wrap:balance]">
              Las mujeres +40 no necesitan más información.{" "}
              <span className="italic font-normal text-[#D35431] relative">
                Necesitan dirección.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg lg:text-xl text-[#44403C] font-light leading-relaxed max-w-2xl">
              Ayudo a mujeres, instituciones y empresas a entender el climaterio como lo que realmente es:{" "}
              <strong className="font-medium text-[#164E38] bg-[#EBF4F0] px-1.5 py-0.5 rounded">
                la etapa de mayor potencia de la vida de una mujer.
              </strong>
            </p>

            {/* Action buttons: Primary Book CTA in vibrant terracotta/orange */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={CONTACT_INFO.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-white bg-[#D35431] hover:bg-[#BA3E1E] rounded-md transition-all shadow-md hover:shadow-lg active:scale-[0.99] whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-[#FDEEE9]" />
                <span>El libro — Lista de espera</span>
                <ArrowUpRight className="w-4 h-4 text-[#FDEEE9]" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#164E38] bg-white hover:bg-[#FFF5EE] hover:text-[#D35431] rounded-md transition-all whitespace-nowrap border-2 border-[#164E38]/25 hover:border-[#D35431] shadow-xs"
              >
                <span>Hablamos</span>
                <ArrowRight className="w-4 h-4 text-[#D35431]" />
              </a>
            </div>

            {/* Quote blockquote with warm creative frame */}
            <div className="pt-4">
              <figure className="relative p-5 rounded-xl bg-gradient-to-r from-[#FFF5EE] via-[#FFF8F3] to-[#FAF8F5] border-l-4 border-[#D35431] border-y border-r border-[#F3DEC9] shadow-xs">
                <blockquote className="font-serif-brand text-xl sm:text-2xl italic font-normal text-[#164E38] leading-snug">
                  “Para que ninguna mujer tenga que escoger entre su salud y su liderazgo.”
                </blockquote>
                <figcaption className="mt-2 text-xs uppercase tracking-wider font-bold text-[#D35431]">
                  — Sarah Larios
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Right Column: Dominant Portrait Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Vibrant architectural accent frame in warm terracotta */}
              <div 
                className="absolute -inset-3 sm:-inset-4 rounded-xl border-2 border-[#D35431]/60 -rotate-2 pointer-events-none"
                aria-hidden="true"
              />
              {/* Sun gold glow shadow */}
              <div 
                className="absolute -bottom-2 -right-2 inset-0 bg-[#D4A338]/20 rounded-xl blur-xs -z-10 pointer-events-none"
                aria-hidden="true"
              />
              
              <div className="relative rounded-lg overflow-hidden bg-white shadow-xl aspect-[3/4] border-2 border-[#E7E2DA]">
                <img
                  src={heroPortrait}
                  alt="Sarah Larios, Arquitecta del Climaterio, sentada descalza con expresión reflexiva y empática"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle caption overlay at bottom with brand forest green tones */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E291D]/90 via-[#0E291D]/55 to-transparent p-6 text-white">
                  <p className="font-serif-brand text-xl font-medium text-white/95">
                    Sarah Larios
                  </p>
                  <p className="text-xs text-[#F2957C] tracking-wide font-bold">
                    Educadora Física · Coach de Menopausia · Autora
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Metric Strip with vibrant color cards */}
        <div className="mt-16 pt-10 border-t border-[#E7E2DA] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-white border border-[#FCD6CA] shadow-xs space-y-1 hover:border-[#D35431] transition-colors">
            <div className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#D35431] tabular-nums">
              14
            </div>
            <div className="text-xs uppercase tracking-wider text-[#D35431] font-bold">
              Años de camino
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Navegando la perimenopausia sin manual ni respuestas previas.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#C5DDD1] shadow-xs space-y-1 hover:border-[#164E38] transition-colors">
            <div className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#164E38] tabular-nums">
              +40
            </div>
            <div className="text-xs uppercase tracking-wider text-[#164E38] font-bold">
              La edad clave
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Donde todo se transforma y comienza tu mayor potencia.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#F6E3B8] shadow-xs space-y-1 hover:border-[#D4A338] transition-colors">
            <div className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#D4A338]">
              Evolución
            </div>
            <div className="text-xs uppercase tracking-wider text-[#B5851C] font-bold">
              Enfoque integral
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Avanzar, no volver al inicio. Neurociencia, movimiento e identidad sin recetas genéricas.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#FCD6CA] shadow-xs space-y-1 hover:border-[#E25A36] transition-colors">
            <div className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#E25A36]">
              B2B & B2C
            </div>
            <div className="text-xs uppercase tracking-wider text-[#E25A36] font-bold">
              Impacto real
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Ayuntamientos, centros de salud, empresas y mujeres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
