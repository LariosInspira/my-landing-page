import React from "react";
import { ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";
import { CONTACT_INFO } from "../data/content";
import { Logo } from "./Logo";

interface FooterProps {
  onOpenLegal: (type: "privacidad" | "aviso" | "cookies") => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D2319] text-[#FAF8F5] border-t border-[#183B2C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Col with Logo */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block hover:opacity-95 transition-opacity" aria-label="Inicio Sarah Larios">
              <Logo size="lg" variant="dark" />
            </a>
            <p className="text-sm text-[#B4CCC1] font-light max-w-sm leading-relaxed">
              Para que ninguna mujer tenga que escoger entre su salud y su liderazgo.
            </p>
          </div>

          {/* Quick Nav Mirrors */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-2.5">
              <div className="uppercase tracking-widest text-[#D4A338] font-semibold">
                Navegación
              </div>
              <ul className="space-y-2 text-[#D2E2D9]">
                <li>
                  <a href="#libro" className="hover:text-white transition-colors">
                    El libro
                  </a>
                </li>
                <li>
                  <a href="#formaciones" className="hover:text-white transition-colors">
                    Formaciones
                  </a>
                </li>
                <li>
                  <a href="#club" className="hover:text-white transition-colors">
                    El Club
                  </a>
                </li>
                <li>
                  <a href="#empresas" className="hover:text-white transition-colors">
                    Empresas
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="uppercase tracking-widest text-[#D4A338] font-semibold">
                Conectar
              </div>
              <ul className="space-y-2 text-[#D2E2D9]">
                <li>
                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#E5BA5A]" />
                    <span>Naara Women</span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#60A5FA]" />
                    <span>Naara Leadership</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#E5BA5A]" />
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#D2E2D9] bg-[#143325] hover:bg-[#1A4230] hover:text-white rounded-md border border-[#214D38] transition-colors"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D4A338]" />
            </button>
          </div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="pt-8 border-t border-[#183B2C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8BAAA0]">
          <div>
            © 2025 Sarah Larios · Todos los derechos reservados
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={() => onOpenLegal("privacidad")}
              className="hover:text-[#D2E2D9] transition-colors"
            >
              Política de privacidad
            </button>
            <span aria-hidden="true" className="text-[#214D38]">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal("aviso")}
              className="hover:text-[#D2E2D9] transition-colors"
            >
              Aviso legal
            </button>
            <span aria-hidden="true" className="text-[#214D38]">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal("cookies")}
              className="hover:text-[#D2E2D9] transition-colors"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
