import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import Cal from '@calcom/embed-react'

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps): React.JSX.Element {
  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[110] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative w-full max-w-5xl"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-[#8d4e27] transition-colors text-2xl"
              aria-label="Fechar agendamento"
            >
              <FaTimes />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[85vh] min-h-[420px] md:min-h-[520px]">
              <Cal
                calLink="greenland-teresopolis-rt3xiy"
                style={{ width: '100%', height: '100%', overflow: 'auto' }}
                config={{ layout: 'month_view' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}