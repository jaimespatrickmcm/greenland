import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../variants'
import foto11 from '../assets/foto (11).jpeg'

const advantages = [
  'Preço promocional exclusivo de pré-lançamento',
  'Escolha das melhores localizações no terreno',
  'Condições facilitadas de pagamento',
  'Maior potencial de valorização do imóvel',
  'Número limitado de unidades disponíveis',
]

export default function WhyInvest() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pq-investir" className="py-24 bg-[#1a2418]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            <img
              src={foto11}
              alt="Implantação GREENLAND"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            {/* Overlay badge */}
            <div className="absolute top-6 left-6 bg-[#e8a020] text-[#1a2418] font-heading font-bold px-4 py-2 rounded-xl text-lg">
              PRÉ-LANÇAMENTO
            </div>
            <div className="absolute bottom-6 right-6 bg-[#1a2418]/90 backdrop-blur-sm text-white rounded-xl p-4 max-w-[200px]">
              <div className="text-[#e8a020] font-heading text-3xl font-bold">18%</div>
              <div className="text-white/80 text-sm">ao ano estimado</div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#e8a020] text-sm font-semibold tracking-widest uppercase mb-3"
            >
              POR QUE INVESTIR AGORA
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-white mb-5 leading-tight"
            >
              As melhores oportunidades não duram para sempre — e o{' '}
              <span className="text-[#5a8a3c]">GREENLAND é uma delas</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              Investir no início de um empreendimento é entrar antes da valorização.
              Quem chega primeiro garante melhores preços, melhores posições e mais
              retorno.
            </motion.p>

            <motion.div variants={fadeInUp} className="border-t border-white/20 pt-8 mb-8">
              <div className="flex flex-col gap-4">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-[#e8a020] text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-white/85 text-base">{adv}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              onClick={scrollToContact}
              className="bg-[#e8a020] hover:bg-[#c8881a] text-[#1a2418] font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:scale-105"
            >
              Garantir Minha Unidade
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
