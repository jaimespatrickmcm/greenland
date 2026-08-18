import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../variants'
import imgLago from '../assets/artgreen/ar-livre.webp'
import imgRestaurante from '../assets/artgreen/venha.webp'
import imgPiscina from '../assets/IMG_2293.webp'
import imgSalao from '../assets/artgreen/salao.webp'
import imgExperiencias from '../assets/artgreen/experiencias.webp'

interface Photo {
  src: string
  alt: string
  caption: string
  className: string
}

// Mosaico em 2 colunas: a primeira foto ocupa duas linhas.
const photos: Photo[] = [
  {
    src: imgRestaurante,
    alt: 'Restaurante Art Cucina e fogueira ao ar livre no condomínio Greenland',
    caption: 'Restaurante Art Cucina',
    className: 'sm:row-span-2 aspect-[4/5] sm:aspect-auto sm:h-full',
  },
  {
    src: imgPiscina,
    alt: 'Piscina com bar molhado no complexo de lazer do Greenland',
    caption: 'Piscinas e bar molhado',
    className: 'aspect-[4/3]',
  },
  {
    src: imgLago,
    alt: 'Lago do Greenland com balanços suspensos e área de descanso',
    caption: 'Lago e áreas de descanso',
    className: 'aspect-[4/3]',
  },
  {
    src: imgSalao,
    alt: 'Salão de jogos com sinuca e tênis de mesa no Greenland',
    caption: 'Salão de jogos',
    className: 'aspect-[4/3]',
  },
  {
    src: imgExperiencias,
    alt: 'Experiência de queijos e vinhos com vista para as montanhas da Serra',
    caption: 'Experiências de queijos e vinhos',
    className: 'aspect-[4/3]',
  },
]

export default function SuitesStructure(): React.JSX.Element {
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
            O QUE ATRAI O HÓSPEDE
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-[#273020] mb-4 leading-tight"
          >
            20.000m² de lazer que fazem{' '}
            <span className="text-[#364728]">a diária valer a pena</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-2xl mx-auto">
            A sua suíte não compete com um apartamento qualquer: ela vem com a maior estrutura de
            lazer de Teresópolis e um dos melhores restaurantes da Serra dentro do condomínio.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 auto-rows-auto"
        >
          {photos.map((photo) => (
            <motion.figure
              key={photo.src}
              variants={fadeInUp}
              className={`relative overflow-hidden shadow-lg group ${photo.className}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-4 left-5 right-5 text-white font-heading font-bold text-base md:text-lg">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
