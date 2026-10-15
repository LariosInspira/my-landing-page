import React, { useState } from "react";
import { Instagram, Sparkles, Check, ArrowRight, BellRing, Heart } from "lucide-react";
import { CONTACT_INFO } from "../data/content";

export const Club: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const mailto = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      `[Club Naara Women] Solicitud de acceso a lista de apertura`
    )}&body=${encodeURIComponent(
      `Hola Sarah,\n\nMe gustaría unirme a la lista de apertura preferente de Club Naara Women.\n\nMi correo electrónico es: ${email}\n\n¡Gracias!`
    )}`;
    window.location.href = mailto;
    setSubscribed(true);
  };

  return (
    <section 
      id="club" 
      className="py-20 lg:py-28 bg-gradient-to-br from-[#0F3826] via-[#144732] to-[#0A2619] text-[#FAF8F5] border-b border-[#0A2619] relative overflow-hidden"
    >
      {/* Decorative architectural radial glows in brand warm gold and emerald (sin naranja) */}
      <div 
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#D4A338]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#E5BA5A]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Vision & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A338]/20 backdrop-blur-xs border border-[#D4A338]/40 text-[#FDE68A] text-xs uppercase tracking-[0.2em] font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
              <span>Club Naara Women</span>
            </div>

            <h2 className="font-serif-brand text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.15]">
              Un espacio con intención. <br />
              <span className="italic font-normal text-[#F3CE79]">
                El Club.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#E2EBE5] font-light leading-relaxed">
              Hay algo especial en pertenecer a un lugar donde todas saben por qué están ahí. El Club Naara Women nace para las mujeres que quieren navegar el climaterio con acompañamiento real, ciencia y la energía de quienes están haciendo lo mismo.
            </p>

            {/* Core manifesto statement in glassmorphism with subtle gold border */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-[#D4A338]/30 shadow-md space-y-2">
              <div className="font-serif-brand text-2xl text-white italic">
                “No es información. Es dirección. No es contenido. Es transformación.”
              </div>
            </div>

            {/* 3 Pillars with Brand Gold Accents */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#D4A338] text-[#0A2619] flex items-center justify-center shrink-0 mt-0.5 text-xs font-serif font-bold shadow-xs">
                  1
                </span>
                <p className="text-sm text-[#E2EBE5] leading-relaxed">
                  <strong className="text-white">Neurociencia, movimiento e identidad:</strong> las tres dimensiones clave que el sistema médico tradicional ignora.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#D4A338] text-[#0A2619] flex items-center justify-center shrink-0 mt-0.5 text-xs font-serif font-bold shadow-xs">
                  2
                </span>
                <p className="text-sm text-[#E2EBE5] leading-relaxed">
                  <strong className="text-white">Dirección concreta para tu fase exacta:</strong> sin recetas genéricas ni soluciones prefabricadas.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#D4A338] text-[#0A2619] flex items-center justify-center shrink-0 mt-0.5 text-xs font-serif font-bold shadow-xs">
                  3
                </span>
                <p className="text-sm text-[#E2EBE5] leading-relaxed">
                  <strong className="text-white">Mujeres que están donde tú estás:</strong> una comunidad de complicidad real con las que crecer de verdad.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Launch status & Instagram Action */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#092217]/95 backdrop-blur-md border-2 border-[#D4A338]/40 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#D4A338] via-[#F3CE79] to-[#D4A338] absolute top-0 left-0" />

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#F3CE79] bg-[#D4A338]/20 px-2.5 py-1 rounded-md">
                  Próximamente
                </span>
                <span className="text-xs text-[#C5DDD1] font-semibold">
                  Comunidad exclusiva
                </span>
              </div>

              <h3 className="font-serif-brand text-2xl sm:text-3xl font-medium text-white">
                El Club está en construcción.
              </h3>

              <p className="text-sm text-[#D2E2D9] font-light leading-relaxed">
                La conversación ya está pasando en Instagram — únete ahí mientras preparamos el lanzamiento oficial y abrimos plazas limitadas.
              </p>

              {/* Instagram Primary CTA in Brand Gold Gradient */}
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold text-[#0A2619] bg-gradient-to-r from-[#D4A338] via-[#E5BA5A] to-[#F3CE79] hover:brightness-105 rounded-xl transition-all shadow-lg active:scale-[0.99]"
              >
                <Instagram className="w-5 h-5 text-[#0A2619]" />
                <span>Síguenos en @naarawomen</span>
              </a>

              {/* Newsletter interest signup */}
              <div className="pt-6 border-t border-white/15 space-y-3">
                <div className="text-xs text-[#C5DDD1]">
                  ¿Quieres ser de las primeras en enterarte de la apertura?
                </div>

                {subscribed ? (
                  <div className="p-3.5 rounded-xl bg-[#D4A338]/20 border border-[#D4A338]/50 text-xs text-[#F3CE79] font-medium space-y-1">
                    <div className="flex items-center gap-2 font-bold text-white">
                      <Check className="w-4 h-4 text-[#F3CE79]" />
                      <span>¡Solicitud enviada a {CONTACT_INFO.email}!</span>
                    </div>
                    <p className="text-[#D2E2D9] text-[11px]">
                      Te hemos registrado en la lista de apertura preferente.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNotifySubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu correo electrónico"
                      required
                      className="flex-1 bg-black/40 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-[#8AA69A] focus:outline-none focus:border-[#D4A338]"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-bold text-[#0A2619] bg-[#D4A338] hover:bg-[#E5BA5A] rounded-lg transition-colors whitespace-nowrap shadow-md"
                    >
                      Avisarme
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
