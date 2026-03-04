import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'

interface FaqItem {
  q: string
  a: string
}

const faqs: FaqItem[] = [
  {
    q: 'O condomínio já está pronto?',
    a: 'Sim! O GREENLAND é um condomínio pronto. Portaria, áreas de lazer completas e toda a infraestrutura funcionando. Você compra e já pode acessar o condomínio imediatamente.',
  },
  {
    q: 'Posso financiar pela Caixa Econômica Federal?',
    a: 'Existe a possibilidade de financiamento pela Caixa Econômica Federal em até 240 parcelas. A aprovação depende da análise individual de cada cliente. Além disso, oferecemos parcelamento direto em até 120x, sem burocracia bancária. Nossa equipe auxilia em todo o processo.',
  },
  {
    q: 'O terreno tem escritura (RGI)?',
    a: 'Sim. Todos os terrenos possuem RGI (Registro Geral de Imóveis) — escritura definitiva registrada em cartório no seu nome, com total segurança jurídica.',
  },
  {
    q: 'Há prazo para construir?',
    a: 'Não há prazo mínimo obrigatório para iniciar a construção. Você compra o terreno e constrói quando quiser, no seu ritmo. Água e luz já estão instaladas e prontas para uso.',
  },
  {
    q: 'Como chegar ao condomínio?',
    a: 'O GREENLAND fica a apenas 12km do centro de Teresópolis, com estrada totalmente pavimentada até a entrada do condomínio. Acesso fácil e rápido à cidade.',
  },
]

export default function FAQ(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
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
            Transparência total para você{' '}
            <span className="text-[#364728]">comprar com tranquilidade</span>
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#364728] shadow-lg' : 'border-gray-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                    isOpen ? 'bg-[#364728] text-white' : 'bg-white text-[#273020] hover:bg-[#f3efe8]'
                  }`}
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
          <p className="text-gray-600 mb-4">Ainda tem dúvidas? Fale com um de nossos consultores!</p>
          <a
            href="https://wa.me/5521992318802"
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
