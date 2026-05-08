import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { pdfjs } from 'react-pdf'
import pdfUrl from '../assets/Masterplan-Greenland.pdf?url'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Configure pdf.js worker.
// `pdfjs-dist` is pinned to the exact version that `react-pdf` bundles
// (see package.json), so this Vite-resolved URL serves a worker whose
// version always matches the API. No CDN required.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

// Lazy-load Document/Page to keep them out of the initial chunk
const Document = lazy(() =>
  import('react-pdf').then((m) => ({ default: m.Document })),
)
const Page = lazy(() =>
  import('react-pdf').then((m) => ({ default: m.Page })),
)

interface MasterplanPDFViewerProps {
  /** Optional max height applied to the rendered page (e.g. '80dvh'). */
  maxHeight?: string
}

/**
 * Inline PDF viewer for the Masterplan, designed to be embedded inside
 * a `react-zoom-pan-pinch` <TransformComponent> or a fullscreen modal.
 * Renders page 1 as a high-resolution canvas that responds to container width.
 */
export default function MasterplanPDFViewer({
  maxHeight = '80dvh',
}: MasterplanPDFViewerProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = (): void => setWidth(el.clientWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center bg-[#1d2517]"
      style={{ maxHeight, minHeight: 320 }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Suspense
        fallback={
          <div className="text-white/70 text-sm py-16">
            Carregando mapa...
          </div>
        }
      >
        <Document
          file={pdfUrl}
          loading={
            <div className="text-white/70 text-sm py-16">
              Carregando mapa...
            </div>
          }
          error={
            <div className="text-white/70 text-sm py-16">
              Não foi possível carregar o mapa.
            </div>
          }
        >
          {width > 0 && (
            <Page
              pageNumber={1}
              width={width}
              // Render the canvas bitmap at ~4x the CSS size so that zooming
              // up via react-zoom-pan-pinch keeps the image crisp.
              devicePixelRatio={Math.max(
                typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
                4,
              )}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          )}
        </Document>
      </Suspense>
    </div>
  )
}
