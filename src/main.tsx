import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import Imoveis from './Imoveis'
import './index.css'

// Roteamento simples por pathname: cada página é uma navegação completa,
// sem a necessidade de um router client-side neste site.
const path = window.location.pathname.replace(/\/+$/, '')
const Page = path === '/imoveis' ? Imoveis : App

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Page />
    </HelmetProvider>
  </React.StrictMode>,
)
