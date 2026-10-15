import React, { useState } from "react";
import { Mail, MessageCircle, Instagram, Linkedin, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { CONTACT_INFO, getFormEmbedUrl } from "../data/content";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const embedSrc = getFormEmbedUrl(CONTACT_INFO.contactFormUrl);

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-gradient-to-b from-[#FFFDF9] via-[#FFF6EE] to-[#FAF8F5] relative overflow-hidden">
      {/* Decorative warm aura */}
      <div 
        className="absolute top-10 right-10 w-[480px] h-[480px] bg-[#E25A36]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#D4A338]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12 relative">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EB] border border-[#FCD6CA] text-[#D35431] text-xs uppercase tracking-[0.2em] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D35431]" />
            <span>Contacto</span>
          </div>

          <h2 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C1917] leading-tight">
            Hablamos.
          </h2>

          <p className="font-serif-brand text-2xl text-[#D35431] italic font-normal">
            ¿Tienes algo en mente? Cuéntame.
          </p>

          <p className="text-base sm:text-lg text-[#57534E] font-light leading-relaxed">
            Completa el formulario a continuación o comunícate directamente por email o WhatsApp.
          </p>
        </div>

        {/* 2-Column Split: Direct channels on Left + Clean Embedded Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Direct channels cards */}
          <div className="lg:col-span-4 space-y-4">
            {/* Email Direct */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#FCD6CA] shadow-sm space-y-3 hover:border-[#D35431] hover:shadow-md transition-all relative overflow-hidden">
              <div className="h-1.5 w-full bg-[#D35431] absolute top-0 left-0" />
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#D35431] flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#D35431]" />
                  <span>Correo directo</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs text-[#57534E] hover:text-[#D35431] inline-flex items-center gap-1 font-bold transition-colors bg-[#FFF0EB] px-2 py-0.5 rounded-md"
                  title="Copiar email al portapapeles"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-serif-brand text-xl sm:text-2xl font-bold text-[#1C1917] hover:text-[#D35431] transition-colors block break-all"
              >
                {CONTACT_INFO.email}
              </a>

              <p className="text-xs text-[#57534E] leading-relaxed">
                Respuesta en 24–48 horas laborables.
              </p>
            </div>

            {/* WhatsApp Direct */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#C5DDD1] shadow-sm space-y-3 hover:border-[#164E38] hover:shadow-md transition-all relative overflow-hidden">
              <div className="h-1.5 w-full bg-[#164E38] absolute top-0 left-0" />
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#164E38] flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-[#164E38]" />
                  <span>WhatsApp</span>
                </span>
              </div>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs uppercase tracking-wider font-bold text-white bg-[#164E38] hover:bg-[#103828] px-4 py-3 rounded-xl transition-all shadow-xs"
              >
                <span>Escríbeme por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#FDE68A]" />
              </a>
            </div>

            {/* Social channels */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-[#E7E2DA] hover:border-[#D35431] shadow-xs hover:shadow-sm transition-all space-y-1 group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#D35431]">
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </div>
                <div className="text-xs font-bold text-[#1C1917] group-hover:text-[#D35431] transition-colors">
                  @naarawomen
                </div>
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-[#E7E2DA] hover:border-[#0A66C2] shadow-xs hover:shadow-sm transition-all space-y-1 group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A66C2]">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </div>
                <div className="text-xs font-bold text-[#1C1917] group-hover:text-[#0A66C2] transition-colors">
                  Naara
                </div>
              </a>
            </div>
          </div>

          {/* Clean, Direct Form on Right */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border-2 border-[#FCD6CA] shadow-xl p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between px-2 pt-1 border-b border-[#F2ECE1] pb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-[#D35431]">
                  Formulario oficial
                </span>
                <a
                  href={CONTACT_INFO.contactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#57534E] hover:text-[#D35431] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Abrir en nueva pestaña</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Directly embedded Tally form with smooth height and transparent background */}
              <div className="w-full min-h-[580px] rounded-xl overflow-hidden bg-white">
                <iframe
                  src={embedSrc}
                  width="100%"
                  height="580"
                  frameBorder="0"
                  title="Formulario de contacto de Sarah Larios"
                  className="w-full h-[580px] border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
