import { motion } from 'framer-motion'
import { FaBed, FaWhatsapp } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import { whatsappLink } from '../data/contact'
import { incomeScenarios, FREE_NIGHTS, OWNER_SHARE, SUITES_DISCLAIMER } from '../data/suites'

const WHATSAPP_MESSAGE =
  'Olá! Quero simular o rendimento de uma suíte do Greenland alugada por temporada.'

export default function SuitesIncome(): React.JSX.Element {
  return (
    <section id="rendimento" className="py-24 bg-[#273020]">
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
            SIMULAÇÃO DE RENDA
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-white mb-4 leading-tight"
          >
            Quanto a sua suíte pode{' '}
            <span className="text-[#4a6838]">render por mês</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60 max-w-2xl mx-auto">
            Cenários calculados sobre uma Suíte Superior, com {OWNER_SHARE} repassada ao
            proprietário. A ocupação varia conforme a temporada.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {incomeScenarios.map((scenario) => (
            <motion.div
              key={scenario.label}
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 p-8 flex flex-col h-full"
            >
              <p className="text-[#4a6838] text-xs font-bold uppercase tracking-widest mb-4">
                {scenario.label}
              </p>
              <p className="font-heading text-4xl text-white font-bold mb-1">
                {scenario.monthly}
              </p>
              <p className="text-white/50 text-sm mb-6">ao proprietário por mês</p>

              <div className="flex flex-col gap-2 text-sm text-white/70 mb-5">
                <span>{scenario.occupancy}</span>
                <span>{scenario.daily}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mt-auto">{scenario.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#4a6838]/15 border border-[#4a6838]/40 p-7 flex flex-col md:flex-row md:items-center gap-6 justify-between mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 flex-shrink-0 bg-[#4a6838]/25 flex items-center justify-center">
              <FaBed className="text-[#a8c48a] text-lg" />
            </div>
            <div>
              <h3 className="font-heading text-white font-bold text-lg mb-1">
                E você ainda usa a sua suíte
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                São {FREE_NIGHTS} para você e sua família, com direito a toda a estrutura do
                condomínio e ao restaurante Art Cucina.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink(WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg hover:scale-105 whitespace-nowrap"
          >
            <FaWhatsapp className="text-lg" /> Quero conhecer
          </a>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white/35 text-xs text-center max-w-3xl mx-auto leading-relaxed"
        >
          {SUITES_DISCLAIMER}
        </motion.p>
      </div>
    </section>
  )
}
