import { useEffect } from 'react'
import logoImg from '../assets/Logotipos Greenland 2026-07.png'

/**
 * Site fora do ar.
 *
 * A proteção de verdade contra cópia é estrutural: o main.tsx só importa esta
 * página, então o código das outras nem entra no bundle publicado. Os
 * bloqueios abaixo (clique direito, seleção, atalhos de view-source e
 * DevTools) só atrapalham a cópia — quem quiser ainda abre o DevTools pelo
 * menu do navegador, mas aí só encontra esta página.
 */
function useBlockCopy(): void {
  useEffect(() => {
    const prevent = (event: Event) => event.preventDefault()

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      const mod = event.ctrlKey || event.metaKey
      const blocked =
        key === 'f12' ||
        (mod && ['u', 's', 'p', 'c', 'a'].includes(key)) ||
        (mod && event.shiftKey && ['i', 'j', 'c', 'k'].includes(key)) ||
        (event.metaKey && event.altKey && ['i', 'j', 'c', 'u'].includes(key))
      if (blocked) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    const events = ['contextmenu', 'copy', 'cut', 'selectstart', 'dragstart']
    events.forEach((name) => document.addEventListener(name, prevent))
    document.addEventListener('keydown', onKeyDown, true)

    return () => {
      events.forEach((name) => document.removeEventListener(name, prevent))
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [])
}

export default function UnavailablePage(): React.JSX.Element {
  useBlockCopy()

  useEffect(() => {
    // Qualquer rota que chegue aqui (deep link antigo, favorito) vira "/".
    if (window.location.pathname !== '/' || window.location.search || window.location.hash) {
      window.history.replaceState(null, '', '/')
    }
  }, [])

  return (
    <main className="flex min-h-screen select-none flex-col items-center justify-center bg-[var(--color-dark)] px-6 text-center text-[var(--color-light)]">
      <img
        src={logoImg}
        alt="GREENLAND"
        width={540}
        height={241}
        draggable={false}
        className="pointer-events-none mb-10 h-auto w-48 sm:w-56"
      />
      <h1 className="font-heading text-3xl font-semibold tracking-wide sm:text-4xl">Site indisponível</h1>
      <div className="mx-auto my-6 h-px w-16 bg-[var(--color-primary)]" />
      <p className="max-w-md text-base leading-relaxed opacity-70">
        Este site está temporariamente fora do ar.
      </p>
    </main>
  )
}
