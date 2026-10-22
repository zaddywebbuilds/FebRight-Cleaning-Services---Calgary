import { useEffect } from 'react'

const SITE_NAME = 'FebRight Cleaning Services'

/**
 * The production domain is still unconfirmed, so canonical and og:url resolve
 * against wherever the site is actually served unless VITE_SITE_URL is set.
 * Pointing them at a host that does not serve this content risks the live
 * pages being dropped from the index.
 */
const CONFIGURED_SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/+$/, '')

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

interface SeoProps {
  /** Page title without the brand suffix. */
  title: string
  description: string
  /** Route path, e.g. "/services". Use "/" for the home page. */
  path: string
  /** Home page carries the brand alone rather than "Brand — Brand". */
  brandOnly?: boolean
  /** Keep thin or non-canonical pages (404, etc.) out of the index. */
  noindex?: boolean
}

export default function Seo({ title, description, path, brandOnly = false, noindex = false }: SeoProps) {
  useEffect(() => {
    const fullTitle = brandOnly ? title : `${title} | ${SITE_NAME}`
    document.title = fullTitle

    const base = import.meta.env.BASE_URL.replace(/\/+$/, '')
    const origin = CONFIGURED_SITE_URL ?? window.location.origin
    const url = `${origin}${base}${path === '/' ? '/' : path}`

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    upsertCanonical(url)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:type', 'website')
    // Social scrapers reject relative paths, and the final domain is unknown,
    // so build an absolute URL from wherever the site is being served.
    upsertMeta('property', 'og:image', `${origin}${base}/assets/gallery/hero-living-room.webp`)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
  }, [title, description, path, brandOnly, noindex])

  return null
}
