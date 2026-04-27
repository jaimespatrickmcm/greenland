import { Helmet } from 'react-helmet-async'
import { SEO_CONFIG } from './seoConfig'
import type { SEOProps } from './seoTypes'

export function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  noIndex = false,
  noFollow = false,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  ogType = 'website',
  ogLocale = SEO_CONFIG.defaultLocale,
  twitterCard = 'summary_large_image',
  twitterSite = SEO_CONFIG.twitterSite,
  twitterCreator = SEO_CONFIG.twitterCreator,
  twitterImage,
  twitterImageAlt,
  structuredData,
  hreflang = [],
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
}: SEOProps): React.JSX.Element {
  const fullTitle = title.includes(SEO_CONFIG.titleSuffix)
    ? title
    : `${title}${SEO_CONFIG.titleSeparator}${SEO_CONFIG.titleSuffix}`

  const canonicalUrl = canonical ?? `${SEO_CONFIG.siteUrl}/`

  const resolvedOgImage = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${SEO_CONFIG.siteUrl}${ogImage}`
    : `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultOgImage}`

  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow',
  ].join(', ')

  const structuredDataArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : []

  return (
    <Helmet>
      {/* Básico */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta
        property="og:image:alt"
        content={ogImageAlt ?? SEO_CONFIG.defaultOgImageAlt}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={ogTitle ?? title} />
      <meta
        name="twitter:description"
        content={ogDescription ?? description}
      />
      <meta name="twitter:image" content={twitterImage ?? resolvedOgImage} />
      <meta
        name="twitter:image:alt"
        content={
          twitterImageAlt ?? ogImageAlt ?? SEO_CONFIG.defaultOgImageAlt
        }
      />

      {/* Article */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {ogType === 'article' &&
        tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* hreflang */}
      {hreflang.map(({ hreflang: lang, href }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={href} />
      ))}

      {/* JSON-LD */}
      {structuredDataArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
