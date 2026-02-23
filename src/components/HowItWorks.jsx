
import { useState } from 'react';
import fase1Img from '../assets/fase1.jpg';
import fase2Img from '../assets/fase2.jpg';
import fase3Img from '../assets/fase3.jpg';
import fase4Img from '../assets/fase4.jpg';
import fase5Img from '../assets/fase5.jpg';

const phases = [
  {
    id: 'pre-lancamento',
    fase: 'Fase 1',
    nome: 'Pré-lançamento',
    image: fase1Img,
    hoverText: 'Nesta etapa, você entra como investidor ainda na fase de pré-lançamento do empreendimento. São dois modelos disponíveis: lofts de 21m² com 1 quarto e 32m² com 2 quartos, ambos projetados para entregar conforto, estética e eficiência operacional. Ao investir agora, você adquire o direito real de propriedade com escritura definitiva em seu nome. Essa antecipação garante condições especiais de pagamento, maior poder de escolha de localização no terreno e o melhor potencial de valorização do projeto.'
  },
  {
    id: 'construcao',
    fase: 'Fase 2',
    nome: 'Construção',
    image: fase2Img,
    hoverText: 'Após a aquisição, o seu chalé entra no cronograma oficial de construção. Toda a obra é realizada com acompanhamento de engenheiros, arquitetos e fornecedores qualificados, respeitando prazos, padrões técnicos e boas práticas de engenharia. Você receberá atualizações periódicas sobre o andamento da obra, garantindo total visibilidade e segurança sobre o progresso. O foco é entregar um imóvel funcional, com acabamento de alto padrão e pronto para operação hoteleira.'
  },
  {
    id: 'integracao',
    fase: 'Fase 3',
    nome: 'Integração à operação',
    image: fase3Img,
    hoverText: 'Após a entrega da obra, o seu chalé passa a fazer parte da operação oficial do ARTGREEN. Isso significa que ele será administrado por uma equipe especializada que cuida de todas as etapas da gestão hoteleira, como: divulgação em plataformas, reservas, atendimento aos hóspedes, manutenção corretiva, lavanderia e limpeza. Você não precisa se envolver na operação: o processo é automatizado, transparente e gerenciado por profissionais do setor.'
  },
  {
    id: 'rentabilidade',
    fase: 'Fase 4',
    nome: 'Rentabilidade',
    image: fase4Img,
    hoverText: 'Mensalmente, você receberá rendimentos proporcionais ao número de hospedagens no seu chalé. O modelo de negócio é transparente: quanto maior a ocupação, maior seu ganho. Como o ARTGREEN já conta com estrutura consolidada, marketing ativo e operação profissional, o potencial de retorno é real — com estimativas de até 18% ao ano, dependendo da performance e época do ano.'
  },
  {
    id: 'uso-pessoal',
    fase: 'Fase 5',
    nome: 'Uso pessoal',
    image: fase5Img,
    hoverText: 'Mesmo sendo um investimento com foco em rentabilidade, seu chalé também é seu refúgio particular. Você pode utilizá-lo de forma planejada, conforme o plano escolhido: sem uso pessoal ou com até 4, 8 ou 12 finais de semana por ano. Cada plano possui uma taxa de administração proporcional à frequência de uso — quanto menor o uso, menor a taxa. Assim, você aproveita a experiência de descanso com liberdade e tranquilidade, sabendo que tudo está sob gestão especializada. Mais que um imóvel, o GreenLand é um estilo de vida que une retorno financeiro e momentos únicos com quem você ama.'
  },
];

const HowItWorks = () => {
  const [activeId, setActiveId] = useState(phases[0].id);
  const [hoveredId, setHoveredId] = useState(null);

  // Helper for crossfade
  const getBgOpacity = (id) => (activeId === id ? 'opacity-100' : 'opacity-0');

  return (
    <section id="featured-cottages" className="relative w-full h-[600px] lg:h-[700px] overflow-hidden overflow-x-hidden">
      {/* Backgrounds crossfade */}
      {phases.map((phase) => (
        <img
          key={phase.id}
          src={phase.image}
          alt={phase.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${getBgOpacity(phase.id)}`}
          style={{ zIndex: 1 }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Desktop: 5 colunas interativas */}
      <div className="hidden md:flex relative z-20 h-[600px] lg:h-[700px] w-full">
        {phases.map((phase, idx) => (
          <div
            key={phase.id}
            className="group cursor-pointer relative transition-all duration-300 border-r border-white/20 flex flex-col items-center h-full flex-1 min-w-0 overflow-hidden"
            onMouseEnter={() => { setActiveId(phase.id); setHoveredId(phase.id); }}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Barra animada */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 bg-background transition-all duration-500 ${hoveredId === phase.id ? 'h-20 lg:h-24' : 'h-0'}`}/>
            {/* Top white overlay on hover */}
            <div className={`absolute inset-x-0 top-0 bg-white transition-all duration-500 ease-in-out z-10 ${hoveredId === phase.id ? 'h-24' : 'h-0'}`}></div>
            {/* Título em duas linhas, z-20 to be above overlay */}
            <div className={`absolute inset-0 flex flex-col items-center justify-start pt-6 lg:pt-8 z-20 w-full`}>
              <div className={`text-base lg:text-lg font-light text-center px-4 transition-colors duration-300 ${hoveredId === phase.id ? 'text-black' : 'text-white'}`}>{phase.fase}</div>
              <div className={`text-base lg:text-lg font-light text-center px-4 transition-colors duration-300 ${hoveredId === phase.id ? 'text-black' : 'text-white'}`}>{phase.nome}</div>
              {/* Hover Text */}
              {hoveredId === phase.id && (
                <div className="text-base text-white mt-4 px-4 text-center max-w-xs font-normal">
                  {phase.hoverText}
                </div>
              )}
            </div>
            {/* Gradiente inferior */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent h-32 z-0" />
          </div>
        ))}
      </div>

      {/* Mobile: grid 3+2 com click para trocar background */}
      <div className="md:hidden relative z-20 flex flex-col justify-end h-full p-6">
        {/* Texto da fase ativa */}
        <div className="text-white text-center mb-6 px-2">
          <h3 className="font-heading text-xl font-bold mb-2">
            {phases.find(p => p.id === activeId)?.fase} — {phases.find(p => p.id === activeId)?.nome}
          </h3>
          <p className="text-white/80 text-xs leading-relaxed line-clamp-4">
            {phases.find(p => p.id === activeId)?.hoverText}
          </p>
        </div>
        {/* Grid: 3 na linha de cima */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {phases.slice(0, 3).map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActiveId(phase.id)}
              className={`py-3 px-2 rounded-xl text-center transition-all duration-300 ${
                activeId === phase.id
                  ? 'bg-white text-[#1a2418] shadow-lg'
                  : 'bg-white/20 text-white backdrop-blur-sm'
              }`}
            >
              <div className="text-xs font-semibold">{phase.fase}</div>
              <div className="text-[10px] font-normal mt-0.5 leading-tight">{phase.nome}</div>
            </button>
          ))}
        </div>
        {/* Grid: 2 na linha de baixo */}
        <div className="grid grid-cols-2 gap-2">
          {phases.slice(3).map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActiveId(phase.id)}
              className={`py-3 px-2 rounded-xl text-center transition-all duration-300 ${
                activeId === phase.id
                  ? 'bg-white text-[#1a2418] shadow-lg'
                  : 'bg-white/20 text-white backdrop-blur-sm'
              }`}
            >
              <div className="text-xs font-semibold">{phase.fase}</div>
              <div className="text-[10px] font-normal mt-0.5 leading-tight">{phase.nome}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
