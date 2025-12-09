import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'

const Home = () => {
  const services = [
    {
      icon: '🔨',
      title: 'Pose de toiture',
      description: 'Installation complète de toitures neuves avec les meilleurs matériaux. Expertise en tuiles, ardoises, zinc et shingle.',
      link: '/services#pose'
    },
    {
      icon: '🔧',
      title: 'Réparation de toiture',
      description: 'Intervention rapide pour réparer fuites, tuiles cassées et dégâts. Diagnostic précis et solution durable.',
      link: '/services#reparation'
    },
    {
      icon: '🏗️',
      title: 'Rénovation complète',
      description: 'Rénovation totale de votre toiture avec isolation thermique. Amélioration de l\'étanchéité et des performances énergétiques.',
      link: '/services#renovation'
    },
    {
      icon: '💧',
      title: 'Gouttières',
      description: 'Pose et réparation de systèmes d\'évacuation des eaux pluviales. Gouttières PVC, zinc, aluminium sur mesure.',
      link: '/services#gouttieres'
    },
    {
      icon: '🧹',
      title: 'Démoussage',
      description: 'Nettoyage professionnel de toiture avec traitement anti-mousse et anti-lichen. Protection durable de votre couverture.',
      link: '/services#demoussage'
    },
    {
      icon: '⚡',
      title: 'Travaux d\'urgence',
      description: 'Intervention 24/7 pour fuites, dégâts de tempête, toitures endommagées. Réactivité maximale pour votre sécurité.',
      link: '/services#urgence'
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

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Votre toiture en expertises</h1>
            <p className="hero-subtitle">
              Artisans couvreurs passionnés depuis 25 ans. Pose, réparation, rénovation : nous protégeons votre patrimoine.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">
                Devis gratuit
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Nos services
              </Link>
            </div>
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Garantie décennale</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Intervention rapide</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Devis sous 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos services de couverture</h2>
            <p className="section-subtitle">Des solutions complètes pour tous vos besoins en toiture</p>
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
          <div className="section-header">
            <h2 className="section-title">Pourquoi choisir Toiture Pro ?</h2>
            <p className="section-subtitle">L'expertise et la qualité au service de votre toiture</p>
          </div>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-number">25</div>
              <h3>Années d'expérience</h3>
              <p>Un savoir-faire artisanal transmis et perfectionné depuis 1999</p>
            </div>
            <div className="feature-box">
              <div className="feature-number">2000+</div>
              <h3>Chantiers réalisés</h3>
              <p>Des milliers de toitures rénovées, réparées et posées avec succès</p>
            </div>
            <div className="feature-box">
              <div className="feature-number">98%</div>
              <h3>Clients satisfaits</h3>
              <p>Un taux de satisfaction exceptionnel grâce à notre engagement qualité</p>
            </div>
            <div className="feature-box">
              <div className="feature-number">24/7</div>
              <h3>Disponibilité</h3>
              <p>Service d'urgence disponible pour vos situations critiques</p>
            </div>
          </div>
          <div className="guarantees">
            <div className="guarantee-item">
              <span className="guarantee-icon">🛡️</span>
              <div>
                <strong>Garantie décennale</strong>
                <p>Assurance décennale complète sur tous nos travaux</p>
              </div>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon">✅</span>
              <div>
                <strong>Certifications</strong>
                <p>Qualibat, RGE, Membre de la CAPEB</p>
              </div>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon">🌱</span>
              <div>
                <strong>Éco-responsable</strong>
                <p>Matériaux durables et recyclables, isolation performante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realizations Preview */}
      <section className="realizations-preview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos réalisations</h2>
            <p className="section-subtitle">Découvrez quelques-unes de nos dernières réalisations</p>
          </div>
          <div className="realizations-grid">
            <div className="realization-card">
              <div className="realization-image" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="realization-overlay">
                  <h3>Rénovation complète - Maison individuelle</h3>
                  <p>Tuiles terre cuite, isolation renforcée</p>
                </div>
              </div>
            </div>
            <div className="realization-card">
              <div className="realization-image" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <div className="realization-overlay">
                  <h3>Pose toiture neuve - Résidence</h3>
                  <p>Ardoises naturelles, zinguerie cuivre</p>
                </div>
              </div>
            </div>
            <div className="realization-card">
              <div className="realization-image" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <div className="realization-overlay">
                  <h3>Réparation post-tempête</h3>
                  <p>Intervention d'urgence, remplacement complet</p>
                </div>
              </div>
            </div>
            <div className="realization-card">
              <div className="realization-image" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                <div className="realization-overlay">
                  <h3>Isolation sous toiture</h3>
                  <p>Amélioration performance énergétique</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/realisations" className="btn btn-primary">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ce que disent nos clients</h2>
            <p className="section-subtitle">La satisfaction de nos clients est notre priorité</p>
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

      {/* CTA Section */}
      <CTASection
        title="Besoin d'un devis pour vos travaux de toiture ?"
        subtitle="Obtenez une estimation gratuite et sans engagement sous 24h"
      />
    </>
  )
}

export default Home

