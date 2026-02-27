import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaPlay, FaTimes } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import foto9 from '../assets/foto (9).jpeg'
import foto11 from '../assets/foto (11).jpeg'
import foto12 from '../assets/foto (12).jpeg'
import foto13 from '../assets/foto (13).jpeg'
import img0098 from '../assets/IMG_0098.webp'
import img0548 from '../assets/IMG_0548.webp'
import img8232 from '../assets/IMG_8232-HDR.webp'

interface ImageItem {
  src: string
  alt: string
}

interface InstagramSectionProps {
  onOpenVideo: () => void
}

const images: ImageItem[] = [
  { src: img8232, alt: 'Art Cucina 1' },
  { src: foto11, alt: 'GREENLAND 2' },
  { src: img0548, alt: 'Art Cucina 2' },
  { src: foto12, alt: 'GREENLAND 4' },
  { src: foto9, alt: 'GREENLAND 5' },
  { src: img0098, alt: 'Art Cucina 3' },
  { src: foto13, alt: 'GREENLAND 7' },
]

export default function InstagramSection({ onOpenVideo }: InstagramSectionProps): React.JSX.Element {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)

  const openImage = (image: ImageItem): void => setSelectedImage(image)
  const closeImage = (): void => setSelectedImage(null)

  return (
    <>
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
            <div
              className="instagram-item rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openImage(images[0])}
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-72 object-cover"
              />
              <div className="overlay rounded-2xl">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
            <div
              className="instagram-item rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openImage(images[1])}
            >
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
            <div
              className="instagram-item rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openImage(images[2])}
            >
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
            <div
              className="instagram-item rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openImage(images[4])}
            >
              <img
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-56 object-cover"
              />
              <div className="overlay rounded-2xl">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
            <div
              className="instagram-item rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openImage(images[5])}
            >
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
          <div
            className="instagram-item rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => openImage(images[6])}
          >
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

    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative max-w-5xl w-full"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <button
              onClick={closeImage}
              className="absolute -top-12 right-0 text-white hover:text-[#e8a020] transition-colors text-2xl"
              aria-label="Fechar imagem"
            >
              <FaTimes />
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[85vh] object-contain bg-black"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
