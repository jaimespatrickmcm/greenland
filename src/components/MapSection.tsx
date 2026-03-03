import { motion } from 'framer-motion'
import { fadeInUp } from '../variants'
import mapaImg from '../assets/Mapa-arquivo-GREENLAND-1-_1_.webp'

export default function MapSection(): React.JSX.Element {
  return (
    <section className="py-20 bg-[#f3efe8]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-10"
        >
          <p className="text-[#4a6838] text-sm font-semibold tracking-widest uppercase mb-3">
            LOCALIZAÇÃO
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-[#273020] mb-3 leading-tight">
            Onde fica o <span className="text-[#364728]">Greenland</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            12,8km do centro de Teresópolis — estrada 100% pavimentada até a entrada do condomínio
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex justify-center"
        >
          <img
            src={mapaImg}
            alt="Mapa de localização do Greenland em Teresópolis — 12,8km do centro, 22 minutos de carro"
            className="w-full max-w-4xl h-auto object-contain rounded-2xl shadow-xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
