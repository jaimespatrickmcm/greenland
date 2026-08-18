import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FaChartLine, FaConciergeBell, FaFileSignature, FaMountain } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'

interface Reason {
  Icon: IconType
  title: string
  desc: string
}

const reasons: Reason[] = [
  {
    Icon: FaChartLine,
    title: 'Renda recorrente',
    desc: 'A suíte é alugada por diária o ano inteiro. Todo mês você recebe o repasse das hospedagens, sem depender de um único inquilino.',
  },
  {
    Icon: FaConciergeBell,
    title: 'Operação profissional',
    desc: 'O Art Green Boutique Hotel cuida de reservas, recepção, limpeza, enxoval e manutenção. Você não administra nada.',
  },
  {
    Icon: FaFileSignature,
    title: 'Imóvel no seu nome',
    desc: 'Compra com escritura registrada em cartório. É patrimônio real, transferível e financiável — não é cota nem contrato de gaveta.',
  },
  {
    Icon: FaMountain,
    title: 'Destino consolidado',
    desc: 'Teresópolis recebe turistas o ano todo, a 12km do centro e a menos de 2h do Rio. Alta temporada no inverno, feriados e Réveillon.',
  },
]

export default function SuitesWhy(): React.JSX.Element {
  return (
    <section className="py-24 bg-[#273020]">
      <div className="max-w-7xl mx-auto px-6">
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
            POR QUE COMPRAR UMA SUÍTE
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-white mb-4 leading-tight"
          >
            Um imóvel que se paga com{' '}
            <span className="text-[#4a6838]">o aluguel por temporada</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60 max-w-2xl mx-auto">
            Você compra a suíte pronta e entra na operação de hospedagem do Art Green Boutique
            Hotel — a mesma estrutura que já recebe hóspedes dentro do Greenland.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 p-7 h-full"
            >
              <div className="w-12 h-12 bg-[#4a6838]/20 flex items-center justify-center mb-5">
                <Icon className="text-[#4a6838] text-xl" />
              </div>
              <h3 className="font-heading text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
