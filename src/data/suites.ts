import imgLago from '../assets/IMG_0099.webp'
import imgSuperior from '../assets/IMG_2511.webp'

// =============================================================================
// ATENÇÃO — VALORES PLACEHOLDER
// Preços, diárias, taxas de ocupação e repasse abaixo são provisórios e servem
// apenas para montar a página. Substituir pela tabela comercial oficial das
// suítes antes de divulgar. Fotos: trocar pelas imagens reais das acomodações.
// =============================================================================

export interface Suite {
  id: string
  name: string
  badge?: string
  tagline: string
  image: string
  imageAlt: string
  area: string
  guests: string
  cash: string
  installment: string
  averageDaily: string
  features: string[]
}

export const suites: Suite[] = [
  {
    id: 'suite-lago',
    name: 'Suíte Lago',
    badge: 'Mais procurada',
    tagline:
      'Pé na grama, vista direta para o lago e varanda privativa para ver o sol se pôr na Serra.',
    image: imgLago,
    imageAlt: 'Suíte Lago do Art Green Boutique Hotel, à beira do lago do Greenland',
    area: '38 m² privativos',
    guests: 'Até 3 hóspedes',
    cash: 'R$ 420.000 à vista',
    installment: 'ou R$ 465.000 parcelado em até 60x',
    averageDaily: 'Diária média de R$ 780 na alta temporada',
    features: [
      'Varanda privativa com vista para o lago',
      'Cama king, ar-condicionado e frigobar',
      'Mobiliada e decorada, pronta para receber hóspedes',
      'Escritura registrada em cartório no seu nome',
    ],
  },
  {
    id: 'suite-superior',
    name: 'Suíte Superior',
    tagline:
      'Conforto de hotel boutique no coração do condomínio, a poucos passos do Art Cucina e do lazer.',
    image: imgSuperior,
    imageAlt: 'Suíte Superior do Art Green Boutique Hotel, dentro do condomínio Greenland',
    area: '32 m² privativos',
    guests: 'Até 2 hóspedes',
    cash: 'R$ 340.000 à vista',
    installment: 'ou R$ 375.000 parcelado em até 60x',
    averageDaily: 'Diária média de R$ 590 na alta temporada',
    features: [
      'Vista para a Mata Atlântica e para as montanhas',
      'Cama queen, ar-condicionado e frigobar',
      'Mobiliada e decorada, pronta para receber hóspedes',
      'Escritura registrada em cartório no seu nome',
    ],
  },
]

export interface IncomeScenario {
  label: string
  occupancy: string
  daily: string
  monthly: string
  desc: string
}

// Simulação sobre uma Suíte Superior, com repasse de 65% da diária ao proprietário.
export const incomeScenarios: IncomeScenario[] = [
  {
    label: 'Conservador',
    occupancy: '35% de ocupação',
    daily: 'Diária média R$ 550',
    monthly: 'R$ 3.750',
    desc: 'Baixa temporada, sem feriados prolongados no mês.',
  },
  {
    label: 'Moderado',
    occupancy: '50% de ocupação',
    daily: 'Diária média R$ 620',
    monthly: 'R$ 6.000',
    desc: 'Média do ano, considerando finais de semana cheios.',
  },
  {
    label: 'Alta temporada',
    occupancy: '80% de ocupação',
    daily: 'Diária média R$ 850',
    monthly: 'R$ 13.200',
    desc: 'Julho, feriados, Réveillon e temporada de inverno na Serra.',
  },
]

export const SUITES_DISCLAIMER =
  'Simulação ilustrativa com valores de referência, calculada sobre 65% da diária repassada ao proprietário e descontadas as despesas de operação. Não constitui promessa ou garantia de rentabilidade.'

export const OWNER_SHARE = '65% da diária'
export const FREE_NIGHTS = '30 diárias por ano'
