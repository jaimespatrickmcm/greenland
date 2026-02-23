import { motion } from 'framer-motion'
import { FaInstagram, FaPlay } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import foto7 from '../assets/foto (7).jpeg'
import foto8 from '../assets/foto (8).jpeg'
import foto9 from '../assets/foto (9).jpeg'
import foto10 from '../assets/foto (10).jpeg'
import foto11 from '../assets/foto (11).jpeg'
import foto12 from '../assets/foto (12).jpeg'
import foto13 from '../assets/foto (13).jpeg'

const images = [
  { src: foto7, alt: 'GREENLAND 1' },
  { src: foto8, alt: 'GREENLAND 2' },
  { src: foto9, alt: 'GREENLAND 3' },
  { src: foto10, alt: 'GREENLAND 4' },
  { src: foto11, alt: 'GREENLAND 5' },
  { src: foto12, alt: 'GREENLAND 6' },
  { src: foto13, alt: 'GREENLAND 7' },
]

export default function InstagramSection({ onOpenVideo }) {
  return (
    <section className="py-24 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#5a8a3c] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            SIGA-NOS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-[#1a2418] mb-3"
          >
            Inspire-se com as fotos do GREENLAND
          </motion.h2>
          <motion.a
            variants={fadeInUp}
            href="https://www.instagram.com/artgreen.pousada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2d5a27] font-semibold text-lg hover:text-[#e8a020] transition-colors"
          >
            <FaInstagram />
            @artgreen.pousada
          </motion.a>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {/* Col 1 - tall + small */}
          <div className="flex flex-col gap-3">
            <div className="instagram-item rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-72 object-cover"
              />
              <div className="overlay rounded-2xl">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
            <div className="instagram-item rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-36 object-cover"
              />
              <div className="overlay rounded-2xl">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3">
            <div className="instagram-item rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-48 object-cover"
              />
              <div className="overlay rounded-2xl">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
            {/* Video play button item */}
            <div
              className="instagram-item rounded-2xl overflow-hidden cursor-pointer relative"
              onClick={onOpenVideo}
            >
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-60 object-cover"
              />
              <div className="overlay rounded-2xl !opacity-100 bg-black/50">
                <div className="w-14 h-14 rounded-full bg-[#e8a020] flex items-center justify-center">
                  <FaPlay className="text-white text-xl ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <div className="instagram-item rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-56 object-cover"
              />
              <div className="overlay rounded-2xl">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
            <div className="instagram-item rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={images[5].src}
                alt={images[5].alt}
                className="w-full h-52 object-cover"
              />
              <div className="overlay rounded-2xl">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
          </div>

          {/* Col 4 - large */}
          <div className="instagram-item rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={images[6].src}
              alt={images[6].alt}
              className="w-full h-full object-cover min-h-[312px]"
            />
            <div className="overlay rounded-2xl">
              <FaInstagram className="text-white text-3xl" />
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/artgreen.pousada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2d5a27] hover:bg-[#1a3a18] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            <FaInstagram />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
