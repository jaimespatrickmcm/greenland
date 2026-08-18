export interface NavLink {
  label: string
  href: string
}

// Links de navegação compartilhados entre Header e Footer.
// `#âncora` aponta para uma seção da home; `/rota` é uma página própria.
export const navLinks: NavLink[] = [
  { label: 'O Greenland', href: '#greenland' },
  { label: 'Diferenciais', href: '#como-funciona' },
  { label: 'Por que Comprar', href: '#pq-investir' },
  { label: 'Condições', href: '#rendimentos' },
  { label: 'Terrenos', href: '#investimento' },
  // Aguardando aprovação: reative para exibir a aba Imóveis no header e no footer.
  // { label: 'Imóveis', href: '/imoveis' },
  { label: 'FAQ', href: '#faq' },
]

export const isHomePage = (): boolean =>
  window.location.pathname.replace(/\/+$/, '') === ''

/** Fora da home, as âncoras precisam voltar para a home antes de rolar. */
export const resolveHref = (href: string): string =>
  href.startsWith('#') && !isHomePage() ? `/${href}` : href

/** Rola suavemente até a âncora quando já estamos na home. */
export const scrollToAnchor = (href: string, delay = 0): void => {
  window.setTimeout(() => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }, delay)
}
