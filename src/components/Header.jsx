import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: 'O Greenland', href: '#greenland' },
  { label: 'Diferenciais', href: '#como-funciona' },
  { label: 'Por que Comprar', href: '#pq-investir' },
  { label: 'Condições', href: '#rendimentos' },
  { label: 'Terrenos', href: '#investimento' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1a2418]/95 shadow-xl'
            : 'bg-black/40 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://il7.org/wp-content/uploads/2025/07/logo-greenland-branca.svg"
              alt="GREENLAND"
              className="h-12 w-auto"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <span
              className="text-white font-heading text-2xl font-bold hidden"
              style={{ display: 'none' }}
            >
              GREENLAND
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-white/90 hover:text-[#e8a020] text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Social icons - desktop */}
            <div className="hidden md:flex items-center gap-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                className="text-white/70 hover:text-[#e8a020] transition-colors text-lg">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/artgreen.pousada" target="_blank" rel="noopener noreferrer"
                className="text-white/70 hover:text-[#e8a020] transition-colors text-lg">
                <FaInstagram />
              </a>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer"
                className="text-white/70 hover:text-[#e8a020] transition-colors text-lg">
                <FaWhatsapp />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="bg-[#e8a020] hover:bg-[#c8881a] text-[#1a2418] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-lg"
            >
              Quero Meu Terreno!
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden text-white text-2xl p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[80]"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-72 bg-[#1a2418] z-[90] flex flex-col py-8 px-6"
            >
              <div className="flex items-center justify-between mb-8">
                <img
                  src="https://il7.org/wp-content/uploads/2025/07/logo-greenland-branca.svg"
                  alt="GREENLAND"
                  className="h-10 w-auto"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <button onClick={() => setMenuOpen(false)} className="text-white text-2xl">
                  <FaTimes />
                </button>
              </div>
              <nav className="flex flex-col gap-4 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="text-white/90 hover:text-[#e8a020] text-lg font-medium transition-colors border-b border-white/10 pb-4"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#e8a020] text-2xl transition-colors"><FaFacebook /></a>
                <a href="https://www.instagram.com/artgreen.pousada" target="_blank" rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#e8a020] text-2xl transition-colors"><FaInstagram /></a>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#e8a020] text-2xl transition-colors"><FaWhatsapp /></a>
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="mt-4 bg-[#e8a020] text-[#1a2418] font-bold text-center py-3 rounded-full"
              >
                Quero Meu Terreno!
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
