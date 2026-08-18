import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../variants'
import { FREE_NIGHTS, OWNER_SHARE } from '../data/suites'

interface Step {
  number: string
  title: string
  desc: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Você escolhe a suíte',
    desc: 'Visita ao condomínio, escolha da unidade e definição da condição de pagamento — à vista ou parcelada direto conosco.',
  },
  {
    number: '02',
    title: 'Escritura no seu nome',
    desc: 'Contrato de compra e venda e registro em cartório. O imóvel passa a ser seu, com toda a segurança jurídica.',
  },
  {
    number: '03',
    title: 'O hotel opera a suíte',
    desc: 'A unidade entra no sistema de reservas do Art Green Boutique Hotel: divulgação, hóspedes, limpeza, enxoval e manutenção por nossa conta.',
  },
  {
    number: '04',
    title: 'Você recebe todo mês',
    desc: `Repasse de ${OWNER_SHARE} das hospedagens da sua unidade, com relatório de ocupação. E você ainda tem ${FREE_NIGHTS} para usar quando quiser.`,
  },
]

export default function SuitesHowItWorks(): React.JSX.Element {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
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
            COMO FUNCIONA
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-[#273020] mb-4 leading-tight"
          >
            Da compra ao{' '}
            <span className="text-[#364728]">primeiro repasse</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl mx-auto">
            Quatro etapas simples. A parte trabalhosa fica com a gente.
          </motion.p>
        </motion.div>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col gap-5"
        >
          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={fadeInUp}
              className="flex items-start gap-5 md:gap-7 bg-[#f3efe8] p-6 md:p-7 border-l-4 border-[#4a6838]"
            >
              <span className="font-heading text-3xl md:text-4xl font-bold text-[#4a6838]/40 leading-none">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-lg md:text-xl text-[#273020] font-bold mb-1.5">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
