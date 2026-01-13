import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

const Layout = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // SEO par page avec données structurées améliorées
  const getSEOProps = () => {
    const baseUrl = 'https://jory-couverture.com'
    // Normaliser le pathname : enlever trailing slash sauf pour la racine
    let normalizedPath = location.pathname
    if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
      normalizedPath = normalizedPath.slice(0, -1)
    }
    if (normalizedPath === '') {
      normalizedPath = '/'
    }
    const currentUrl = `${baseUrl}${normalizedPath}`

    switch (location.pathname) {
      case '/':
        return {
          title: 'Couvreur Le Mans 72 - JORY CHARPENTE COUVERTURE | Réparation Toiture Sarthe',
          description: 'Couvreur Le Mans : JORY CHARPENTE COUVERTURE, votre artisan couvreur professionnel au Mans (72). Réparation toiture, charpente, zinguerie, fenêtres de toit. Intervention rapide 24/7, devis gratuit couvreur Le Mans. Spécialiste couverture Sarthe depuis Changé.',
          keywords: 'couvreur le mans, couvreur au mans, couvreur sarthe, charpentier couvreur le mans, réparation toiture le mans, toiture le mans, couvreur 72, zinguerie le mans, fenêtres de toit le mans, démoussage toiture le mans, charpente le mans, couvreur changé, couvreur allonnes, artisan couvreur le mans, entreprise couvreur le mans, devis couvreur le mans, couvreur le mans urgence, couvreur professionnel le mans, réparation toiture urgente le mans, devis toiture le mans',
          canonicalUrl: currentUrl
        }
      case '/services':
        return {
          title: 'Services Couvreur Le Mans - Charpente, Couverture, Zinguerie | JORY',
          description: 'Services de couvreur au Mans : charpente, couverture, zinguerie, fenêtres de toit, démoussage, étanchéité. Devis gratuit. Intervention rapide dans toute la Sarthe 72.',
          keywords: 'services couvreur le mans, charpente le mans, couverture le mans, zinguerie le mans, fenêtres de toit le mans, démoussage le mans, étanchéité le mans, pose toiture le mans, rénovation toiture le mans',
          canonicalUrl: currentUrl
        }
      case '/contact':
        return {
          title: 'Contact Couvreur Le Mans - Devis Gratuit 24/7 | JORY CHARPENTE',
          description: 'Contactez votre couvreur au Mans. Devis gratuit sous 24h pour réparation toiture, charpente, zinguerie. Intervention urgente 24h/24 au 07 50 39 83 68.',
          keywords: 'contact couvreur le mans, devis toiture le mans, devis gratuit couvreur, couvreur urgence le mans, téléphone couvreur le mans',
          canonicalUrl: currentUrl
        }
      case '/realisations':
        return {
          title: 'Réalisations Couvreur Le Mans - Galerie Photos Toiture | JORY',
          description: 'Découvrez nos réalisations de couvreur au Mans : rénovation toiture, charpente, zinguerie. Photos avant/après de nos travaux en Sarthe 72.',
          keywords: 'réalisations couvreur le mans, travaux toiture le mans, photos couverture le mans, rénovation toiture sarthe, exemples travaux couvreur le mans',
          canonicalUrl: currentUrl
        }
      case '/avis':
        return {
          title: 'Avis Clients Couvreur Le Mans | JORY CHARPENTE',
          description: 'Lisez les avis de nos clients couvreur au Mans. Témoignages sur nos travaux de toiture, charpente et zinguerie en Sarthe.',
          keywords: 'avis couvreur le mans, témoignages couvreur le mans, avis clients toiture le mans, avis jory charpente couverture',
          canonicalUrl: currentUrl
        }
      case '/a-propos':
        return {
          title: 'À Propos - Couvreur Le Mans Depuis Changé | JORY CHARPENTE COUVERTURE',
          description: 'Découvrez JORY CHARPENTE COUVERTURE, votre couvreur expert au Mans et dans toute la Sarthe. Artisan qualifié en charpente, couverture et zinguerie.',
          keywords: 'à propos couvreur le mans, artisan couvreur sarthe, entreprise couverture le mans, histoire jory charpente couverture',
          canonicalUrl: currentUrl
        }
      default:
        // Gestion des pages de réalisations individuelles
        if (location.pathname.startsWith('/realisations/')) {
          const realizationId = location.pathname.split('/realisations/')[1]
          return {
            title: `Réalisation ${realizationId} - Couvreur Le Mans | JORY CHARPENTE`,
            description: `Découvrez cette réalisation de couvreur au Mans : ${realizationId}. Travaux de toiture, charpente ou zinguerie réalisés en Sarthe par JORY CHARPENTE COUVERTURE.`,
            keywords: `réalisation ${realizationId}, travaux toiture le mans, couvreur le mans`,
            canonicalUrl: currentUrl
          }
        }
        return {
          title: 'Couvreur Le Mans 72 - JORY CHARPENTE COUVERTURE',
          description: 'Couvreur professionnel au Mans et dans toute la Sarthe. Réparation toiture, charpente, zinguerie.',
          keywords: 'couvreur le mans, couvreur sarthe',
          canonicalUrl: currentUrl
        }
    }
  }

  // Ajouter les données structurées BreadcrumbList et WebPage dynamiquement
  useEffect(() => {
    const baseUrl = 'https://jory-couverture.com'
    // Normaliser le pathname pour les données structurées aussi
    let normalizedPath = location.pathname
    if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
      normalizedPath = normalizedPath.slice(0, -1)
    }
    if (normalizedPath === '') {
      normalizedPath = '/'
    }
    const currentUrl = `${baseUrl}${normalizedPath}`
    const pathSegments = normalizedPath.split('/').filter(Boolean)
    
    const breadcrumbItems = [
      { name: 'Accueil', url: baseUrl }
    ]
    
    const pathNames = {
      'services': 'Services',
      'realisations': 'Réalisations',
      'a-propos': 'À propos',
      'avis': 'Avis clients',
      'contact': 'Contact'
    }
    
    pathSegments.forEach((segment, index) => {
      const name = pathNames[segment] || segment
      const url = `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`
      breadcrumbItems.push({ name, url })
    })
    
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }
    
    // Données structurées WebPage pour chaque page
    const seoProps = getSEOProps()
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      "url": currentUrl,
      "name": seoProps.title,
      "description": seoProps.description,
      "inLanguage": "fr-FR",
      "isPartOf": {
        "@id": "https://jory-couverture.com/#website"
      },
      "about": {
        "@id": "https://jory-couverture.com"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://jory-couverture.com/images/LOGO.png"
      },
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "breadcrumb": {
        "@id": `${currentUrl}#breadcrumb`
      }
    }
    
    // Supprimer les anciens scripts s'ils existent
    const existingBreadcrumb = document.querySelector('script[data-breadcrumb]')
    if (existingBreadcrumb) {
      existingBreadcrumb.remove()
    }
    
    const existingWebPage = document.querySelector('script[data-webpage]')
    if (existingWebPage) {
      existingWebPage.remove()
    }
    
    // Ajouter le breadcrumb
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.setAttribute('data-breadcrumb', 'true')
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(breadcrumbScript)
    
    // Ajouter la WebPage
    const webpageScript = document.createElement('script')
    webpageScript.type = 'application/ld+json'
    webpageScript.setAttribute('data-webpage', 'true')
    webpageScript.textContent = JSON.stringify(webpageSchema)
    document.head.appendChild(webpageScript)
    
    // Données structurées ImageGallery pour la page réalisations
    if (location.pathname === '/realisations') {
      const imageGallerySchema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Réalisations Couvreur Le Mans - Galerie Photos Toiture",
        "description": "Galerie de photos de nos réalisations de couvreur au Mans : rénovation toiture, charpente, zinguerie. Travaux réalisés en Sarthe par JORY CHARPENTE COUVERTURE.",
        "image": [
          {
            "@type": "ImageObject",
            "url": "https://jory-couverture.com/images/realisation-toiture-vegetale.jpeg",
            "name": "Toiture végétale - Réalisation couvreur Le Mans",
            "description": "Installation d'une toiture végétale écologique et durable en Sarthe"
          },
          {
            "@type": "ImageObject",
            "url": "https://jory-couverture.com/images/realisation-toiture-bardage.jpg",
            "name": "Rénovation complète - Maison individuelle - Couvreur Le Mans",
            "description": "Rénovation complète de toiture avec tuiles terre cuite et isolation renforcée"
          },
          {
            "@type": "ImageObject",
            "url": "https://jory-couverture.com/images/realisation-toiture-construction.jpeg",
            "name": "Travaux de toiture en cours - Couvreur Le Mans",
            "description": "Réalisation de travaux de toiture avec pose de charpente et couverture"
          },
          {
            "@type": "ImageObject",
            "url": "https://jory-couverture.com/images/realisation-toiture-4.jpeg",
            "name": "Réalisation toiture - Couvreur Le Mans",
            "description": "Travaux de couverture et de toiture réalisés avec soin et professionnalisme"
          },
          {
            "@type": "ImageObject",
            "url": "https://jory-couverture.com/images/realisation-toiture-5.jpeg",
            "name": "Réalisation toiture - Couvreur Le Mans",
            "description": "Travaux de couverture et de toiture réalisés avec soin et professionnalisme"
          }
        ]
      }
      
      const existingImageGallery = document.querySelector('script[data-imagegallery]')
      if (existingImageGallery) {
        existingImageGallery.remove()
      }
      
      const imageGalleryScript = document.createElement('script')
      imageGalleryScript.type = 'application/ld+json'
      imageGalleryScript.setAttribute('data-imagegallery', 'true')
      imageGalleryScript.textContent = JSON.stringify(imageGallerySchema)
      document.head.appendChild(imageGalleryScript)
    }
    
    // Données structurées Review pour la page avis
    if (location.pathname === '/avis') {
      const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://jory-couverture.com#organization",
        "name": "JORY CHARPENTE COUVERTURE",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "25",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Marie D."
            },
            "datePublished": "2024-03-15",
            "reviewBody": "Intervention rapide et professionnelle après une fuite importante. L'équipe a été très réactive, est venue sous 24h et a résolu le problème efficacement. Le travail est impeccable, propre et soigné. Je recommande sans hésitation !",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "itemReviewed": {
              "@type": "Service",
              "name": "Réparation de toiture",
              "provider": {
                "@id": "https://jory-couverture.com#organization"
              }
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Pierre L."
            },
            "datePublished": "2024-02-08",
            "reviewBody": "Rénovation complète de notre toiture de 180m². Devis détaillé et transparent, respect des délais annoncés, et résultat magnifique. L'équipe est sérieuse, compétente et très professionnelle. La toiture est comme neuve et l'isolation fonctionne parfaitement. Merci !",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "itemReviewed": {
              "@type": "Service",
              "name": "Rénovation complète",
              "provider": {
                "@id": "https://jory-couverture.com#organization"
              }
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sophie M."
            },
            "datePublished": "2024-01-22",
            "reviewBody": "Excellent rapport qualité-prix. Les artisans sont soigneux, propres et respectueux. Notre toiture est comme neuve ! Le démoussage et le traitement ont redonné un aspect neuf à notre maison. Service client au top.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "itemReviewed": {
              "@type": "Service",
              "name": "Démoussage et traitement",
              "provider": {
                "@id": "https://jory-couverture.com#organization"
              }
            }
          }
        ]
      }
      
      const existingReview = document.querySelector('script[data-review]')
      if (existingReview) {
        existingReview.remove()
      }
      
      const reviewScript = document.createElement('script')
      reviewScript.type = 'application/ld+json'
      reviewScript.setAttribute('data-review', 'true')
      reviewScript.textContent = JSON.stringify(reviewSchema)
      document.head.appendChild(reviewScript)
    }
    
    // Cleanup function pour tous les scripts
    return () => {
      const breadcrumb = document.querySelector('script[data-breadcrumb]')
      if (breadcrumb) breadcrumb.remove()
      const webpage = document.querySelector('script[data-webpage]')
      if (webpage) webpage.remove()
      const imageGallery = document.querySelector('script[data-imagegallery]')
      if (imageGallery) imageGallery.remove()
      const review = document.querySelector('script[data-review]')
      if (review) review.remove()
    }
  }, [location.pathname])

  return (
    <div className="app">
      <SEO {...getSEOProps()} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

