// Canal fixo de atendimento no WhatsApp (robô).
// Todos os CTAs de "Quero conhecer" das suítes apontam para este número.
export const WHATSAPP_ROBO = '5521980640955'

/** Monta o link do WhatsApp já com a mensagem pré-preenchida. */
export const whatsappLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_ROBO}?text=${encodeURIComponent(message)}`
