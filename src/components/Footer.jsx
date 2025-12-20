import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { validateEmail, checkRateLimit } from '../utils/security'
import { sendNewsletterSubscription } from '../utils/emailService'

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState(null)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setIsSubscribing(true)
    setSubscriptionStatus(null)

    // Rate limiting check
    const rateLimit = checkRateLimit('newsletter', 3, 60000)
    if (!rateLimit.allowed) {
      const secondsLeft = Math.ceil((rateLimit.resetTime - Date.now()) / 1000)
      setSubscriptionStatus({ 
        type: 'error', 
        message: `Trop de tentatives. Veuillez réessayer dans ${secondsLeft} seconde(s).` 
      })
      setIsSubscribing(false)
      return
    }

    // Validation de l'email
    if (!newsletterEmail || !validateEmail(newsletterEmail)) {
      setSubscriptionStatus({ type: 'error', message: 'Veuillez entrer une adresse email valide.' })
      setIsSubscribing(false)
      return
    }

    try {
      const result = await sendNewsletterSubscription(newsletterEmail.trim())
      
      if (result.success) {
        setSubscriptionStatus({ type: 'success', message: 'Merci pour votre abonnement !' })
        setNewsletterEmail('')
      } else {
        setSubscriptionStatus({ 
          type: 'error', 
          message: result.message || 'Une erreur est survenue. Veuillez réessayer.' 
        })
      }
    } catch (error) {
      console.error('Erreur lors de l\'abonnement:', error)
      setSubscriptionStatus({ type: 'error', message: 'Une erreur est survenue. Veuillez réessayer.' })
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>JORY CHARPENTE COUVERTURE</h3>
            <p>Entreprise artisanale spécialisée dans les travaux de charpente, couverture et pose de fenêtres de toit. Nous intervenons pour des projets neufs et de rénovation, auprès des particuliers et professionnels dans toute la Sarthe.</p>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/realisations">Réalisations</Link></li>
              <li><Link to="/avis">Avis clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#charpente">Charpente</Link></li>
              <li><Link to="/services#couverture">Couverture</Link></li>
              <li><Link to="/services#renovation">Rénovation</Link></li>
              <li><Link to="/services#fenetres">Fenêtres de toit</Link></li>
              <li><Link to="/services#etancheite">Étanchéité & Isolation</Link></li>
              <li><Link to="/services#entretien">Entretien & Démoussage</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-logo-wrapper">
              <img src="/images/LOGO.png" alt="JORY CHARPENTE COUVERTURE" className="footer-logo" />
            </div>
            <ul>
              <li>LE TILLEUL 72560 Changé, Sarthe</li>
              <li><a href="tel:+33750398368">07 50 39 83 68</a></li>
              <li><a href="mailto:JORY.BATIMENT@GMAIL.COM">JORY.BATIMENT@GMAIL.COM</a></li>
              <li>Lun-Dim: 8h-20h (urgences)</li>
              <li>
                <a href="https://wa.me/33750398368" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  💬 Contactez-nous sur WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Newsletter</h4>
            <p>Restez informé de nos actualités et offres spéciales</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  disabled={isSubscribing}
                />
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? '...' : 'S\'abonner'}
                </button>
              </div>
              {subscriptionStatus && (
                <div className={`newsletter-message ${subscriptionStatus.type}`}>
                  {subscriptionStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JORY CHARPENTE COUVERTURE. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

