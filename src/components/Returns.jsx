import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import foto12 from '../assets/foto (12).jpeg'

const IMAGE_URL = foto12

const scenarios = [
  {
    label: 'Conservador',
    color: '#5a8a3c',
    highlight: false,
    occupancy: '20%',
    dailies: '6 diárias/mês',
    revenue: 'R$ 5.300',
  },
  {
    label: 'Realista',
    color: '#e8a020',
    highlight: true,
    occupancy: '40%',
    dailies: '12 diárias/mês',
    revenue: 'R$ 10.600',
  },
  {
    label: 'Otimista',
    color: '#2d5a27',
    highlight: false,
    occupancy: '80%',
    dailies: '24 diárias/mês',
    revenue: 'R$ 18.400',
  },
]

export default function Returns() {
  const scrollToContact = () => {
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
            RENDIMENTOS ESTIMADOS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-[#1a2418] mb-4 max-w-xl leading-tight"
          >
            Quanto o seu loft pode render todo mês?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl">
            Cenários com base no modelo de 32m², refletindo ocupações reais na região
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
            >
              {/* Badge MAIS POPULAR */}
              {s.highlight && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-[#e8a020] text-[#1a2418] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  MAIS POPULAR
                </div>
              )}

              {/* Imagem */}
              <div className="h-48 overflow-hidden">
                <img
                  src={IMAGE_URL}
                  alt={`Loft GREENLAND — cenário ${s.label}`}
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

                {/* Título */}
                <h4 className="font-heading text-xl font-bold text-[#1a2418] mb-4">
                  {s.label}
                </h4>

                {/* Divisor */}
                <div className="border-t border-gray-100 pt-4 flex-1 flex flex-col">

                  {/* Valores em linha */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-heading text-2xl font-bold text-[#1a2418]">{s.revenue}</p>
                      <p className="text-gray-400 text-xs mt-0.5">Receita estimada / mês</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-2xl font-bold" style={{ color: s.color }}>{s.occupancy}</p>
                      <p className="text-gray-400 text-xs mt-0.5">Ocupação</p>
                    </div>
                  </div>

                  {/* Diárias */}
                  <p className="text-gray-500 text-sm mb-5">{s.dailies}</p>

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
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm max-w-2xl mx-auto mb-8"
        >
          Os valores são estimativas brutas para o modelo 32m². A taxa administrativa (28%–40%) é deduzida conforme o plano de uso pessoal escolhido.
        </motion.p>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-[#2d5a27] hover:bg-[#1a3a18] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Simular Meu Rendimento →
          </button>
        </div>
      </div>
    </section>
  )
}
