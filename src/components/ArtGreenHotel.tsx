import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import imgArLivre from '../assets/artgreen/ar-livre.webp'
import imgExperiencias from '../assets/artgreen/experiencias.webp'
import imgSalao from '../assets/artgreen/salao.webp'
import imgVenha from '../assets/artgreen/venha.webp'
import imgHero from '../assets/artgreen/IMG_4388.JPG.webp'

interface Photo {
  src: string
  alt: string
  /** Tailwind classes that control how the tile occupies the mosaic. */
  className: string
}

// Mosaico em 2 colunas, 5 imagens com alturas variadas para um visual rico.
const photos: Photo[] = [
  {
    src: imgHero,
    alt: 'Art Green Boutique Hotel, vista exterior',
    className: 'sm:row-span-2 aspect-[4/5] sm:aspect-auto sm:h-full',
  },
  {
    src: imgVenha,
    alt: 'Acomodações do Art Green Boutique Hotel',
    className: 'aspect-[4/3]',
  },
  {
    src: imgExperiencias,
    alt: 'Experiências exclusivas no Art Green Boutique Hotel',
    className: 'aspect-[4/3]',
  },
  {
    src: imgSalao,
    alt: 'Salão do Art Green Boutique Hotel',
    className: 'aspect-[4/3]',
  },
  {
    src: imgArLivre,
    alt: 'Áreas ao ar livre do Art Green Boutique Hotel',
    className: 'aspect-[4/3]',
  },
]

const HOTEL_URL = 'https://artgreenboutiquehotel.com.br/'

export default function ArtGreenHotel(): React.JSX.Element {
  return (
    <section className="py-24 bg-[#f3efe8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#4a6838] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            HOSPEDE-SE CONOSCO
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-[#273020] mb-5 leading-tight"
          >
            Quer sentir essa experiência? Hospede-se no{' '}
            <span className="text-[#364728]">Art Green Boutique Hotel</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Depois de conhecer tudo o que o Greenland oferece, que tal vivenciar de perto?
            Hospede-se no Art Green Boutique Hotel, dentro do próprio condomínio, e sinta
            na pele o estilo de vida em meio à Mata Atlântica. Descanse com conforto,
            aproveite a gastronomia premiada do Art Cucina e conheça seu futuro terreno
            sem pressa.
          </motion.p>
        </motion.div>

        {/* Mosaico de fotos: 2 colunas */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 auto-rows-auto mb-12"
        >
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              variants={fadeInUp}
              className={`relative overflow-hidden rounded-2xl shadow-lg group ${p.className}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                width={1200}
                height={800}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={HOTEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:scale-105"
          >
            Quero conhecer
            <FaArrowRight className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
