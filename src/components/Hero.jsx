import { FaInstagram, FaFacebook, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import videoSrc from '../assets/hero.mp4'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Vídeo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 min-h-screen flex items-end">
        <div className="max-w-7xl mx-auto w-full px-6 pb-8 py-12 flex flex-col items-center md:flex-row md:items-end md:justify-between">

          {/* Texto e botões */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-lg mb-6 md:mb-8">
            <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-2">
              GREENLAND — Teresópolis, Serra RJ
            </p>
            <h1 className="font-heading text-3xl md:text-4xl xl:text-5xl text-white leading-tight mb-4">
              Terrenos na Serra do RJ<br /> — investimento com valorização real
            </h1>
            <p className="text-white/80 text-sm mb-6 max-w-lg">
              1ª fase com apenas 35 terrenos em condomínio pronto. RGI, água e luz
              instalados — oportunidade de investimento com financiamento em até 240x pela Caixa.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <button
                onClick={() => scrollTo('#contact')}
                className="bg-[#2d5a27] hover:bg-[#1a3a18] text-white font-semibold px-5 py-2 rounded-full text-xs transition-all duration-200 shadow hover:scale-105"
              >
                Garantir Meu Terreno
              </button>
              <button
                onClick={() => scrollTo('#greenland')}
                className="border border-white text-white hover:bg-white hover:text-[#1a2418] font-semibold px-5 py-2 rounded-full text-xs transition-all duration-200"
              >
                Conhecer o Projeto
              </button>
            </div>
          </div>

          {/* Redes sociais — ocultas no mobile */}
          <div className="hidden md:flex flex-col items-end gap-2 md:mb-8">
            {[
              { Icon: FaFacebook, href: 'https://facebook.com' },
              { Icon: FaXTwitter, href: 'https://twitter.com' },
              { Icon: FaYoutube, href: 'https://youtube.com' },
              { Icon: FaInstagram, href: 'https://instagram.com' },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-[#2d5a27] text-white w-10 h-10 flex items-center justify-center transition-colors"
                style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
