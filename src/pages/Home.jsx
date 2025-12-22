import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import OptimizedImage from '../components/OptimizedImage'

// Composant FAQ avec accordéon
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Quand faire appel à un couvreur au Mans en urgence ?",
      answer: "Appelez un couvreur urgence au Mans en cas de : fuite importante, tuiles ou ardoises tombées, dégâts après tempête, toiture partiellement arrachée, infiltration d'eau active. JORY CHARPENTE COUVERTURE propose une intervention couvreur Le Mans 24h/24 7j/7 pour les urgences. Appelez-nous immédiatement au 07 50 39 83 68 pour une intervention rapide et sécurisation de votre toiture."
    },
    {
      question: "Quels sont les services d'un couvreur au Mans ?",
      answer: "Un couvreur au Mans propose : réparation et rénovation de toiture, pose de toiture neuve (tuiles, ardoises, zinc), charpente traditionnelle et industrielle, zinguerie (gouttières, noues, faîtages), pose de fenêtres de toit (Velux), démoussage et traitement anti-mousse, étanchéité et isolation thermique, travaux d'urgence 24/7. JORY CHARPENTE COUVERTURE, votre couvreur professionnel au Mans, réalise tous ces services avec garantie décennale."
    },
    {
      question: "Comment obtenir un devis couvreur Le Mans gratuit ?",
      answer: "Pour obtenir un devis gratuit couvreur Le Mans, contactez JORY CHARPENTE COUVERTURE par téléphone au 07 50 39 83 68 ou via notre formulaire en ligne. Nous vous proposons un devis détaillé sous 24h, sans engagement, avec visite sur site gratuite pour évaluer précisément vos besoins. Notre couvreur au Mans vous conseille sur les meilleures solutions pour votre projet de toiture."
    },
    {
      question: "Quelle est la zone d'intervention d'un couvreur au Mans ?",
      answer: "JORY CHARPENTE COUVERTURE, votre couvreur au Mans, intervient dans tout Le Mans et ses environs : Changé, Allonnes, Coulaines, Arnage, Mulsanne, Yvré-l'Évêque, Sargé-lès-Le-Mans, Ruaudin, et dans toute la Sarthe (72). Basés à Changé (72560), nous sommes votre couvreur local Le Mans pour une intervention rapide et un suivi de proximité sur tous vos chantiers de toiture."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
          itemScope 
          itemProp="mainEntity" 
          itemType="https://schema.org/Question"
        >
          <h3 
            className="faq-question" 
            itemProp="name"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
          </h3>
          {openIndex === index && (
            <div 
              className="faq-answer" 
              itemScope 
              itemProp="acceptedAnswer" 
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const RealizationImageCard = ({ imageUrl, title, subtitle, fallbackGradient }) => {
  // Générer un alt text SEO-friendly
  const altText = title 
    ? `${title} - Réalisation couvreur Le Mans - JORY CHARPENTE COUVERTURE`
    : subtitle
    ? `${subtitle} - Travaux de toiture Sarthe - JORY CHARPENTE COUVERTURE`
    : 'Réalisation couverture Le Mans - Travaux de toiture Sarthe - JORY CHARPENTE COUVERTURE'

  return (
    <div className="realization-card">
      <OptimizedImage
        src={imageUrl}
        alt={altText}
        className="realization-image realization-image-with-bg"
        fallbackGradient={fallbackGradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}
        style={{ minHeight: '250px' }}
      />
    </div>
  )
}

const Home = () => {
  const services = [
    {
      title: 'Charpente',
      description: 'Charpente traditionnelle et industrielle. Réalisation sur mesure pour projets neufs et rénovation, avec respect des normes en vigueur.',
      link: '/services#pose'
    },
    {
      title: 'Couverture',
      description: 'Pose et rénovation de toitures en tuiles, ardoises, zinc et autres matériaux. Expertise pour tous types de projets.',
      link: '/services#renovation'
    },
    {
      title: 'Fenêtres de toit',
      description: 'Pose, remplacement et création de fenêtres de toit (Velux). Apport de lumière naturelle et amélioration du confort.',
      link: '/services#fenetres'
    },
    {
      title: 'Zinguerie',
      description: 'Ex gouttière, noue, chêneaux. Fabrication et pose de tous éléments de zinguerie sur mesure pour une protection optimale de votre toiture.',
      link: '/services#zinguerie'
    },
    {
      title: 'Étanchéité & Isolation',
      description: 'Étanchéité, isolation et finitions. Amélioration des performances énergétiques et protection optimale de votre toiture.',
      link: '/services#etancheite'
    },
    {
      title: 'Entretien & Démoussage',
      description: 'Entretien régulier et démoussage de toiture. Nettoyage professionnel avec traitement anti-mousse et anti-lichen.',
      link: '/services#demoussage'
    }
  ]

  const testimonials = [
    {
      stars: '★★★★★',
      text: 'Intervention rapide et professionnelle après une fuite. L\'équipe a été très réactive et le travail est impeccable. Je recommande sans hésitation !',
      author: 'Marie D.',
      location: 'Le Mans'
    },
    {
      stars: '★★★★★',
      text: 'Rénovation complète de notre toiture. Devis détaillé, respect des délais et résultat magnifique. Une équipe sérieuse et compétente.',
      author: 'Pierre L.',
      location: 'Allonnes'
    },
    {
      stars: '★★★★★',
      text: 'Excellent rapport qualité-prix. Les artisans sont soigneux, propres et respectueux. Notre toiture est comme neuve !',
      author: 'Sophie M.',
      location: 'Coulaines'
    }
  ]


  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <div className="hero-logo-container">
                <img 
                  src="/images/LOGO.png" 
                  alt="JORY CHARPENTE COUVERTURE - Couvreur Le Mans 72" 
                  className="hero-logo" 
                />
              </div>
              <div className="hero-services-frame">
                <p className="hero-services-text">Charpente, Couverture, Zinguerie</p>
              </div>
              <div className="hero-prestations">
                <h3 className="prestations-title">Nos prestations :</h3>
                <ul className="prestations-list">
                  <li>Charpente traditionnelle et industrielle</li>
                  <li>Couverture (tuiles, ardoises, zinc…)</li>
                  <li>Rénovation et réparation de toiture</li>
                  <li>Pose, remplacement et création de fenêtres de toit (Velux)</li>
                  <li>Étanchéité, isolation et finitions</li>
                  <li>Entretien et démoussage de toiture</li>
                  <li>Zinguerie (gouttière, noue, chêneaux)</li>
                </ul>
              </div>
              <p className="hero-note">
                Besoin d'un devis ou de conseils ?<br />
                Faites confiance à JORY CHARPENTE COUVERTURE, votre artisan charpentier-couvreur au Mans et dans toute la Sarthe.
              </p>
            </div>
            
            <div className="hero-callback-wrapper">
              <div className="hero-callback-form">
                <p className="service-24-7-text">Travaux d'urgence 24h/24 7j/7</p>
                <p className="service-24-7-phone">
                  <a href="tel:+33750398368">07 50 39 83 68</a>
                </p>
              </div>
              
              <div className="hero-callback-form">
                <h2>Demande de devis</h2>
                <p className="hero-callback-text">
                  Besoin d'un devis gratuit ? Contactez-nous dès maintenant !
                </p>
                <Link to="/contact" className="btn btn-primary btn-large">
                  Demander un devis
                </Link>
              </div>
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

      {/* SEO Content Section - Couvreur Le Mans */}
      <section className="seo-content section">
        <div className="container">
          <div className="seo-content-wrapper">
            <h2 className="section-title">Couvreur Le Mans : Votre Expert en Toiture et Charpente</h2>
            <div className="seo-text-content">
              <p>
                <strong>Vous recherchez un couvreur au Mans ?</strong> JORY CHARPENTE COUVERTURE est votre artisan couvreur de confiance au Mans et dans toute la Sarthe. Spécialisé depuis de nombreuses années, nous intervenons rapidement pour tous vos besoins en couverture, charpente et zinguerie au Mans et ses environs.
              </p>
              <p>
                En tant que <strong>couvreur professionnel au Mans</strong>, nous réalisons tous types de travaux de toiture : réparation de toiture urgente au Mans, rénovation complète de toiture, pose de charpente, zinguerie sur mesure, pose de fenêtres de toit (Velux), démoussage et traitement de toiture. Notre équipe de couvreurs qualifiés intervient rapidement dans tout Le Mans et la région sarthoise.
              </p>
              <h3>Pourquoi Choisir un Couvreur au Mans ?</h3>
              <p>
                Choisir un <strong>couvreur local au Mans</strong> présente de nombreux avantages : intervention rapide en cas d'urgence (fuite, dégâts de tempête), connaissance parfaite des spécificités climatiques de la région, proximité pour le suivi de chantier, et devis gratuit sans engagement. Notre entreprise de couvreur au Mans vous garantit un service de qualité avec des artisans expérimentés.
              </p>
              <h3>Nos Interventions de Couvreur au Mans</h3>
              <p>
                En tant que <strong>couvreur expert au Mans</strong>, nous intervenons pour tous vos projets : réparation de toiture au Mans suite à une fuite ou des intempéries, rénovation complète de toiture avec isolation renforcée, pose de toiture neuve (tuiles, ardoises, zinc), charpente traditionnelle ou industrielle, zinguerie complète (gouttières, noues, faîtages), pose de fenêtres de toit Velux, démoussage et traitement anti-mousse, étanchéité et isolation thermique.
              </p>
              <p>
                <strong>Besoin d'un couvreur au Mans ?</strong> Contactez JORY CHARPENTE COUVERTURE pour un devis gratuit. Nous intervenons rapidement dans tout Le Mans, Changé, Allonnes, Coulaines, Arnage, Mulsanne et dans toute la Sarthe (72). Appelez-nous au <strong><a href="tel:+33750398368">07 50 39 83 68</a></strong> pour une intervention urgente ou une demande de devis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordéon */}
      <section className="faq-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Questions Fréquentes - Couvreur Le Mans</h2>
            <p className="section-subtitle">Toutes les réponses à vos questions sur nos services de couvreur au Mans</p>
          </div>
          <FAQAccordion />
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
              <h3>Assurance</h3>
              <p>GAN ASSURANCE</p>
            </div>
            <div className="feature-simple">
              <h3>Service personnalisé</h3>
              <p>Notre entreprise s'engage à offrir un service personnalisé pour répondre aux besoins uniques de chaque client.</p>
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
              imageUrl="/images/realisation-toiture-vegetale.jpeg"
              title="Toiture végétale écologique"
              subtitle="Installation toiture végétale Le Mans - Couvreur Sarthe"
            />
            <RealizationImageCard
              imageUrl="/images/realisation-toiture-bardage.jpg"
              title="Rénovation complète - Maison individuelle"
              subtitle="Tuiles terre cuite, isolation renforcée - Couvreur Le Mans"
            />
            <RealizationImageCard
              imageUrl="/images/realisation-toiture-construction.jpeg"
              title="Travaux de toiture en cours"
              subtitle="Pose charpente et couverture - Artisan couvreur Sarthe"
            />
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
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
            <h2 className="section-title">Avis clients</h2>
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

    </>
  )
}

export default Home

