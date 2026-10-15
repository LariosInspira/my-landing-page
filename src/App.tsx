import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { HowIWork } from "./components/HowIWork";
import { Workshops } from "./components/Workshops";
import { Club } from "./components/Club";
import { Corporate } from "./components/Corporate";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WaitlistModal, InquiryModal, LegalModal } from "./components/Modals";

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<string | null>(null);
  const [legalType, setLegalType] = useState<"privacidad" | "aviso" | "cookies" | null>(null);

  const handleOpenInquiry = (topic: string = "Formación & Talleres") => {
    setInquiryTopic(topic);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242220] font-sans-brand selection:bg-[#164E38]/20 selection:text-[#164E38]">
      {/* 3-Zone Header Contract & Notification Banner */}
      <Header onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenWaitlist={() => setWaitlistOpen(true)} />

        {/* Mi Historia (Sobre mí) */}
        <Story />

        {/* Cómo trabajo (3 Tarjetas Puente con ruptura de color en terracota/naranja) */}
        <HowIWork
          onOpenWaitlist={() => setWaitlistOpen(true)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Formaciones y Talleres */}
        <Workshops onOpenInquiry={handleOpenInquiry} />

        {/* Club Naara Women */}
        <Club />

        {/* Naara Leadership (Empresas) */}
        <Corporate onOpenInquiry={handleOpenInquiry} />

        {/* Hablamos (Contacto) */}
        <Contact />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenLegal={(type) => setLegalType(type)} />

      {/* Modals */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />

      <InquiryModal
        isOpen={inquiryTopic !== null}
        topic={inquiryTopic || "Formación"}
        onClose={() => setInquiryTopic(null)}
      />

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </div>
  );
}
