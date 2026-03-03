import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { fadeInLeft, fadeInUp, staggerContainer } from '../variants'
import whyInvestImg from '../assets/IMG_8250-HDR.webp'

const advantages: string[] = [
  'Condomínio 100% pronto — construa quando quiser',
  'Água e luz já instaladas na entrada do terreno',
  'Terreno com RGI — escritura no seu nome',
  '27 terrenos disponíveis — 86% da 1ª fase já vendida',
  'Financiamento direto em até 120x — sem burocracia bancária',
  'A 12km do centro, estrada pavimentada até a entrada',
  'Maior lazer de Teresópolis — 20.000m²',
  'Avaliamos permuta de carro, moto e caminhão',
  'Valorização contínua — região em crescimento na Serra',
]

export default function WhyInvest(): React.JSX.Element {
  const openWhatsApp = (): void => {
    window.open('https://wa.me/5521999920999', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="pq-investir" className="py-24 bg-[#273020]">
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
              src={whyInvestImg}
              alt="GREENLAND Condomínio"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-6 right-6 bg-[#273020]/90 backdrop-blur-sm text-white rounded-xl p-4 max-w-[200px]">
              <div className="text-white font-heading text-3xl font-bold">120x</div>
              <div className="text-white/80 text-sm">financiamento direto</div>
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
              className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              POR QUE COMPRAR AGORA
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-white mb-5 leading-tight"
            >
              As melhores oportunidades não duram — e o{' '}
              <span className="text-[#4a6838]">Greenland é uma delas</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              Restam apenas 27 terrenos na 1ª fase — 86% já foram vendidos.
              Quem compra primeiro escolhe as melhores localizações e garante o preço de lançamento.
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
                    <FaCheckCircle className="text-white text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-white/85 text-base">{adv}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              onClick={openWhatsApp}
              className="bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:scale-105"
            >
              Garantir Meu Terreno
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
