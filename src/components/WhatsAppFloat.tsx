import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_ROBO } from '../data/contact'

interface WhatsAppFloatProps {
  /** Link completo do WhatsApp. Por padrão, o número fixo de atendimento. */
  href?: string
  /** Texto do tooltip exibido no hover. */
  tooltip?: string
}

export default function WhatsAppFloat({
  href = `https://wa.me/${WHATSAPP_ROBO}`,
  tooltip = 'Fale conosco!',
}: WhatsAppFloatProps): React.JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco via WhatsApp"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] whatsapp-pulse whatsapp-btn" />
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform whatsapp-btn">
          <FaWhatsapp className="text-white text-2xl" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-[#273020] text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {tooltip}
        <div className="absolute top-full right-5 border-4 border-transparent border-t-[#273020]" />
      </div>
    </a>
  )
}
