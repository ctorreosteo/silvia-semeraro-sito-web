import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoConfigForPathname, getSeoSiteName, type SeoConfig } from './seoConfig'

function upsertMetaName(name: string, content: string): void {
  const selector = `meta[name="${name}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function removeMetaName(name: string): void {
  const selector = `meta[name="${name}"]`
  const el = document.head.querySelector(selector)
  if (el) {
    el.remove()
  }
}

function upsertMetaProperty(property: string, content: string): void {
  const selector = `meta[property="${property}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLinkRel(rel: string, href: string): void {
  const selector = `link[rel="${rel}"]`
  let el = document.head.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id: string, value: unknown): void {
  const selector = `script#${id}`
  let el = document.head.querySelector(selector) as HTMLScriptElement | null
  const json = JSON.stringify(value)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    el.textContent = json
    document.head.appendChild(el)
    return
  }
  el.textContent = json
}

function buildJsonLd(config: SeoConfig, url: string, siteUrl: string): unknown {
  const logoUrl = `${siteUrl}/Logo.png`

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: getSeoSiteName(),
      url,
      image: logoUrl,
      jobTitle: 'Mental Coach',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: config.title,
      description: config.description,
      url,
      isPartOf: {
        '@type': 'WebSite',
        name: getSeoSiteName(),
        url: siteUrl,
      },
    },
  ]
}

function normalizeJsonLd(value: unknown | unknown[] | undefined): unknown[] {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

export function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    // In SSR/edge cases document can be undefined.
    if (typeof window === 'undefined') return

    const config = getSeoConfigForPathname(location.pathname)
    const origin = window.location.origin
    const pageUrl = `${origin}${location.pathname}`
    const siteUrl = origin

    document.title = config.title

    upsertMetaName('description', config.description)
    upsertMetaName('author', getSeoSiteName())
    if (config.keywords) {
      upsertMetaName('keywords', config.keywords)
    } else {
      removeMetaName('keywords')
    }
    upsertMetaName('language', 'it-IT')

    upsertMetaProperty('og:title', config.title)
    upsertMetaProperty('og:description', config.description)
    upsertMetaProperty('og:type', 'website' === config.ogType ? 'website' : 'article')
    upsertMetaProperty('og:locale', 'it_IT')
    upsertMetaProperty('og:url', pageUrl)
    upsertMetaProperty('og:site_name', getSeoSiteName())

    upsertMetaProperty('og:image', `${origin}${config.ogImage.src}`)
    upsertMetaProperty('og:image:alt', config.ogImage.alt)

    upsertMetaName('twitter:card', 'summary_large_image')
    upsertMetaName('twitter:title', config.title)
    upsertMetaName('twitter:description', config.description)
    upsertMetaName('twitter:image', `${origin}${config.ogImage.src}`)
    upsertMetaName('twitter:image:alt', config.ogImage.alt)

    upsertMetaName('robots', config.robots ?? 'index,follow')

    upsertLinkRel('canonical', pageUrl)

    const baseJsonLd = buildJsonLd(config, pageUrl, siteUrl)
    const routeJsonLd = normalizeJsonLd(config.jsonLd)
    upsertJsonLd('seo-json-ld', [...normalizeJsonLd(baseJsonLd), ...routeJsonLd])
  }, [location.pathname, location.search])

  return null
}

