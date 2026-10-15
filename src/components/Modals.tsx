import React from "react";
import { X, BookOpen, Shield, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO, getFormEmbedUrl } from "../data/content";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#FAF7F2] border border-[#E7E2DA] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md text-[#78716C] hover:text-[#1C1917] hover:bg-[#EAE5DC] transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#164E38]">
            <BookOpen className="w-4 h-4 text-[#D4A338]" />
            <span>Lista de espera preferente</span>
          </div>
          <h3 className="font-serif-brand text-2xl sm:text-3xl font-semibold text-[#1C1917] leading-tight">
            Mi segunda primera vez
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
            La lista de espera oficial del libro tiene su propio espacio exclusivo. Únete directamente en el enlace oficial para reservar tu ejemplar y participar en el proceso.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-[#FFF5EE] to-[#FAF8F5] border-2 border-[#FCD6CA] text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#D35431] text-white flex items-center justify-center mx-auto shadow-md">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif-brand text-2xl font-bold text-[#1C1917]">
              Acceder a la lista oficial
            </h4>
            <p className="text-xs text-[#57534E]">
              Haz clic para abrir la web del libro y confirmar tu plaza de forma inmediata.
            </p>
          </div>
          <div className="pt-2">
            <a
              href={CONTACT_INFO.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-bold text-white bg-[#D35431] hover:bg-[#BA3E1E] rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              <span>Ir a la lista de espera oficial</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface InquiryModalProps {
  isOpen: boolean;
  topic?: string;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, topic = "Formación", onClose }) => {
  if (!isOpen) return null;

  const embedSrc = getFormEmbedUrl(CONTACT_INFO.contactFormUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border-2 border-[#C5DDD1] shadow-2xl p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md text-[#78716C] hover:text-[#1C1917] hover:bg-[#EAE5DC] transition-colors z-10"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between pr-8 border-b border-[#F2ECE1] pb-3">
          <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917]">
            {topic}
          </h3>
          <a
            href={CONTACT_INFO.contactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#164E38] hover:underline inline-flex items-center gap-1"
          >
            <span>Abrir en nueva pestaña</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Embedded Tally form */}
        <div className="w-full h-[540px] rounded-xl overflow-hidden bg-white">
          <iframe
            src={embedSrc}
            width="100%"
            height="540"
            frameBorder="0"
            title={`Formulario de ${topic}`}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

interface LegalModalProps {
  type: "privacidad" | "aviso" | "cookies" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#FAF7F2] border border-[#E7E2DA] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto text-[#242220]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md text-[#78716C] hover:text-[#1C1917] hover:bg-[#EAE5DC] transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {type === "privacidad" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#164E38]">
              <Shield className="w-4 h-4 text-[#D4A338]" />
              <span>Protección de Datos & RGPD</span>
            </div>
            <h3 className="font-serif-brand text-3xl font-medium text-[#1C1917]">
              Política de Privacidad
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#57534E] leading-relaxed">
              <p>
                En cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679) y de la Ley Orgánica 3/2018 (LOPDGDD), te informamos de que los datos personales recabados a través de este sitio web son tratados por <strong>Sarah Larios</strong> con la única finalidad de responder a tus consultas, coordinar formaciones y enviarte información relativa a las publicaciones de la marca si lo has solicitado expresamente.
              </p>
              <p>
                <strong>Responsable del tratamiento:</strong> Sarah Larios (Contacto: <a href="mailto:inspira@sarahlarios.com" className="text-[#164E38] underline">inspira@sarahlarios.com</a>).
              </p>
              <p>
                <strong>Legitimación:</strong> Consentimiento inequívoco del interesado al enviar un formulario de contacto o solicitud.
              </p>
              <p>
                <strong>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal expresa o prestación de servicios estrictamente necesarios (servidores seguros de alojamiento web y correo).
              </p>
              <p>
                <strong>Derechos:</strong> Tienes derecho a acceder, rectificar y suprimir tus datos, así como otros derechos reconocidos por la normativa vigente, enviando un correo a <a href="mailto:inspira@sarahlarios.com" className="text-[#164E38] underline">inspira@sarahlarios.com</a>.
              </p>
            </div>
          </div>
        )}

        {type === "aviso" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#164E38]">
              <Shield className="w-4 h-4 text-[#D4A338]" />
              <span>Información Legal</span>
            </div>
            <h3 className="font-serif-brand text-3xl font-medium text-[#1C1917]">
              Aviso Legal
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#57534E] leading-relaxed">
              <p>
                El presente sitio web <strong>sarahlarios.com</strong> es titularidad de <strong>Sarah Larios</strong>, con dirección de contacto electrónico en <a href="mailto:inspira@sarahlarios.com" className="text-[#164E38] underline">inspira@sarahlarios.com</a>.
              </p>
              <p>
                Todos los contenidos, textos, fotografías, marcas y logotipos expuestos en esta web están protegidos por derechos de propiedad intelectual e industrial. Queda prohibida su reproducción o distribución sin autorización expresa.
              </p>
              <p>
                Los contenidos formativos y divulgativos de este sitio web no sustituyen el diagnóstico, prescripción médica o tratamiento facultativo individualizado.
              </p>
            </div>
          </div>
        )}

        {type === "cookies" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#164E38]">
              <Shield className="w-4 h-4 text-[#D4A338]" />
              <span>Transparencia & Navegación</span>
            </div>
            <h3 className="font-serif-brand text-3xl font-medium text-[#1C1917]">
              Política de Cookies
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#57534E] leading-relaxed">
              <p>
                Este sitio web utiliza únicamente cookies técnicas esenciales para garantizar la navegación correcta, la seguridad y el funcionamiento del reproductor tipográfico y estilos.
              </p>
              <p>
                No se emplean cookies publicitarias ni de seguimiento intrusivo de terceros sin el consentimiento del usuario.
              </p>
              <p>
                Puedes configurar tu navegador web en cualquier momento para bloquear o eliminar las cookies instaladas.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
