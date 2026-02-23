import { motion } from 'framer-motion'
import { FaHome, FaDollarSign, FaLeaf } from 'react-icons/fa'
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../variants'
import foto5 from '../assets/foto (5).jpeg'
import foto6 from '../assets/foto (6).jpeg'

const features = [
  {
    Icon: FaHome,
    title: 'Escritura Individual',
    desc: 'Loft com matrícula própria e segurança jurídica',
  },
  {
    Icon: FaDollarSign,
    title: 'Rendimento Mensal',
    desc: 'Até 18% ao ano com gestão hoteleira',
  },
  {
    Icon: FaLeaf,
    title: 'Natureza Viva',
    desc: 'Em Teresópolis, no coração da Serra',
  },
]

export default function About() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="greenland" className="py-24 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Topo: Label + H3 — fora do grid, espelhando o "About Ravine" */}
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
          Mais que um refúgio, é um{' '}
          <span className="text-[#2d5a27]">investimento inteligente</span>
        </motion.h2>

        {/* Grid principal de 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* COLUNA ESQUERDA: Parágrafo introdutório + imagem vertical */}
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
              O GREENLAND vai além de um loft em meio à natureza — é um modelo
              de investimento completo e exclusivo. Aqui, você adquire um imóvel
              com escritura no seu nome, usufrui da estrutura da Pousada ARTGREEN
              e ainda recebe rendimento mensal, com a locação profissional do seu
              loft.
            </motion.p>

            {/* Imagem vertical — mesma imagem recortada diferente */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-3xl overflow-hidden h-72 lg:h-[26rem]">
                <img
                  src={foto5}
                  alt="GREENLAND Refúgio e Natureza"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decoração dourada */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#e8a020] rounded-2xl -z-10" />
            </motion.div>
          </motion.div>

          {/* COLUNA DIREITA: Imagem principal + quote + icon boxes + botão */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col gap-8"
          >
            {/* Imagem principal grande */}
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-3xl overflow-hidden h-80 md:h-96">
                <img
                  src={foto6}
                  alt="GREENLAND Loft e Investimento"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decoração verde */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-[#2d5a27] rounded-2xl -z-10" />
            </motion.div>

            {/* Quote integrado organicamente */}
            <motion.div
              variants={fadeInUp}
              className="border-l-4 border-[#2d5a27] pl-6 py-2 bg-white rounded-r-xl shadow-sm"
            >
              <p className="text-gray-700 italic leading-relaxed">
                "Enquanto muitos empreendimentos entregam apenas lazer ou só
                investimento, o GREENLAND une os dois — com gestão especializada,
                valorização imobiliária e segurança jurídica total."
              </p>
            </motion.div>

            {/* Grid de icon boxes — alinhados à esquerda, estilo Ravine */}
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

            {/* Botão — centralizado mobile, esquerda desktop */}
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
