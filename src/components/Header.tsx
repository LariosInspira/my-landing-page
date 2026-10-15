import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT_INFO } from "../data/content";

interface HeaderProps {
  onOpenWaitlist?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Corporate Notification Banner */}
      <div className="bg-[#123E2C] text-[#FAF8F5] text-xs py-2.5 px-4 text-center border-b border-[#0C2F21] transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-[#D8E6DF] font-light">
            ¿Eres empresa u organización? <strong className="font-medium text-white">Naara Leadership</strong> convierte la madurez femenina en ventaja estratégica.
          </span>
          <a
            href="#empresas"
            className="inline-flex items-center gap-1 text-[#E5BA5A] hover:text-[#F3CE79] font-medium transition-colors underline-offset-4 hover:underline"
          >
            Ver propuesta corporativa
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Navigation Bar — 3-Zone Contract with Logo on the left */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2DA] transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo on the left */}
          <a
            href="#"
            className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
            aria-label="Sarah Larios — Arquitecta del Climaterio"
          >
            <Logo size="md" variant="light" />
          </a>

          {/* Zone 2: Clean 5-Link Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4744]">
            <a
              href="#como-trabajo"
              className="hover:text-[#164E38] transition-colors py-1 whitespace-nowrap shrink-0 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D4A338] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Cómo trabajo
            </a>
            <a
              href="#formaciones"
              className="hover:text-[#164E38] transition-colors py-1 whitespace-nowrap shrink-0 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D4A338] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Formaciones
            </a>
            <a
              href="#club"
              className="hover:text-[#164E38] transition-colors py-1 whitespace-nowrap shrink-0 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D4A338] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              El Club
            </a>
            <a
              href="#empresas"
              className="hover:text-[#164E38] transition-colors py-1 whitespace-nowrap shrink-0 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D4A338] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Empresas
            </a>
            <a
              href={CONTACT_INFO.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#164E38] transition-colors py-1 whitespace-nowrap shrink-0 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D4A338] after:absolute after:bottom-0 after:left-0 after:transition-all inline-flex items-center gap-1 font-semibold text-[#8A3319]"
            >
              <span>El libro</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D35431]" />
            </a>
            <a
              href="#contacto"
              className="hover:text-[#164E38] transition-colors py-1 whitespace-nowrap shrink-0 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D4A338] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Contacto
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="#contacto"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D35431] hover:bg-[#BA3E1E] rounded-md transition-all shadow-sm hover:shadow active:scale-[0.99] whitespace-nowrap shrink-0"
            >
              Hablamos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#164E38] hover:text-[#D4A338] rounded-md focus:outline-none focus:ring-2 focus:ring-[#164E38]"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#E7E2DA] bg-[#FAF8F5] px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-base font-medium text-[#44403C]">
              <a
                href="#como-trabajo"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#164E38] transition-colors"
              >
                Cómo trabajo
              </a>
              <a
                href="#formaciones"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#164E38] transition-colors"
              >
                Formaciones
              </a>
              <a
                href="#club"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#164E38] transition-colors"
              >
                El Club
              </a>
              <a
                href="#empresas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#164E38] transition-colors"
              >
                Empresas
              </a>
              <a
                href={CONTACT_INFO.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#164E38] transition-colors inline-flex items-center justify-between font-semibold text-[#8A3319]"
              >
                <span>El libro (Lista de espera)</span>
                <ArrowUpRight className="w-4 h-4 text-[#D35431]" />
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#164E38] transition-colors"
              >
                Contacto
              </a>
            </nav>
            <div className="pt-4 border-t border-[#E7E2DA] flex flex-col gap-2">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#D35431] hover:bg-[#BA3E1E] rounded-md transition-colors shadow-sm"
              >
                Hablamos
              </a>
              <a
                href={CONTACT_INFO.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-bold text-[#D35431] border border-[#FCD6CA] rounded-md hover:bg-[#FFF0EB] transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>Lista oficial del libro</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
