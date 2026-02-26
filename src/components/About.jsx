import { motion } from 'framer-motion'
import { FaHome, FaTree, FaFileAlt } from 'react-icons/fa'
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../variants'
import foto5 from '../assets/foto (5).jpeg'
import foto6 from '../assets/foto (6).jpeg'

const features = [
  {
    Icon: FaHome,
    title: 'Condomínio Pronto',
    desc: 'Infraestrutura completa, pode construir quando quiser',
  },
  {
    Icon: FaTree,
    title: 'Lazer Completo',
    desc: 'Maior estrutura de lazer de Teresópolis, 20.000m²',
  },
  {
    Icon: FaFileAlt,
    title: 'Terreno com RGI',
    desc: 'Escritura e segurança jurídica garantidas',
  },
]

export default function About() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="greenland" className="py-24 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-[#5a8a3c] text-sm font-semibold tracking-widest uppercase mb-4"
        >
          SOBRE O GREENLAND
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-heading text-3xl md:text-4xl text-[#1a2418] mb-10 leading-tight max-w-2xl"
        >
          Mais que um terreno — é um{' '}
          <span className="text-[#2d5a27]">patrimônio na Serra</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col gap-8"
          >
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-lg leading-relaxed"
            >
              O GREENLAND é um condomínio fechado em pleno funcionamento em Teresópolis,
              com 20.000m² de lazer e infraestrutura completa. Terrenos com RGI em
              área privilegiada na Serra do Rio de Janeiro — uma oportunidade de
              investimento com valorização contínua e liquidez real.
            </motion.p>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-3xl overflow-hidden h-72 lg:h-[26rem]">
                <img
                  src={foto5}
                  alt="GREENLAND Natureza e Lazer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#e8a020] rounded-2xl -z-10" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-3xl overflow-hidden h-80 md:h-96">
                <img
                  src={foto6}
                  alt="GREENLAND Condomínio e Segurança"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-[#2d5a27] rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="border-l-4 border-[#2d5a27] pl-6 py-2 bg-white rounded-r-xl shadow-sm"
            >
              <p className="text-gray-700 italic leading-relaxed">
                "Localização privilegiada, infraestrutura pronta e valorização contínua
                — a 12km do centro de Teresópolis, com estrada pavimentada até
                a entrada. O investimento ideal na Serra do Rio de Janeiro."
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-[#2d5a27]/10 rounded-full flex items-center justify-center">
                    <Icon className="text-[#2d5a27] text-lg" />
                  </div>
                  <div>
                    <h5 className="font-heading text-sm font-bold text-[#1a2418]">{title}</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center md:text-left">
              <motion.button
                onClick={scrollToContact}
                className="bg-[#2d5a27] hover:bg-[#1a3a18] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Quero Saber Mais →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
