import { motion } from 'framer-motion'
import { fadeInUp } from '../variants'
import { FaMapMarkerAlt } from 'react-icons/fa'
import mapaImg from '../assets/Mapa-arquivo-GREENLAND-1-_1_.webp'

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=-22.3894,-43.0151&destination_place_id=GREENLAND+Teresópolis'

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
          className="flex flex-col items-center"
        >
          {/* Imagem clicavel que direciona ao Google Maps */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full max-w-4xl cursor-pointer"
          >
            <img
              src={mapaImg}
              alt="Mapa de localização do Greenland em Teresópolis — 12,8km do centro, 22 minutos de carro"
              className="w-full h-auto object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#273020] font-bold px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#8d4e27]" />
                Abrir no Google Maps
              </span>
            </div>
          </a>

          {/* Botao Como Chegar */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 mt-6"
          >
            <FaMapMarkerAlt />
            Como Chegar
          </a>
        </motion.div>
      </div>
    </section>
  )
}
