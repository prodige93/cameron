import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'

const RealizationImage = ({ image, gradient, title, location }) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (image) {
      const img = new Image()
      img.onload = () => setImageLoaded(true)
      img.onerror = () => setImageError(true)
      img.src = image
    }
  }, [image])
  
  const backgroundStyle = !image || imageError
    ? { background: gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
    : { 
        backgroundImage: `url(${image})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundColor: '#e5e7eb'
      }
  
  return (
    <div
      className={`realization-image ${image && !imageError ? 'realization-image-with-bg' : ''}`}
      style={backgroundStyle}
    >
    </div>
  )
}

const RealizationCard = ({ realization }) => {
  return (
    <div 
      className="realization-item" 
      data-category={realization.category}
    >
      <RealizationImage 
        image={realization.image}
        gradient={realization.gradient}
        title={realization.title}
        location={realization.location}
      />
    </div>
  )
}

const Realizations = () => {

  const realizations = [
    {
      id: 'toiture-vegetale',
      category: 'renovation',
      title: 'Toiture végétale',
      location: 'Sarthe',
      description: 'Installation d\'une toiture végétale écologique et durable.',
      tags: ['Toiture végétale', 'Écologique', 'Durable'],
      image: '/images/realisation-toiture-vegetale.jpeg'
    },
    {
      id: 'renovation-complete-maison',
      category: 'renovation',
      title: 'Rénovation complète - Maison individuelle',
      location: 'Sarthe',
      description: 'Rénovation complète d\'une toiture avec remplacement des tuiles terre cuite, isolation renforcée sous toiture et remplacement de toute la zinguerie. Travaux réalisés en 3 semaines.',
      tags: ['Tuiles terre cuite', 'Isolation', 'Zinguerie'],
      image: '/images/realisation-toiture-bardage.jpg'
    },
    {
      id: 'toiture-construction',
      category: 'renovation',
      title: 'Travaux de toiture en cours',
      location: 'Sarthe',
      description: 'Réalisation de travaux de toiture avec pose de charpente et couverture.',
      tags: ['Charpente', 'Couverture', 'Rénovation'],
      image: '/images/realisation-toiture-construction.jpeg'
    },
    {
      id: 'realisation-toiture-4',
      category: 'renovation',
      title: 'Réalisation toiture',
      location: 'Sarthe',
      description: 'Travaux de couverture et de toiture réalisés avec soin et professionnalisme.',
      tags: ['Couverture', 'Toiture'],
      image: '/images/realisation-toiture-4.jpeg'
    },
    {
      id: 'realisation-toiture-5',
      category: 'renovation',
      title: 'Réalisation toiture',
      location: 'Sarthe',
      description: 'Travaux de couverture et de toiture réalisés avec soin et professionnalisme.',
      tags: ['Couverture', 'Toiture'],
      image: '/images/realisation-toiture-5.jpeg'
    },
    {
      id: 'realisation-toiture-6',
      category: 'renovation',
      title: 'Réalisation toiture',
      location: 'Sarthe',
      description: 'Travaux de couverture et de toiture réalisés avec soin et professionnalisme.',
      tags: ['Couverture', 'Toiture'],
      image: '/images/realisation-toiture-6.jpeg'
    },
    {
      id: 'realisation-toiture-7',
      category: 'renovation',
      title: 'Réalisation toiture',
      location: 'Sarthe',
      description: 'Travaux de couverture et de toiture réalisés avec soin et professionnalisme.',
      tags: ['Couverture', 'Toiture'],
      image: '/images/realisation-toiture-7.jpeg'
    },
    {
      id: 'realisation-toiture-8',
      category: 'renovation',
      title: 'Réalisation toiture',
      location: 'Sarthe',
      description: 'Travaux de couverture et de toiture réalisés avec soin et professionnalisme.',
      tags: ['Couverture', 'Toiture'],
      image: '/images/realisation-toiture-8.jpeg'
    },
    {
      id: 'realisation-toiture-9',
      category: 'renovation',
      title: 'Réalisation toiture',
      location: 'Sarthe',
      description: 'Travaux de couverture et de toiture réalisés avec soin et professionnalisme.',
      tags: ['Couverture', 'Toiture'],
      image: '/images/realisation-toiture-9.jpeg'
    }
  ]


  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <section className="page-header" style={{ background: 'white', color: '#1a1a1a', paddingTop: '6rem' }}>
        <div className="container">
          <h1 style={{ color: '#1a1a1a' }}>Nos dernières réalisations</h1>
          <p style={{ color: '#424242' }}>Découvrez quelques-unes de nos réalisations de couverture</p>
        </div>
      </section>

      <section className="realizations-gallery section" style={{ background: 'white' }}>
        <div className="container">
          <div className="realizations-grid">
            {realizations.map((realization, index) => (
              <RealizationCard 
                key={realization.id || index} 
                realization={realization}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section section" style={{ background: 'white' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2000</div>
              <div className="stat-label">Chantiers réalisés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25</div>
              <div className="stat-label">Années d'expérience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Clients satisfaits</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24h</div>
              <div className="stat-label">Délai moyen intervention</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Votre projet de toiture nous intéresse"
        subtitle="Contactez-nous pour discuter de votre projet et obtenir un devis gratuit"
      />
    </div>
  )
}

export default Realizations

