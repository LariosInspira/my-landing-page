import React from "react";
import { Compass, Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react";

export const Story: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-white border-b border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with architectural border */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Energetic architectural frames */}
              <div 
                className="absolute -inset-3 sm:-inset-4 rounded-xl border-2 border-[#D4A338]/40 rotate-1 pointer-events-none"
                aria-hidden="true"
              />
              <div 
                className="absolute -bottom-2 -left-2 inset-0 bg-[#E25A36]/10 rounded-xl blur-xs -z-10 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative rounded-lg overflow-hidden bg-white shadow-xl aspect-[3/4] border-2 border-[#E7E2DA]">
                <img
                  src="/src/assets/images/regenerated_image_1791549965501.png"
                  alt="Sarah Larios sonriendo con calidez y cercanía"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Architectural credential card with colorful badges */}
              <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-[#FFF9F5] via-white to-[#F5FAF7] border-2 border-[#EADBCE] shadow-sm space-y-3.5">
                <div className="text-xs uppercase tracking-widest font-bold text-[#164E38] flex items-center justify-between">
                  <span>Perfil & Rigor Profesional</span>
                  <span className="w-2 h-2 rounded-full bg-[#E25A36]" />
                </div>
                <ul className="space-y-2.5 text-xs text-[#44403C]">
                  <li className="flex items-start gap-2.5 p-1.5 rounded-md hover:bg-white transition-colors">
                    <span className="p-1 rounded bg-[#EAF4EF] text-[#164E38] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span><strong>Educadora Física</strong> con enfoque en neurobiología y masa muscular protectora.</span>
                  </li>
                  <li className="flex items-start gap-2.5 p-1.5 rounded-md hover:bg-white transition-colors">
                    <span className="p-1 rounded bg-[#FEF7E6] text-[#B5851C] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span><strong>Coach de Menopausia</strong> certificada para la transición hormonal y vital.</span>
                  </li>
                  <li className="flex items-start gap-2.5 p-1.5 rounded-md hover:bg-white transition-colors">
                    <span className="p-1 rounded bg-[#FFF0EB] text-[#C84B29] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span>Fundadora de <strong>Club Naara Women</strong> y la consultora <strong>Naara Leadership</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: The narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4F0] border border-[#C5DDD1] text-[#164E38] text-xs uppercase tracking-[0.2em] font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#164E38]" />
              <span>Mi historia</span>
            </div>

            <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917] leading-[1.18] [text-wrap:balance]">
              Hice todo bien. <br />
              <span className="italic font-normal text-[#C84B29]">
                Y aun así el sistema me falló.
              </span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#57534E] font-light leading-relaxed">
              <p>
                Soy brasileña, llevo más de una década en España y <strong className="text-[#1C1917] font-semibold">14 años navegando el climaterio</strong> — empecé a los 32, sin saberlo, mientras intentaba ser madre. Pasé por tres tratamientos de fertilidad, más de 20.000€ y años sin respuestas reales.
              </p>

              <p>
                Soy <strong className="text-[#164E38] font-semibold">Educadora Física</strong>, <strong className="text-[#B5851C] font-semibold">Coach de Menopausia</strong>, y la mujer que aprendió lo que nadie enseña — para que a ti no te cueste lo que a mí me costó. Ni en tiempo. Ni en dinero. Ni en sueños casi perdidos.
              </p>

              <p className="text-[#C84B29] font-medium italic font-serif-brand text-xl sm:text-2xl pt-2 border-l-2 border-[#C84B29] pl-4">
                "Antes de ser lo que soy, quise ser arquitecta de casas. La vida tenía otros planos."
              </p>
            </div>

            {/* Core Statistics cards with contrasting warmth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-xl bg-[#FFF5EE] border border-[#FCD6CA] space-y-2 shadow-xs hover:border-[#C84B29] transition-colors">
                <div className="font-serif-brand text-4xl font-bold text-[#C84B29] tabular-nums">
                  14
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-[#C84B29]">
                  Años navegando la perimenopausia
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  No desde la teoría — desde haberlo atravesado sin mapa.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FEF9E7] border border-[#F6E3B8] space-y-2 shadow-xs hover:border-[#D4A338] transition-colors">
                <div className="font-serif-brand text-4xl font-bold text-[#B5851C] tabular-nums">
                  +40
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-[#B5851C]">
                  La edad donde todo cambia
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Y donde empieza tu etapa de mayor potencia.
                </p>
              </div>
            </div>

            {/* Standout quote in deep forest green surface with golden border */}
            <div className="p-6 sm:p-7 rounded-xl bg-gradient-to-r from-[#0E291D] to-[#164E38] text-white space-y-2 shadow-md border-l-4 border-[#E5BA5A]">
              <p className="font-serif-brand text-xl sm:text-2xl italic font-normal text-white leading-snug">
                “La vida no termina, se transforma. El climaterio es el portal — no el fin.”
              </p>
              <div className="text-xs uppercase tracking-widest text-[#E5BA5A] font-bold">
                — Sarah Larios
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
