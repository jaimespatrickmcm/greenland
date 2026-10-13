import React from 'react'
import ReactDOM from 'react-dom/client'
import UnavailablePage from './pages/UnavailablePage'
import './index.css'

// Site fora do ar: toda rota renderiza só a página de indisponível.
// App.tsx (home) e Imoveis.tsx continuam no repositório, mas não são
// importados aqui — de propósito, para que o código deles não vá para o
// build publicado. Para voltar ao ar, reverta este arquivo, o index.html e
// o public/robots.txt, e apague functions/_middleware.ts.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UnavailablePage />
  </React.StrictMode>,
)
