import React from "react";
import { ArrowUpRight, TrendingUp, Users, Award, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "../data/content";

interface CorporateProps {
  onOpenInquiry?: (topic?: string) => void;
}

export const Corporate: React.FC<CorporateProps> = () => {
  return (
    <section id="empresas" className="py-20 lg:py-28 bg-gradient-to-b from-[#F2F8F4] to-[#E9F3ED] border-b border-[#D2E4DA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4EF] border border-[#C5DDD1] text-[#164E38] text-xs uppercase tracking-[0.2em] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#164E38]" />
            <span>Naara Leadership</span>
          </div>

          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917] leading-tight">
            La madurez femenina como ventaja estratégica.
          </h2>

          <p className="text-base sm:text-lg text-[#57534E] font-light leading-relaxed">
            Las mujeres +40 representan el talento más experimentado de cualquier organización — y el más ignorado durante el climaterio. Naara Leadership trabaja con empresas que quieren cambiar eso.
          </p>
        </div>

        {/* Core Quote Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-[#164E38]/20 shadow-md space-y-3">
          <blockquote className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#164E38] italic leading-snug">
            “Convertimos la madurez femenina en ventaja estratégica para las empresas.”
          </blockquote>
          <p className="text-xs uppercase tracking-wider font-bold text-[#B5851C]">
            Propuestas corporativas · Programas para organizaciones · Intervención estratégica
          </p>
        </div>

        {/* 3 Corporate Focus Areas with distinct top colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Emerald Forest */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#C5DDD1] shadow-sm space-y-4 hover:border-[#164E38] hover:shadow-xl transition-all relative overflow-hidden">
            <div className="h-1.5 w-full bg-[#164E38] absolute top-0 left-0" />
            <div className="w-12 h-12 rounded-xl bg-[#EAF4EF] text-[#164E38] flex items-center justify-center pt-1">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917]">
              Consultoría boutique
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Diseñada específicamente para comités de dirección y RRHH que buscan retener y potenciar el talento femenino senior, reduciendo absentismo silencioso.
            </p>
          </div>

          {/* Card 2: Golden Ochre */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#F6E3B8] shadow-sm space-y-4 hover:border-[#D4A338] hover:shadow-xl transition-all relative overflow-hidden">
            <div className="h-1.5 w-full bg-[#D4A338] absolute top-0 left-0" />
            <div className="w-12 h-12 rounded-xl bg-[#FEF9E7] text-[#B5851C] flex items-center justify-center pt-1">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917]">
              Programas de liderazgo
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Formaciones de alto impacto diseñadas desde la realidad hormonal, neurobiológica y vital de las mujeres +40, con herramientas aplicables de inmediato.
            </p>
          </div>

          {/* Card 3: Terracotta Coral */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#FCD6CA] shadow-sm space-y-4 hover:border-[#E25A36] hover:shadow-xl transition-all relative overflow-hidden">
            <div className="h-1.5 w-full bg-[#E25A36] absolute top-0 left-0" />
            <div className="w-12 h-12 rounded-xl bg-[#FFF0EB] text-[#E25A36] flex items-center justify-center pt-1">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917]">
              A medida de tu cultura
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Desde una masterclass inspiradora para toda la plantilla hasta programas estructurados de acompañamiento a directivas y managers mixtos.
            </p>
          </div>
        </div>

        {/* Call to action bar in Forest Pine Green */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0D291C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#164E38] shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-brand text-2xl sm:text-3xl font-medium">
              Conoce en profundidad Naara Leadership
            </h4>
            <p className="text-xs sm:text-sm text-[#B4CCC1] font-light">
              Explora casos de éxito, metodología para empresas e informes de impacto.
            </p>
          </div>

          <div className="flex items-center">
            <a
              href={CONTACT_INFO.corporateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#0D291C] bg-[#FDE68A] hover:bg-white rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
            >
              <span>Ir a Naara Leadership</span>
              <ArrowUpRight className="w-4 h-4 text-[#0D291C]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
