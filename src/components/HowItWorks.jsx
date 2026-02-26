import { useState } from 'react';
import artCucinaMainImg from '../assets/IMG_8232-HDR.webp';
import lazerImg from '../assets/IMG_6600.webp';
import infraestruturaImg from '../assets/IMG_2511.webp';

const highlights = [
  {
    id: 'restaurante',
    label: 'Restaurante',
    nome: 'Art Cucina',
    image: artCucinaMainImg,
    hoverText: 'A melhor gastronomia da Serra no seu quintal. O Art Cucina é referência gastronômica em Teresópolis, premiado e reconhecido como um dos melhores da região. Morando no GREENLAND, você tem esse privilégio todos os dias.',
  },
  {
    id: 'lazer',
    label: 'Lazer',
    nome: 'Lazer Completo',
    image: lazerImg,
    hoverText: '20.000m² de área de lazer — o maior complexo de lazer de Teresópolis. Piscinas, quadras esportivas, salão de festas e espaços ao ar livre. Infraestrutura completa para aproveitar seus finais de semana na serra.',
  },
  {
    id: 'infraestrutura',
    label: 'Infraestrutura',
    nome: 'Pronto para Construir',
    image: infraestruturaImg,
    hoverText: 'Água e luz já instaladas na entrada de cada terreno. O condomínio está 100% pronto, pavimentado e urbanizado. Compre hoje e construa quando quiser — sem pressa, no seu ritmo. Toda a burocracia já resolvida para você.',
  },
];

const HowItWorks = () => {
  const [activeId, setActiveId] = useState(highlights[0].id);
  const [hoveredId, setHoveredId] = useState(null);

  const getBgOpacity = (id) => (activeId === id ? 'opacity-100' : 'opacity-0');

  return (
    <section id="como-funciona" className="relative w-full h-[600px] lg:h-[700px] overflow-hidden overflow-x-hidden">
      {/* Backgrounds crossfade */}
      {highlights.map((h) => (
        <img
          key={h.id}
          src={h.image}
          alt={h.nome}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${getBgOpacity(h.id)}`}
          style={{ zIndex: 1, filter: 'contrast(1.08) saturate(1.15) brightness(0.95)' }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Desktop: 3 colunas interativas */}
      <div className="hidden md:flex relative z-20 h-[600px] lg:h-[700px] w-full">
        {highlights.map((h) => (
          <div
            key={h.id}
            className="group cursor-pointer relative transition-all duration-300 border-r border-white/20 flex flex-col items-center h-full flex-1 min-w-0 overflow-hidden"
            onMouseEnter={() => { setActiveId(h.id); setHoveredId(h.id); }}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Barra animada */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 bg-background transition-all duration-500 ${hoveredId === h.id ? 'h-20 lg:h-24' : 'h-0'}`}/>
            {/* Top white overlay on hover */}
            <div className={`absolute inset-x-0 top-0 bg-white transition-all duration-500 ease-in-out z-10 ${hoveredId === h.id ? 'h-24' : 'h-0'}`}></div>
            {/* Título */}
            <div className={`absolute inset-0 flex flex-col items-center justify-start pt-6 lg:pt-8 z-20 w-full`}>
              <div className={`text-base lg:text-lg font-light text-center px-4 transition-colors duration-300 ${hoveredId === h.id ? 'text-black' : 'text-white'}`}>{h.label}</div>
              <div className={`text-base lg:text-lg font-light text-center px-4 transition-colors duration-300 ${hoveredId === h.id ? 'text-black' : 'text-white'}`}>{h.nome}</div>
              {/* Hover Text */}
              {hoveredId === h.id && (
                <div className="text-base text-white mt-4 px-4 text-center max-w-xs font-normal">
                  {h.hoverText}
                </div>
              )}
            </div>
            {/* Gradiente inferior */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent h-32 z-0" />
          </div>
        ))}
      </div>

      {/* Mobile: 3 botões com click para trocar background */}
      <div className="md:hidden relative z-20 flex flex-col justify-end h-full p-6">
        {/* Texto do highlight ativo */}
        <div className="text-white text-center mb-6 px-2">
          <h3 className="font-heading text-xl font-bold mb-2">
            {highlights.find(h => h.id === activeId)?.label} — {highlights.find(h => h.id === activeId)?.nome}
          </h3>
          <p className="text-white/80 text-xs leading-relaxed line-clamp-4">
            {highlights.find(h => h.id === activeId)?.hoverText}
          </p>
        </div>
        {/* Grid: 3 botões */}
        <div className="grid grid-cols-3 gap-2">
          {highlights.map((h) => (
            <button
              key={h.id}
              onClick={() => setActiveId(h.id)}
              className={`py-3 px-2 rounded-xl text-center transition-all duration-300 ${
                activeId === h.id
                  ? 'bg-white text-[#1a2418] shadow-lg'
                  : 'bg-white/20 text-white backdrop-blur-sm'
              }`}
            >
              <div className="text-xs font-semibold">{h.label}</div>
              <div className="text-[10px] font-normal mt-0.5 leading-tight">{h.nome}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
