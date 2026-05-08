import { useEffect, useRef, useState, lazy, Suspense, useCallback } from 'react'
import { pdfjs } from 'react-pdf'
import pdfUrl from '../assets/Masterplan-Greenland.pdf?url'
// Import the worker as an asset URL so Vite emits it to `dist/assets` with
// a content hash and the correct JS MIME type in production. Using
// `new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url)` works in
// dev but in prod the file is not emitted, causing the SPA fallback to return
// `text/html` and breaking the worker module load.
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl

// Lazy-load Document/Page to keep them out of the initial chunk
const Document = lazy(() =>
  import('react-pdf').then((m) => ({ default: m.Document })),
)
const Page = lazy(() =>
  import('react-pdf').then((m) => ({ default: m.Page })),
)

interface MasterplanPDFViewerProps {
  /** Height applied to the viewer (e.g. '80dvh' or '100dvh'). */
  height?: string
}

interface PdfDoc {
  numPages: number
  getPage: (n: number) => Promise<{
    getViewport: (opts: { scale: number }) => { width: number; height: number }
  }>
}

/**
 * Inline PDF viewer for the Masterplan. Measures the container and the
 * page's intrinsic aspect ratio so the page is rendered to fit fully
 * within both width and height (no cropping).
 */
export default function MasterplanPDFViewer({
  height = '80dvh',
}: MasterplanPDFViewerProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 })
  const [pageRatio, setPageRatio] = useState<number | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = (): void => setSize({ w: el.clientWidth, h: el.clientHeight })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const onDocumentLoad = useCallback(async (pdf: PdfDoc) => {
    try {
      const page = await pdf.getPage(1)
      const viewport = page.getViewport({ scale: 1 })
      setPageRatio(viewport.width / viewport.height)
    } catch {
      /* ignore */
    }
  }, [])

  // Compute a width that makes the page fit BOTH the container's width
  // and height, so it never gets cropped on first render.
  let renderWidth = 0
  if (size.w > 0 && size.h > 0 && pageRatio) {
    const widthFromHeight = size.h * pageRatio
    renderWidth = Math.min(size.w, widthFromHeight)
  }

  return (
    <div
      ref={containerRef}
      className="masterplan-pdf-viewer relative w-full flex items-center justify-center bg-[#1d2517]"
      style={{ height, minHeight: 320 }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Spinner sits behind the canvas and is always visible until the
          rendered page paints over it. */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#1d2517]">
        <MapLoading />
      </div>

      <Suspense fallback={null}>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoad}
          className="relative z-10 w-full h-full flex items-center justify-center"
          loading={null}
          error={
            <div className="relative z-10 text-white/70 text-sm py-16">
              Não foi possível carregar o mapa.
            </div>
          }
        >
          {renderWidth > 0 && (
            <Page
              pageNumber={1}
              width={renderWidth}
              // Render the canvas bitmap at ~4x the CSS size so that zooming
              // up via react-zoom-pan-pinch keeps the image crisp.
              devicePixelRatio={Math.max(
                typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
                4,
              )}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={null}
            />
          )}
        </Document>
      </Suspense>
    </div>
  )
}

function MapLoading(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-white/80">
      <span
        className="inline-block w-10 h-10 rounded-full border-4 border-white/20 border-t-white animate-spin"
        aria-hidden="true"
      />
      <span className="text-sm font-medium">Carregando mapa...</span>
    </div>
  )
}
