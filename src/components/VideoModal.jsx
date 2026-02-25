import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import videoSrc from '../assets/hero.mp4'

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-[#e8a020] transition-colors text-2xl"
              aria-label="Fechar"
            >
              <FaTimes />
            </button>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
