import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'

interface InvestmentOption {
  title: string
  price: string
  detail: string
  conditions: string[]
}

const options: InvestmentOption[] = [
  {
    title: 'À Vista',
    price: 'A partir de R$ 180.000',
    detail: 'Melhor condição disponível',
    conditions: [
      'Maior desconto no preço do terreno',
      'Escritura imediata no seu nome (RGI)',
      'Sem juros, sem burocracia',
      'Entrada e posse imediata do terreno',
    ],
  },
  {
    title: 'Parcelado Direto',
    price: 'A partir de R$ 200.000',
    detail: 'Até 120x sem burocracia bancária',
    conditions: [
      'Financiamento direto com a construtora',
      'Até 120 parcelas fixas',
      'Sem análise de crédito bancário',
      'Entrada facilitada — consulte condições',
      'Posse do terreno desde o primeiro pagamento',
    ],
  },
  {
    title: 'Financiamento Caixa',
    price: 'Possibilidade de até 240x',
    detail: 'Sujeito à análise de crédito',
    conditions: [
      'Financie até 70% do valor pela Caixa Econômica Federal',
      'Até 240 parcelas',
      'Aprovação sujeita à análise individual',
      'Nossa equipe auxilia em todo o processo',
    ],
  },
  {
    title: 'Permuta',
    price: 'Avaliamos seu veículo',
    detail: 'Carros, motos e caminhões',
    conditions: [
      'Aceitamos carro, moto ou caminhão como parte do pagamento',
      'Avaliação justa e transparente',
      'Complemento pode ser à vista ou parcelado',
      'Consulte nosso time para avaliar seu veículo',
    ],
  },
]

export default function InvestmentAccordion(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (i: number): void => {
    setOpenIndex(openIndex === i ? null : i)
  }

  const scrollToContact = (): void => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-[#f3efe8]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#4a6838] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            INVESTIMENTO
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-[#273020] mb-4 leading-tight"
          >
            Como você pode investir?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl mx-auto">
            Clique em cada opção para conhecer as condições detalhadas
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col gap-4 mb-12"
        >
          {options.map((opt, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={opt.title}
                variants={fadeInUp}
                className={`border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#364728] shadow-lg'
                    : 'border-gray-200 shadow-sm'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleIndex(i)}
                  className={`w-full flex items-center justify-between px-6 py-5 transition-all duration-300 text-left ${
                    isOpen
                      ? 'bg-[#364728] text-white'
                      : 'bg-white text-[#273020] hover:bg-[#f3efe8]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="font-heading text-lg font-bold">{opt.title}</h3>
                    <p className={`text-sm mt-0.5 ${isOpen ? 'text-white/70' : 'text-gray-400'}`}>
                      {opt.price}
                    </p>
                  </div>
                  <FaChevronDown
                    className={`text-lg flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#8d4e27]' : 'text-[#364728]'
                    }`}
                  />
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-6 bg-white border-t border-gray-100">
                        <p className="text-[#8d4e27] font-semibold text-sm mb-4">{opt.detail}</p>
                        <ul className="flex flex-col gap-3">
                          {opt.conditions.map((cond, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-[#364728] rounded-full mt-1.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm leading-relaxed">{cond}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Quero Agendar uma Visita →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
