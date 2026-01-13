import { useEffect } from 'react'

const SEO = ({ 
  title = "Couvreur Le Mans 72 - JORY CHARPENTE COUVERTURE | Réparation Toiture Sarthe",
  description = "Couvreur professionnel au Mans (72). JORY CHARPENTE COUVERTURE : réparation toiture, charpente, zinguerie, fenêtres de toit. Intervention rapide 24/7, devis gratuit.",
  keywords = "couvreur le mans, couvreur sarthe, charpentier couvreur le mans, réparation toiture le mans, toiture le mans, couvreur 72",
  ogImage = "/images/LOGO.png",
  canonicalUrl = "",
  ogType = "website"
}) => {
  useEffect(() => {
    const baseUrl = 'https://jory-couverture.com'
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`
    
    // Normaliser l'URL canonique : enlever trailing slash (sauf pour la racine), enlever paramètres de requête
    let normalizedPath = window.location.pathname
    // Enlever le trailing slash sauf pour la racine
    if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
      normalizedPath = normalizedPath.slice(0, -1)
    }
    // S'assurer que la racine est bien '/'
    if (normalizedPath === '') {
      normalizedPath = '/'
    }
    
    const fullCanonicalUrl = canonicalUrl || `${baseUrl}${normalizedPath}`

    // Mettre à jour le title
    document.title = title

    // Fonction helper améliorée
    const updateOrCreateMeta = (propertyOrName, value, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attr}="${propertyOrName}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, propertyOrName)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', value)
    }

    // Meta description
    updateOrCreateMeta('description', description)

    // Meta keywords
    updateOrCreateMeta('keywords', keywords)

    // Open Graph - Tags améliorés
    updateOrCreateMeta('og:title', title, true)
    updateOrCreateMeta('og:description', description, true)
    updateOrCreateMeta('og:image', fullOgImage, true)
    updateOrCreateMeta('og:url', fullCanonicalUrl, true)
    updateOrCreateMeta('og:type', ogType, true)
    updateOrCreateMeta('og:locale', 'fr_FR', true)
    updateOrCreateMeta('og:site_name', 'JORY CHARPENTE COUVERTURE', true)
    
    // Open Graph Image supplémentaire
    let ogImageWidth = document.querySelector('meta[property="og:image:width"]')
    if (!ogImageWidth) {
      ogImageWidth = document.createElement('meta')
      ogImageWidth.setAttribute('property', 'og:image:width')
      ogImageWidth.setAttribute('content', '1200')
      document.head.appendChild(ogImageWidth)
    }
    
    let ogImageHeight = document.querySelector('meta[property="og:image:height"]')
    if (!ogImageHeight) {
      ogImageHeight = document.createElement('meta')
      ogImageHeight.setAttribute('property', 'og:image:height')
      ogImageHeight.setAttribute('content', '630')
      document.head.appendChild(ogImageHeight)
    }
    
    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]')
    if (!ogImageAlt) {
      ogImageAlt = document.createElement('meta')
      ogImageAlt.setAttribute('property', 'og:image:alt')
      ogImageAlt.setAttribute('content', title)
      document.head.appendChild(ogImageAlt)
    }

    // Twitter Card - Tags complets
    updateOrCreateMeta('twitter:card', 'summary_large_image', true)
    updateOrCreateMeta('twitter:title', title, true)
    updateOrCreateMeta('twitter:description', description, true)
    updateOrCreateMeta('twitter:image', fullOgImage, true)
    updateOrCreateMeta('twitter:image:alt', title, true)
    
    // Twitter Site (optionnel, à remplacer si vous avez un compte Twitter)
    let twitterSite = document.querySelector('meta[property="twitter:site"]')
    if (!twitterSite) {
      twitterSite = document.createElement('meta')
      twitterSite.setAttribute('property', 'twitter:site')
      twitterSite.setAttribute('content', '@jorycouverture')
      document.head.appendChild(twitterSite)
    }

    // Meta tags supplémentaires pour le SEO
    updateOrCreateMeta('author', 'JORY CHARPENTE COUVERTURE')
    updateOrCreateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    updateOrCreateMeta('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    
    // Geo tags
    updateOrCreateMeta('geo.region', 'FR-72')
    updateOrCreateMeta('geo.placename', 'Le Mans')
    updateOrCreateMeta('geo.position', '48.0061;0.1996')
    updateOrCreateMeta('ICBM', '48.0061, 0.1996')

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', fullCanonicalUrl)
    } else {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      canonical.setAttribute('href', fullCanonicalUrl)
      document.head.appendChild(canonical)
    }

    // Alternate hreflang (pour le référencement international)
    let hreflang = document.querySelector('link[rel="alternate"][hreflang="fr"]')
    if (!hreflang) {
      hreflang = document.createElement('link')
      hreflang.setAttribute('rel', 'alternate')
      hreflang.setAttribute('hreflang', 'fr')
      hreflang.setAttribute('href', fullCanonicalUrl)
      document.head.appendChild(hreflang)
    }
    
    let hreflangXDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]')
    if (!hreflangXDefault) {
      hreflangXDefault = document.createElement('link')
      hreflangXDefault.setAttribute('rel', 'alternate')
      hreflangXDefault.setAttribute('hreflang', 'x-default')
      hreflangXDefault.setAttribute('href', fullCanonicalUrl)
      document.head.appendChild(hreflangXDefault)
    }

  }, [title, description, keywords, ogImage, canonicalUrl, ogType])

  return null
}

export default SEO

