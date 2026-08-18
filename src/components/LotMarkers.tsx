import { useState } from 'react'
import type { Lot } from '../data/lots'

interface LotMarkersProps {
  lots: Lot[]
  onSelectLot: (lot: Lot) => void
}

const statusColors: Record<string, string> = {
  available: 'bg-[#4a6838]',
  sold: 'bg-gray-500',
  reserved: 'bg-orange-500',
}

export default function LotMarkers({ lots, onSelectLot }: LotMarkersProps): React.JSX.Element {
  const [hoveredLot, setHoveredLot] = useState<string | null>(null)

  return (
    <div className="absolute inset-0">
      {lots.map((lot) => (
        <button
          key={lot.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 group z-[5]"
          style={{ left: `${lot.position.x}%`, top: `${lot.position.y}%` }}
          onClick={(e) => {
            e.stopPropagation()
            if (lot.status !== 'sold') onSelectLot(lot)
          }}
          onMouseEnter={() => setHoveredLot(lot.id)}
          onMouseLeave={() => setHoveredLot(null)}
          aria-label={`${lot.label}, ${lot.area}, ${lot.status === 'available' ? 'Disponível' : lot.status === 'reserved' ? 'Reservado' : 'Vendido'}`}
        >
          {/* Marker dot */}
          <span
            className={`lot-marker block w-5 h-5 ${statusColors[lot.status]} shadow-lg transition-transform ${
              lot.status === 'available' ? 'lot-pulse cursor-pointer hover:scale-125' : 'opacity-60 cursor-default'
            }`}
          />

          {/* Tooltip */}
          {hoveredLot === lot.id && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-[#273020] text-xs font-semibold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap pointer-events-none">
              <p className="font-bold">{lot.label}</p>
              <p className="text-gray-500">{lot.area}</p>
              {lot.status === 'available' && lot.price && (
                <p className="text-[#4a6838]">{lot.price}</p>
              )}
              {lot.status === 'sold' && <p className="text-gray-400">Vendido</p>}
              {lot.status === 'reserved' && <p className="text-orange-500">Reservado</p>}
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white" />
            </div>
          )}
        </button>
      ))}
    </div>
  )
}
