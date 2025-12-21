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
    const baseUrl = 'https://www.jory-charpente-couverture.fr'
    const currentUrl = `${baseUrl}${location.pathname}`

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
          title: 'Avis Clients Couvreur Le Mans - Témoignages 5⭐ | JORY CHARPENTE',
          description: 'Lisez les avis de nos clients couvreur au Mans. Témoignages 5 étoiles sur nos travaux de toiture, charpente et zinguerie en Sarthe.',
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

  // Ajouter les données structurées BreadcrumbList dynamiquement
  useEffect(() => {
    const baseUrl = 'https://www.jory-charpente-couverture.fr'
    const pathSegments = location.pathname.split('/').filter(Boolean)
    
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
    
    // Supprimer l'ancien breadcrumb s'il existe
    const existingBreadcrumb = document.querySelector('script[data-breadcrumb]')
    if (existingBreadcrumb) {
      existingBreadcrumb.remove()
    }
    
    // Ajouter le nouveau breadcrumb
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-breadcrumb', 'true')
    script.textContent = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)
    
    return () => {
      const breadcrumb = document.querySelector('script[data-breadcrumb]')
      if (breadcrumb) {
        breadcrumb.remove()
      }
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

