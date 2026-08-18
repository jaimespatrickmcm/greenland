import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import { whatsappLink } from '../data/contact'
import { FREE_NIGHTS, OWNER_SHARE } from '../data/suites'

export interface FaqItem {
  q: string
  a: string
}

export const suitesFaqs: FaqItem[] = [
  {
    q: 'O que exatamente eu estou comprando?',
    a: 'Uma suíte pronta e mobiliada dentro do condomínio Greenland, com escritura registrada em cartório no seu nome. É um imóvel seu — pode vender, transferir ou deixar de herança a qualquer momento.',
  },
  {
    q: 'Preciso cuidar da locação?',
    a: 'Não. O Art Green Boutique Hotel administra tudo: divulgação, canais de reserva, check-in, limpeza, enxoval, café da manhã e manutenção. Você acompanha a ocupação e recebe o repasse.',
  },
  {
    q: 'Como é feito o repasse?',
    a: `O proprietário recebe ${OWNER_SHARE} das hospedagens da sua unidade, com relatório mensal de ocupação e faturamento. O pagamento é feito todo mês, por transferência.`,
  },
  {
    q: 'Posso usar a minha suíte?',
    a: `Pode. Você tem ${FREE_NIGHTS} para uso próprio, reservadas na agenda do hotel com antecedência. Nesses dias a suíte fica bloqueada para locação.`,
  },
  {
    q: 'Quais são as condições de pagamento?',
    a: 'Trabalhamos com pagamento à vista, com o melhor desconto, ou parcelamento direto com a construtora. Também avaliamos permuta por veículos. Consulte as condições vigentes com nossa equipe.',
  },
  {
    q: 'A rentabilidade é garantida?',
    a: 'Não existe garantia de rentabilidade. Os números apresentados são simulações baseadas em diária média e ocupação de referência da região, e podem variar conforme a temporada e o mercado.',
  },
  {
    q: 'Qual a diferença entre a Suíte Lago e a Suíte Superior?',
    a: 'A Suíte Lago fica na borda do lago, é maior e tem varanda privativa com vista — por isso alcança diárias mais altas. A Suíte Superior fica no coração do condomínio, próxima ao Art Cucina e à área de lazer, com ticket de entrada menor.',
  },
]

const WHATSAPP_MESSAGE = 'Olá! Tenho dúvidas sobre a compra de uma suíte no Greenland.'

export default function SuitesFAQ(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq-suites" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#4a6838] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            DÚVIDAS FREQUENTES
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-[#273020]"
          >
            Tudo o que você precisa saber{' '}
            <span className="text-[#364728]">antes de comprar</span>
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {suitesFaqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#364728] shadow-lg' : 'border-gray-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                    isOpen ? 'bg-[#364728] text-white' : 'bg-white text-[#273020] hover:bg-[#f3efe8]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-lg pr-4">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 text-2xl font-light ${isOpen ? 'text-[#8d4e27]' : 'text-[#364728]'}`}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 py-5 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-[#f3efe8] rounded-2xl"
        >
          <p className="text-gray-600 mb-4">
            Ficou com alguma dúvida? Fale agora com nosso time de vendas.
          </p>
          <a
            href={whatsappLink(WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1fb855] text-white font-bold px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105"
          >
            <FaWhatsapp className="text-lg" /> Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
