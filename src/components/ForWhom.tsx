import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FaChartLine, FaHome, FaBriefcase, FaMountain } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'

interface Profile {
  Icon: IconType
  title: string
  desc: string
}

const profiles: Profile[] = [
  {
    Icon: FaChartLine,
    title: 'Investidores',
    desc: 'Quem busca valorização patrimonial em terrenos na Serra do RJ com alta liquidez, escritura definitiva e financiamento facilitado pela Caixa.',
  },
  {
    Icon: FaHome,
    title: 'Casa na Serra',
    desc: 'Quem quer um refúgio na serra para finais de semana e feriados — com infraestrutura pronta e o melhor lazer de Teresópolis no quintal.',
  },
  {
    Icon: FaBriefcase,
    title: 'Diversificação de Patrimônio',
    desc: 'Profissionais que querem sair do financeiro e investir em terra com RGI, segurança jurídica e valorização contínua.',
  },
  {
    Icon: FaMountain,
    title: 'Quem conhece Teresópolis',
    desc: 'Quem já frequenta a região e sabe o potencial de valorização da serra fluminense — e quer garantir seu terreno na 1ª fase.',
  },
]

export default function ForWhom(): React.JSX.Element {
  const scrollToContact = (): void => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-[#1a2418]">
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
            className="text-[#e8a020] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            PÚBLICO-ALVO
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-white mb-4"
          >
            Pra quem é o{' '}
            <span className="text-[#5a8a3c]">Greenland</span>?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            O Greenland é pra quem enxerga oportunidade. Seja como investimento,
            seja como refúgio na serra — aqui o terreno já vem pronto pra valorizar.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {profiles.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#e8a020]/50 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-5 bg-[#e8a020]/15 rounded-2xl flex items-center justify-center group-hover:bg-[#e8a020]/25 transition-colors">
                <Icon className="text-[#e8a020] text-2xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3">
                {title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="bg-[#e8a020] hover:bg-[#c8881a] text-[#1a2418] font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:scale-105"
          >
            Garantir Meu Terreno →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
