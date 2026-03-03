import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../variants'
import foto2 from '../assets/foto (2).jpeg'
import foto5 from '../assets/foto (5).jpeg'
import foto8 from '../assets/foto (8).jpeg'
import foto12 from '../assets/foto (12).jpeg'

interface Condition {
  label: string
  image: string
  price: string
  detail: string
  desc: string
  features: string[]
}

const conditions: Condition[] = [
  {
    label: 'À Vista',
    image: foto12,
    price: 'A partir de R$ 180.000',
    detail: 'Melhor condição disponível',
    desc: 'Pague à vista e garanta o maior desconto no preço do terreno.',
    features: [
      'Maior desconto no preço do terreno',
      'Escritura imediata no seu nome (RGI)',
      'Sem juros, sem burocracia',
      'Entrada e posse imediata do terreno',
    ],
  },
  {
    label: 'Parcelado',
    image: foto5,
    price: 'A partir de R$ 200.000',
    detail: 'Até 120x direto',
    desc: 'Parcele diretamente conosco em até 120x, sem burocracia bancária.',
    features: [
      'Financiamento direto com a construtora',
      'Até 120 parcelas fixas',
      'Sem análise de crédito bancário',
      'Posse do terreno desde o primeiro pagamento',
    ],
  },
  {
    label: 'Financiamento Caixa',
    image: foto2,
    price: 'Possibilidade de até 240x',
    detail: 'Sujeito à análise de crédito',
    desc: 'Financie até 70% do valor pela Caixa. Sujeito à aprovação.',
    features: [
      'Financie até 70% do valor pela CEF',
      'Até 240 parcelas',
      'Nossa equipe auxilia em todo o processo',
      'Aprovação sujeita à análise individual',
    ],
  },
  {
    label: 'Permuta',
    image: foto8,
    price: 'Avaliamos seu veículo',
    detail: 'Carros, motos e caminhões',
    desc: 'Carro, moto ou caminhão como parte do pagamento. Consulte.',
    features: [
      'Aceitamos carro, moto ou caminhão',
      'Avaliação justa e transparente',
      'Complemento à vista ou parcelado',
      'Consulte nosso time para avaliar',
    ],
  },
]

export default function Returns(): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openWhatsApp = (): void => {
    window.open('https://wa.me/5521999920999', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="rendimentos" className="py-24 bg-[#f3efe8]">
      <div className="max-w-7xl mx-auto px-6">
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
            CONDIÇÕES DE PAGAMENTO
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

        {/* Horizontal image accordion */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col lg:flex-row gap-3 mb-12"
          style={{ minHeight: '420px' }}
        >
          {conditions.map((c, i) => {
            const isActive = activeIndex === i
            return (
              <motion.div
                key={c.label}
                layout
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out rounded-2xl shadow-lg ${
                  isActive ? 'lg:flex-[3]' : 'lg:flex-1'
                } ${isActive ? '' : 'hover:opacity-90'}`}
                style={{ minHeight: isActive ? '420px' : '120px' }}
              >
                {/* Background image */}
                <img
                  src={c.image}
                  alt={c.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  isActive ? 'bg-black/60' : 'bg-black/40 hover:bg-black/50'
                }`} />

                {/* Label (always visible) */}
                <div className={`absolute z-10 transition-all duration-500 ${
                  isActive
                    ? 'top-6 left-6'
                    : 'inset-0 flex items-center justify-center'
                }`}>
                  <div className="flex items-center gap-2">
                    <h3 className={`font-heading font-bold text-white transition-all duration-300 ${
                      isActive ? 'text-2xl' : 'text-lg lg:text-base'
                    }`}>
                      {c.label}
                    </h3>
                    <span className={`text-white font-bold leading-none transition-all duration-300 ${
                      isActive ? 'text-2xl' : 'text-xl lg:text-lg'
                    }`}>
                      {isActive ? '−' : '+'}
                    </span>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="absolute bottom-0 left-0 right-0 p-6 z-10"
                    >
                      <p className="text-[#4a6838] font-heading font-bold text-xl mb-1">
                        {c.price}
                      </p>
                      <p className="text-white/70 text-sm mb-3">{c.detail}</p>
                      <p className="text-white/80 text-sm mb-4 leading-relaxed">{c.desc}</p>
                      <ul className="flex flex-col gap-2 mb-5">
                        {c.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#4a6838] rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={(e) => { e.stopPropagation(); openWhatsApp() }}
                        className="bg-[#8d4e27] hover:bg-[#7a4220] text-white font-semibold px-6 py-3 rounded-full transition-all text-sm shadow-lg hover:scale-105"
                      >
                        Quero Agendar uma Visita
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={openWhatsApp}
            className="bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Consultar Disponibilidade →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
