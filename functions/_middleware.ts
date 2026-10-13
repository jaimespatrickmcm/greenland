/**
 * Site fora do ar: redireciona qualquer URL para "/".
 *
 * Passam só o que a página de indisponível precisa para renderizar (bundle,
 * logo e favicon — que o Vite emite em /assets/ com hash —, fontes e robots).
 * O resto — rotas antigas, sitemap, imagens, /api — recebe 302 para a raiz.
 * A raiz responde 503 com Retry-After, que é o sinal correto para buscadores
 * de "indisponível por enquanto", e sem cache para o site voltar na hora
 * quando este arquivo for removido.
 */

interface MiddlewareContext {
  request: Request
  next: () => Promise<Response>
}

const PASSTHROUGH = [/^\/assets\//, /^\/fonts\//, /^\/robots\.txt$/]

export const onRequest = async ({ request, next }: MiddlewareContext): Promise<Response> => {
  const url = new URL(request.url)
  const { pathname } = url

  if (PASSTHROUGH.some((pattern) => pattern.test(pathname))) {
    return next()
  }

  if (pathname !== '/' || url.search) {
    return Response.redirect(`${url.origin}/`, 302)
  }

  const response = await next()
  const headers = new Headers(response.headers)
  headers.set('Cache-Control', 'no-store')
  headers.set('Retry-After', '86400')
  headers.set('X-Robots-Tag', 'noindex, nofollow')
  return new Response(response.body, { status: 503, headers })
}
