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

  // SEO par page
  const getSEOProps = () => {
    const baseUrl = 'https://www.jory-charpente-couverture.fr'
    const currentUrl = `${baseUrl}${location.pathname}`

    switch (location.pathname) {
      case '/':
        return {
          title: 'Couvreur Le Mans 72 - JORY CHARPENTE COUVERTURE | Réparation Toiture Sarthe',
          description: 'Couvreur professionnel au Mans (72). JORY CHARPENTE COUVERTURE : réparation toiture, charpente, zinguerie, fenêtres de toit. Intervention rapide 24/7, devis gratuit. Spécialiste couverture Sarthe depuis Changé.',
          keywords: 'couvreur le mans, couvreur sarthe, charpentier couvreur le mans, réparation toiture le mans, toiture le mans, couvreur 72, zinguerie le mans, fenêtres de toit le mans, démoussage toiture le mans, charpente le mans, couvreur changé, couvreur allonnes, artisan couvreur le mans',
          canonicalUrl: currentUrl
        }
      case '/services':
        return {
          title: 'Services Couvreur Le Mans - Charpente, Couverture, Zinguerie | JORY',
          description: 'Services de couvreur au Mans : charpente, couverture, zinguerie, fenêtres de toit, démoussage, étanchéité. Devis gratuit. Intervention rapide dans toute la Sarthe 72.',
          keywords: 'services couvreur le mans, charpente le mans, couverture le mans, zinguerie le mans, fenêtres de toit le mans, démoussage le mans, étanchéité le mans',
          canonicalUrl: currentUrl
        }
      case '/contact':
        return {
          title: 'Contact Couvreur Le Mans - Devis Gratuit 24/7 | JORY CHARPENTE',
          description: 'Contactez votre couvreur au Mans. Devis gratuit sous 24h pour réparation toiture, charpente, zinguerie. Intervention urgente 24h/24 au 07 50 39 83 68.',
          keywords: 'contact couvreur le mans, devis toiture le mans, devis gratuit couvreur, couvreur urgence le mans',
          canonicalUrl: currentUrl
        }
      case '/realisations':
        return {
          title: 'Réalisations Couvreur Le Mans - Galerie Photos Toiture | JORY',
          description: 'Découvrez nos réalisations de couvreur au Mans : rénovation toiture, charpente, zinguerie. Photos avant/après de nos travaux en Sarthe 72.',
          keywords: 'réalisations couvreur le mans, travaux toiture le mans, photos couverture le mans, rénovation toiture sarthe',
          canonicalUrl: currentUrl
        }
      case '/avis':
        return {
          title: 'Avis Clients Couvreur Le Mans - Témoignages 5⭐ | JORY CHARPENTE',
          description: 'Lisez les avis de nos clients couvreur au Mans. Témoignages 5 étoiles sur nos travaux de toiture, charpente et zinguerie en Sarthe.',
          keywords: 'avis couvreur le mans, témoignages couvreur le mans, avis clients toiture le mans',
          canonicalUrl: currentUrl
        }
      case '/a-propos':
        return {
          title: 'À Propos - Couvreur Le Mans Depuis Changé | JORY CHARPENTE COUVERTURE',
          description: 'Découvrez JORY CHARPENTE COUVERTURE, votre couvreur expert au Mans et dans toute la Sarthe. Artisan qualifié en charpente, couverture et zinguerie.',
          keywords: 'à propos couvreur le mans, artisan couvreur sarthe, entreprise couverture le mans',
          canonicalUrl: currentUrl
        }
      default:
        return {
          title: 'Couvreur Le Mans 72 - JORY CHARPENTE COUVERTURE',
          description: 'Couvreur professionnel au Mans et dans toute la Sarthe. Réparation toiture, charpente, zinguerie.',
          keywords: 'couvreur le mans, couvreur sarthe',
          canonicalUrl: currentUrl
        }
    }
  }

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

