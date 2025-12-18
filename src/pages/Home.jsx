import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'

const RealizationImageCard = ({ imageUrl, title, subtitle, fallbackGradient }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    if (imageUrl) {
      const img = new Image()
      img.onload = () => setImageLoaded(true)
      img.onerror = () => setImageError(true)
      img.src = imageUrl
    }
  }, [imageUrl])

  const backgroundStyle = imageError || !imageUrl
    ? { background: fallbackGradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
    : {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#e5e7eb'
      }

  return (
    <div className="realization-card">
      <div 
        className="realization-image realization-image-with-bg"
        style={backgroundStyle}
      >
        <div className="realization-overlay">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Charpente',
      description: 'Charpente traditionnelle et industrielle. Réalisation sur mesure pour projets neufs et rénovation, avec respect des normes en vigueur.',
      link: '/services#charpente'
    },
    {
      icon: '🔨',
      title: 'Couverture',
      description: 'Pose et rénovation de toitures en tuiles, ardoises, zinc et autres matériaux. Expertise pour tous types de projets.',
      link: '/services#couverture'
    },
    {
      icon: '🪟',
      title: 'Fenêtres de toit',
      description: 'Pose, remplacement et création de fenêtres de toit (Velux). Apport de lumière naturelle et amélioration du confort.',
      link: '/services#fenetres'
    },
    {
      icon: '🔧',
      title: 'Rénovation & Réparation',
      description: 'Rénovation complète et réparation de toiture. Diagnostic précis et solutions durables pour votre patrimoine.',
      link: '/services#renovation'
    },
    {
      icon: '🛡️',
      title: 'Étanchéité & Isolation',
      description: 'Étanchéité, isolation et finitions. Amélioration des performances énergétiques et protection optimale de votre toiture.',
      link: '/services#etancheite'
    },
    {
      icon: '🧹',
      title: 'Entretien & Démoussage',
      description: 'Entretien régulier et démoussage de toiture. Nettoyage professionnel avec traitement anti-mousse et anti-lichen.',
      link: '/services#entretien'
    }
  ]

  const testimonials = [
    {
      stars: '★★★★★',
      text: 'Intervention rapide et professionnelle après une fuite. L\'équipe a été très réactive et le travail est impeccable. Je recommande sans hésitation !',
      author: 'Marie D.',
      location: 'Paris 15ème'
    },
    {
      stars: '★★★★★',
      text: 'Rénovation complète de notre toiture. Devis détaillé, respect des délais et résultat magnifique. Une équipe sérieuse et compétente.',
      author: 'Pierre L.',
      location: 'Boulogne-Billancourt'
    },
    {
      stars: '★★★★★',
      text: 'Excellent rapport qualité-prix. Les artisans sont soigneux, propres et respectueux. Notre toiture est comme neuve !',
      author: 'Sophie M.',
      location: 'Nanterre'
    }
  ]

  const [callbackForm, setCallbackForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleCallbackSubmit = (e) => {
    e.preventDefault()
    console.log('Callback form:', callbackForm)
    alert('Merci pour votre demande de rappel ! Nous vous contacterons bientôt.')
    setCallbackForm({ name: '', email: '', message: '' })
  }

  const handleCallbackChange = (e) => {
    setCallbackForm({
      ...callbackForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <h1 className="hero-title">
                Jory Charpente Couverture – Charpente, Couverture & Fenêtres de Toit
              </h1>
              <p className="hero-subtitle">
                Jory Charpente Couverture est une entreprise artisanale spécialisée dans les travaux de charpente, couverture et pose de fenêtres de toit. Nous intervenons pour des projets neufs et de rénovation, auprès des particuliers et professionnels.
              </p>
              <p className="hero-location">
                Basés près du Mans, nous nous déplaçons dans toute la Sarthe.
              </p>
              <div className="hero-prestations">
                <h3 className="prestations-title">Nos prestations :</h3>
                <ul className="prestations-list">
                  <li>Charpente traditionnelle et industrielle</li>
                  <li>Couverture (tuiles, ardoises, zinc…)</li>
                  <li>Rénovation et réparation de toiture</li>
                  <li>Pose, remplacement et création de fenêtres de toit (Velux)</li>
                  <li>Étanchéité, isolation et finitions</li>
                  <li>Entretien et démoussage de toiture</li>
                </ul>
              </div>
              <p className="hero-note">
                Besoin d'un devis ou de conseils ?<br />
                Faites confiance à Jory Charpente Couverture, votre artisan charpentier-couvreur au Mans et dans toute la Sarthe.
              </p>
            </div>
            
            <div className="hero-callback-form">
              <h2>Demande de rappel</h2>
              <form onSubmit={handleCallbackSubmit} className="callback-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={callbackForm.name}
                    onChange={handleCallbackChange}
                    placeholder="Votre nom et prénom"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={callbackForm.email}
                    onChange={handleCallbackChange}
                    placeholder="Adresse e-mail"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={callbackForm.message}
                    onChange={handleCallbackChange}
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-callback-submit">SOUMETTRE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos services</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-outline">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose section bg-light">
        <div className="container">
          <div className="features-simple-grid">
            <div className="feature-simple">
              <h3>Expérience et expertise</h3>
              <p>L'expérience et l'expertise sont les fondements de la réussite professionnelle.</p>
            </div>
            <div className="feature-simple">
              <h3>Qualité et efficacité</h3>
              <p>"La qualité et l'efficacité sont deux éléments indispensables pour garantir la satisfaction du client."</p>
            </div>
            <div className="feature-simple">
              <h3>Service personnalisé</h3>
              <p>"Notre entreprise s'engage à offrir un service personnalisé pour répondre aux besoins uniques de chaque client."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Realizations Preview */}
      <section className="realizations-preview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">EXEMPLE DE RÉALISATIONS</h2>
          </div>
          <div className="realizations-grid">
            <RealizationImageCard
              imageUrl="/images/bardage-cedral.jpg"
              title="Remplacement couverture et pose bardage Cedral"
              subtitle="Tuiles plates, bardage Cedral"
            />
            <RealizationImageCard
              imageUrl="/images/realisation-toiture-bardage.jpg"
              title="Rénovation complète - Maison individuelle"
              subtitle="Tuiles terre cuite, isolation renforcée"
              fallbackGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            />
            <RealizationImageCard
              imageUrl={null}
              title="Pose toiture neuve - Résidence"
              subtitle="Ardoises naturelles, zinguerie cuivre"
              fallbackGradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            />
            <RealizationImageCard
              imageUrl={null}
              title="Réparation post-tempête"
              subtitle="Intervention d'urgence, remplacement complet"
              fallbackGradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            />
          </div>
          <div className="text-center">
            <Link to="/realisations" className="btn btn-primary">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Devis Section */}
      <section className="cta-devis section">
        <div className="container">
          <h2 className="cta-devis-title">DEVIS GRATUIT</h2>
          <p className="cta-devis-subtitle">INTERVENTION SUR LE MANS ET DANS TOUTE LA SARTHE (72)</p>
          <Link to="/contact" className="btn btn-primary btn-large">Contactez-nous</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Avis Google</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/avis" className="btn btn-outline">
              Lire tous les avis
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-cta section">
        <div className="container">
          <h2 className="section-title">Besoin de nous contacter ?</h2>
          <p>contactez nous sur whatsapp en cliquant ici</p>
        </div>
      </section>
    </>
  )
}

export default Home

