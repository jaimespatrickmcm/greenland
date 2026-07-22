export type LotStatus = 'available' | 'sold' | 'reserved'

export interface LotMedia {
  type: 'image' | 'video'
  src: string
  alt: string
}

export interface Lot {
  id: string
  label: string
  status: LotStatus
  area: string
  price?: string
  description: string
  features: string[]
  media: LotMedia[]
  position: { x: number; y: number }
}

// Dados de exemplo, posicoes aproximadas sobre a imagem do masterplan
// Para mapear posicoes reais: adicione um onClick temporario na imagem que loga (e.clientX/width*100, e.clientY/height*100)
export const lots: Lot[] = [
  {
    id: 'L001',
    label: 'Terreno 1',
    status: 'available',
    area: '450m²',
    price: 'A partir de R$ 200.000',
    description: 'Terreno plano com vista privilegiada para a Serra dos Órgãos. Posição solar favorável, ideal para construção imediata.',
    features: ['Vista para montanha', 'Terreno plano', 'Face norte', 'Próximo à entrada'],
    media: [
      { type: 'image', src: '/lots/L001/foto1.jpg', alt: 'Vista frontal do terreno 1' },
      { type: 'image', src: '/lots/L001/foto2.jpg', alt: 'Vista lateral do terreno 1' },
    ],
    position: { x: 30, y: 35 },
  },
  {
    id: 'L002',
    label: 'Terreno 2',
    status: 'available',
    area: '520m²',
    price: 'A partir de R$ 230.000',
    description: 'Lote amplo em área arborizada, com privacidade e contato direto com a Mata Atlântica.',
    features: ['Área arborizada', 'Privacidade', 'Lote amplo', 'Mata Atlântica'],
    media: [
      { type: 'image', src: '/lots/L002/foto1.jpg', alt: 'Vista do terreno 2' },
    ],
    position: { x: 45, y: 28 },
  },
  {
    id: 'L003',
    label: 'Terreno 3',
    status: 'reserved',
    area: '380m²',
    price: 'Consulte',
    description: 'Terreno em localização central do condomínio, próximo às áreas de lazer e ao restaurante Art Cucina.',
    features: ['Localização central', 'Próximo ao lazer', 'Fácil acesso'],
    media: [
      { type: 'image', src: '/lots/L003/foto1.jpg', alt: 'Vista do terreno 3' },
    ],
    position: { x: 55, y: 50 },
  },
  {
    id: 'L004',
    label: 'Terreno 4',
    status: 'sold',
    area: '490m²',
    description: 'Lote vendido.',
    features: [],
    media: [],
    position: { x: 65, y: 40 },
  },
  {
    id: 'L005',
    label: 'Terreno 5',
    status: 'available',
    area: '410m²',
    price: 'A partir de R$ 210.000',
    description: 'Terreno com topografia suave e vista panorâmica. Excelente insolação durante todo o dia.',
    features: ['Vista panorâmica', 'Topografia suave', 'Boa insolação', 'Rua tranquila'],
    media: [
      { type: 'image', src: '/lots/L005/foto1.jpg', alt: 'Vista do terreno 5' },
      { type: 'video', src: '/lots/L005/video.mp4', alt: 'Vídeo do terreno 5' },
    ],
    position: { x: 38, y: 60 },
  },
]
