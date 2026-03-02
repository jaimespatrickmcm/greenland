import { useState } from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import logoImg from '../assets/Logotipos Greenland 2026-07.png'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'O Greenland', href: '#greenland' },
  { label: 'Diferenciais', href: '#como-funciona' },
  { label: 'Por que Comprar', href: '#pq-investir' },
  { label: 'Condições', href: '#rendimentos' },
  { label: 'Terrenos', href: '#investimento' },
  { label: 'FAQ', href: '#faq' },
]

const importantLinks: string[] = [
  'Política de Privacidade',
  'Sobre o ARTGREEN',
  'Blog',
  'Termos e Condições',
  'Mapa do Condomínio',
]

export default function Footer(): React.JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [subscribed, setSubscribed] = useState<boolean>(false)

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  const handleNavClick = (href: string): void => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#273020] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <img
              src={logoImg}
              alt="GREENLAND"
              className="h-12 w-auto mb-4"
            />


            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Teresópolis, RJ<br />Serra do Rio de Janeiro
            </p>
            <p className="text-white/50 text-sm mb-6">
              Seg - Sáb: 08h00 - 18h00
            </p>
            <a
              href="mailto:Greenlandtere@gmail.com"
              className="text-white/50 text-sm hover:text-[#8d4e27] transition-colors mb-6 block"
            >
              Greenlandtere@gmail.com
            </a>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/greenlandteresopolis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-[#8d4e27] hover:text-[#273020] transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-[#8d4e27] hover:text-[#273020] transition-all"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/5521999920999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-[#25D366] hover:text-white transition-all"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Col 2 - Navigation */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-white font-bold text-lg mb-5">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="text-white/50 hover:text-[#8d4e27] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Important Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-white font-bold text-lg mb-5">Links Importantes</h4>
            <ul className="flex flex-col gap-3">
              {importantLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-[#8d4e27] text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-white font-bold text-lg mb-2">Receba novidades</h4>
            <p className="text-white/50 text-sm mb-5 leading-relaxed">
              Fique por dentro das atualizações do GREENLAND
            </p>
            {subscribed ? (
              <div className="bg-[#364728]/30 border border-[#4a6838] rounded-xl p-4 text-center">
                <div className="text-[#4a6838] text-2xl mb-1">✓</div>
                <p className="text-white/80 text-sm">Inscrito com sucesso!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/40 focus:border-[#8d4e27]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold py-3 rounded-xl text-sm transition-all hover:scale-[1.02]"
                >
                  Inscrever
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">
            © 2026 GREENLAND® | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
