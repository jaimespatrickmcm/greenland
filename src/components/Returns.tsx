import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FaMapMarkerAlt, FaHandshake, FaUniversity, FaMoneyBillWave } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import foto12 from '../assets/foto (12).jpeg'

interface Condition {
  label: string
  icon: IconType
  color: string
  highlight: boolean
  price: string
  detail: string
  desc: string
}

const IMAGE_URL: string = foto12

const conditions: Condition[] = [
  {
    label: 'À Vista',
    icon: FaMoneyBillWave,
    color: '#5a8a3c',
    highlight: false,
    price: 'A partir de R$ 180.000',
    detail: 'Melhor condição disponível',
    desc: 'Pague à vista e garanta o maior desconto no preço do terreno.',
  },
  {
    label: 'Parcelado',
    icon: FaHandshake,
    color: '#e8a020',
    highlight: true,
    price: 'A partir de R$ 200.000',
    detail: 'Parcelamento direto',
    desc: 'Parcele diretamente com a incorporadora, sem burocracia bancária.',
  },
  {
    label: 'Financiamento Caixa',
    icon: FaUniversity,
    color: '#2d5a27',
    highlight: false,
    price: 'Em até 240x',
    detail: 'Use seu FGTS',
    desc: 'Financie pela Caixa Econômica Federal em até 240 parcelas. FGTS aceito.',
  },
]

export default function Returns(): React.JSX.Element {
  const scrollToContact = (): void => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="rendimentos" className="py-24 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#5a8a3c] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            CONDIÇÕES DE PAGAMENTO
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-[#1a2418] mb-4 max-w-xl leading-tight"
          >
            Condições especiais da 1ª fase
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl">
            Escolha a forma de pagamento que melhor se encaixa na sua realidade
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {conditions.map((c, i) => {
            const IconComponent = c.icon
            return (
              <motion.div
                key={c.label}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
              >
                {/* Badge MAIS POPULAR */}
                {c.highlight && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-[#e8a020] text-[#1a2418] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    MAIS PROCURADO
                  </div>
                )}

                {/* Imagem */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={IMAGE_URL}
                    alt={`GREENLAND — ${c.label}`}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo */}
                <div className="px-6 pt-5 pb-6 flex flex-col flex-1">
                  {/* Localização */}
                  <div className="flex items-center gap-1.5 text-[#5a8a3c] text-xs font-medium mb-2">
                    <FaMapMarkerAlt className="flex-shrink-0" />
                    <span>Teresópolis, Serra RJ</span>
                  </div>

                  {/* Ícone e Título */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: c.color + '20' }}>
                      <IconComponent style={{ color: c.color }} className="text-lg" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-[#1a2418]">
                      {c.label}
                    </h4>
                  </div>

                  {/* Divisor */}
                  <div className="border-t border-gray-100 pt-4 flex-1 flex flex-col">

                    {/* Preço */}
                    <div className="mb-4">
                      <p className="font-heading text-2xl font-bold text-[#1a2418]">{c.price}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{c.detail}</p>
                    </div>

                    {/* Descrição */}
                    <p className="text-gray-500 text-sm mb-5 flex-1">{c.desc}</p>

                    {/* Botão */}
                    <button
                      onClick={scrollToContact}
                      className="mt-auto w-full bg-[#2d5a27] hover:bg-[#1a3a18] text-white font-semibold py-3 rounded-full transition-all duration-200 text-sm hover:shadow-lg"
                    >
                      Quero Saber Mais
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-[#2d5a27] hover:bg-[#1a3a18] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Consultar Disponibilidade →
          </button>
        </div>
      </div>
    </section>
  )
}
