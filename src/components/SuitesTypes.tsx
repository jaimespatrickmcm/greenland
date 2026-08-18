import { motion } from 'framer-motion'
import { FaWhatsapp, FaRulerCombined, FaUserFriends, FaCheck } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import { whatsappLink } from '../data/contact'
import { suites } from '../data/suites'

export default function SuitesTypes(): React.JSX.Element {
  return (
    <section id="suites" className="py-24 bg-[#f3efe8]">
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
            UNIDADES DISPONÍVEIS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-[#273020] mb-4 leading-tight"
          >
            Dois tipos de suíte,{' '}
            <span className="text-[#364728]">a mesma operação de hotel</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-2xl mx-auto">
            Unidades prontas, mobiliadas e decoradas. Escolha a sua e o hotel coloca a suíte para
            alugar já na próxima temporada.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {suites.map((suite) => (
            <motion.article
              key={suite.id}
              variants={fadeInUp}
              className="bg-white shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={suite.image}
                  alt={suite.imageAlt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {suite.badge && (
                  <span className="absolute top-4 left-4 bg-[#8d4e27] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                    {suite.badge}
                  </span>
                )}
              </div>

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <h3 className="font-heading text-2xl text-[#273020] font-bold mb-2">
                  {suite.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{suite.tagline}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-[#364728] font-semibold mb-6">
                  <span className="inline-flex items-center gap-2">
                    <FaRulerCombined className="text-[#4a6838]" /> {suite.area}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaUserFriends className="text-[#4a6838]" /> {suite.guests}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-7">
                  {suite.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <FaCheck className="text-[#4a6838] text-sm mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-gray-100 pt-6">
                  <p className="text-[#273020] font-heading text-2xl font-bold">{suite.cash}</p>
                  <p className="text-gray-500 text-sm mb-1">{suite.installment}</p>
                  <p className="text-[#8d4e27] text-sm font-semibold mb-6">{suite.averageDaily}</p>

                  <a
                    href={whatsappLink('Olá! Quero conhecer a ' + suite.name + ' à venda no Greenland.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-6 py-4 rounded-full text-base transition-all shadow-lg hover:scale-[1.02]"
                  >
                    <FaWhatsapp className="text-lg" /> Quero conhecer
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 text-xs text-center mt-8 max-w-2xl mx-auto"
        >
          Valores de referência sujeitos a alteração e à disponibilidade de unidades. Consulte as
          condições vigentes com nossa equipe.
        </motion.p>
      </div>
    </section>
  )
}
