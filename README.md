# GREENLAND — Landing Page

Site onepage para o empreendimento GREENLAND — lofts com rendimento de até 18% ao ano em Teresópolis, RJ.

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Swiper.js
- React Icons

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build para produção
npm run build

# 4. Preview do build
npm run preview
```

## Estrutura

```
src/
  components/
    Header.jsx         — Header fixo com menu responsivo
    Hero.jsx           — Hero com slideshow e animações
    About.jsx          — Sobre o GREENLAND
    Stats.jsx          — Contadores animados
    HowItWorks.jsx     — 5 etapas interativas
    WhyInvest.jsx      — Vantagens de investir agora
    Returns.jsx        — Cenários de rendimento
    Pricing.jsx        — Modelos de loft + pagamento
    Clients.jsx        — Selos e experiência ARTGREEN
    Testimonials.jsx   — Depoimentos com Swiper
    InstagramSection.jsx — Galeria estilo Instagram
    ContactForm.jsx    — Formulário de contato
    FAQ.jsx            — Perguntas frequentes (accordion)
    Footer.jsx         — Rodapé completo
    VideoModal.jsx     — Modal de vídeo YouTube
  App.jsx
  index.css
  variants.js          — Variantes Framer Motion
```

## Personalizações

- **Número WhatsApp**: Substitua `5500000000000` pelo número real em todos os arquivos
- **Vídeo YouTube**: Substitua o ID `VhBl3dHT5SY` pelo vídeo real do ARTGREEN no `VideoModal.jsx`
- **Cores**: Editáveis no `tailwind.config.js` e `index.css`

## Seções

1. Header com navegação e CTA
2. Hero com slideshow de fundo (Ken Burns)
3. Sobre o GREENLAND
4. Stats animados (18%, 5 fases, 2 modelos, 100% legalizado)
5. Como Funciona (5 etapas interativas)
6. Por que Investir Agora
7. Rendimentos Estimados (3 cenários)
8. Lofts Exclusivos + Galeria de Renders
9. Experiência ARTGREEN
10. Depoimentos
11. Galeria Instagram
12. Formulário de Contato
13. FAQ (accordion)
14. Footer

**Botão flutuante de WhatsApp** em todas as páginas.
