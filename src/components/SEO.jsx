import { useEffect } from 'react'

const SEO = ({ 
  title = "Couvreur Le Mans 72 - JORY CHARPENTE COUVERTURE | Réparation Toiture Sarthe",
  description = "Couvreur professionnel au Mans (72). JORY CHARPENTE COUVERTURE : réparation toiture, charpente, zinguerie, fenêtres de toit. Intervention rapide 24/7, devis gratuit.",
  keywords = "couvreur le mans, couvreur sarthe, charpentier couvreur le mans, réparation toiture le mans, toiture le mans, couvreur 72",
  ogImage = "/images/LOGO.png",
  canonicalUrl = ""
}) => {
  useEffect(() => {
    // Mettre à jour le title
    document.title = title

    // Mettre à jour la meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', description)
      document.head.appendChild(metaDescription)
    }

    // Mettre à jour les keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    } else {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      metaKeywords.setAttribute('content', keywords)
      document.head.appendChild(metaKeywords)
    }

    // Mettre à jour Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', description)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', `https://jory-couverture.com${ogImage}`)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl && canonicalUrl) ogUrl.setAttribute('content', canonicalUrl)

    // Mettre à jour Twitter Card
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', title)

    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterDescription) twitterDescription.setAttribute('content', description)

    // Ajouter canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl)
      } else {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        canonical.setAttribute('href', canonicalUrl)
        document.head.appendChild(canonical)
      }
    }
  }, [title, description, keywords, ogImage, canonicalUrl])

  return null
}

export default SEO

