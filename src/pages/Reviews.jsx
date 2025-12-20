import React, { useState, useEffect } from 'react'
import CTASection from '../components/CTASection'

const Reviews = () => {
  // Fonction pour générer les initiales
  const getInitials = (name) => {
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  // Fonction pour obtenir la date actuelle formatée
  const getCurrentDate = () => {
    const now = new Date()
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
                    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`
  }

  // Avis initiaux
  const initialTestimonials = [
    {
      initials: 'MD',
      name: 'Marie D.',
      location: 'Le Mans',
      stars: '★★★★★',
      text: 'Intervention rapide et professionnelle après une fuite importante. L\'équipe a été très réactive, est venue sous 24h et a résolu le problème efficacement. Le travail est impeccable, propre et soigné. Je recommande sans hésitation !',
      date: '15 mars 2024',
      service: 'Réparation de toiture'
    },
    {
      initials: 'PL',
      name: 'Pierre L.',
      location: 'Allonnes',
      stars: '★★★★★',
      text: 'Rénovation complète de notre toiture de 180m². Devis détaillé et transparent, respect des délais annoncés, et résultat magnifique. L\'équipe est sérieuse, compétente et très professionnelle. La toiture est comme neuve et l\'isolation fonctionne parfaitement. Merci !',
      date: '8 février 2024',
      service: 'Rénovation complète'
    },
    {
      initials: 'SM',
      name: 'Sophie M.',
      location: 'Coulaines',
      stars: '★★★★★',
      text: 'Excellent rapport qualité-prix. Les artisans sont soigneux, propres et respectueux. Notre toiture est comme neuve ! Le démoussage et le traitement ont redonné un aspect neuf à notre maison. Service client au top.',
      date: '22 janvier 2024',
      service: 'Démoussage et traitement'
    },
    {
      initials: 'JL',
      name: 'Jean L.',
      location: 'La Chapelle-Saint-Aubin',
      stars: '★★★★★',
      text: 'Pose d\'une toiture neuve en ardoises. Travail d\'exception, finitions parfaites. L\'équipe a su nous conseiller sur le choix des matériaux et le résultat dépasse nos attentes. Professionnalisme et savoir-faire remarquables.',
      date: '10 décembre 2023',
      service: 'Pose de toiture'
    },
    {
      initials: 'CM',
      name: 'Catherine M.',
      location: 'Arnage',
      stars: '★★★★★',
      text: 'Intervention d\'urgence après une tempête. Réponse immédiate, intervention sous 24h et sécurisation rapide. L\'équipe a su gérer la situation avec professionnalisme. Très satisfaite de la réactivité et de la qualité du travail.',
      date: '5 novembre 2023',
      service: 'Travaux d\'urgence'
    },
    {
      initials: 'FD',
      name: 'François D.',
      location: 'Mulsanne',
      stars: '★★★★★',
      text: 'Isolation sous toiture réalisée avec brio. L\'équipe a su nous conseiller sur les meilleures solutions énergétiques. Résultat : facture de chauffage réduite de 30% ! Travail soigné, respect des normes, équipe à l\'écoute.',
      date: '18 octobre 2023',
      service: 'Isolation sous toiture'
    },
    {
      initials: 'AB',
      name: 'Anne B.',
      location: 'Yvré-l\'Évêque',
      stars: '★★★★★',
      text: 'Pose de gouttières en zinc sur mesure. Fabrication en atelier, pose parfaite. L\'esthéique est au rendez-vous et l\'évacuation des eaux fonctionne parfaitement. Artisans compétents et attentionnés.',
      date: '2 septembre 2023',
      service: 'Pose de gouttières'
    },
    {
      initials: 'PB',
      name: 'Paul B.',
      location: 'Sargé-lès-Le-Mans',
      stars: '★★★★★',
      text: 'Rénovation d\'une toiture en zinc sur immeuble haussmannien. Travail de qualité, respect du patrimoine architectural. L\'équipe a su préserver le caractère historique tout en modernisant l\'étanchéité. Excellent travail !',
      date: '25 août 2023',
      service: 'Rénovation toiture zinc'
    },
    {
      initials: 'LC',
      name: 'Laure C.',
      location: 'Ruaudin',
      stars: '★★★★★',
      text: 'Service client exceptionnel, de la prise de contact à la fin des travaux. Devis clair, suivi régulier, équipe ponctuelle et propre. La toiture est parfaite et nous sommes ravis du résultat. À recommander sans hésitation !',
      date: '12 juillet 2023',
      service: 'Rénovation complète'
    },
    {
      initials: 'TM',
      name: 'Thomas M.',
      location: 'Le Mans',
      stars: '★★★★★',
      text: 'Pose de fenêtres de toit Velux. Installation parfaite, étanchéité impeccable. L\'équipe a su s\'adapter aux contraintes de notre charpente. Résultat magnifique et apport de lumière optimal. Très satisfait !',
      date: '3 juin 2024',
      service: 'Pose de fenêtres de toit'
    },
    {
      initials: 'EB',
      name: 'Élise B.',
      location: 'Changé',
      stars: '★★★★★',
      text: 'Zinguerie complète refaite. Gouttières, noues et chêneaux en zinc. Fabrication sur mesure, pose soignée. L\'esthétique est parfaite et l\'évacuation des eaux fonctionne à merveille. Artisans de qualité !',
      date: '18 mai 2024',
      service: 'Zinguerie'
    },
    {
      initials: 'JM',
      name: 'Julien M.',
      location: 'Allonnes',
      stars: '★★★★★',
      text: 'Charpente traditionnelle pour extension. Travail d\'artisan remarquable, respect des techniques anciennes. Le charpentier a su allier tradition et modernité. Résultat exceptionnel, nous sommes ravis !',
      date: '28 avril 2024',
      service: 'Charpente traditionnelle'
    },
    {
      initials: 'SB',
      name: 'Sandrine B.',
      location: 'Coulaines',
      stars: '★★★★★',
      text: 'Réparation de toiture après intempéries. Intervention rapide, diagnostic précis. Les réparations sont solides et durables. Équipe professionnelle et à l\'écoute. Je recommande vivement !',
      date: '15 avril 2024',
      service: 'Réparation de toiture'
    },
    {
      initials: 'DL',
      name: 'David L.',
      location: 'Le Mans',
      stars: '★★★★★',
      text: 'Isolation et étanchéité de toiture terrasse. Travail soigné, matériaux de qualité. L\'isolation est efficace et l\'étanchéité parfaite. Confort amélioré et économies d\'énergie au rendez-vous !',
      date: '5 mars 2024',
      service: 'Isolation et étanchéité'
    }
  ]

  // État pour les avis (avec localStorage pour la persistance)
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem('reviews')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return initialTestimonials
      }
    }
    return initialTestimonials
  })

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(testimonials))
  }, [testimonials])

  // État pour le formulaire d'ajout d'avis
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    location: 'Le Mans',
    rating: 5,
    text: '',
    service: ''
  })
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  // Gestion du changement dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim() || !formData.text.trim() || !formData.service.trim()) {
      setSubmitStatus({ type: 'error', message: 'Veuillez remplir tous les champs obligatoires.' })
      return
    }

    if (formData.text.trim().length < 20) {
      setSubmitStatus({ type: 'error', message: 'Votre avis doit contenir au moins 20 caractères.' })
      return
    }

    // Créer le nouvel avis
    const newReview = {
      initials: getInitials(formData.name),
      name: formData.name.trim(),
      location: formData.location.trim() || 'Le Mans',
      stars: '★'.repeat(formData.rating) + '☆'.repeat(5 - formData.rating),
      text: formData.text.trim(),
      date: getCurrentDate(),
      service: formData.service.trim()
    }

    // Ajouter l'avis à la liste (au début)
    setTestimonials(prev => [newReview, ...prev])
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      location: 'Le Mans',
      rating: 5,
      text: '',
      service: ''
    })
    
    setSubmitStatus({ type: 'success', message: 'Merci pour votre avis ! Il a été ajouté avec succès.' })
    setShowForm(false)
    
    // Réinitialiser le message après 5 secondes
    setTimeout(() => {
      setSubmitStatus({ type: '', message: '' })
    }, 5000)
  }

  const externalReviews = [
    { logo: '⭐', name: 'Google', rating: '4.9/5', stars: '★★★★★', count: '247 avis clients' },
    { logo: '📞', name: 'Pages Jaunes', rating: '4.8/5', stars: '★★★★★', count: '189 avis clients' },
    { logo: '💼', name: 'Qualitravaux', rating: '4.9/5', stars: '★★★★★', count: '156 avis clients' }
  ]

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Avis clients</h1>
          <p>98% de nos clients sont satisfaits de nos prestations</p>
        </div>
      </section>

      <section className="rating-summary section">
        <div className="container">
          <div className="rating-overview">
            <div className="rating-main">
              <div className="rating-score">4.9</div>
              <div className="rating-stars-large">★★★★★</div>
              <div className="rating-count">Basé sur 247 avis clients</div>
            </div>
            <div className="rating-breakdown">
              <div className="rating-bar-item">
                <span>5 étoiles</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: '94%' }}></div>
                </div>
                <span>94%</span>
              </div>
              <div className="rating-bar-item">
                <span>4 étoiles</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: '4%' }}></div>
                </div>
                <span>4%</span>
              </div>
              <div className="rating-bar-item">
                <span>3 étoiles</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: '1%' }}></div>
                </div>
                <span>1%</span>
              </div>
              <div className="rating-bar-item">
                <span>2 étoiles</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: '0.5%' }}></div>
                </div>
                <span>0.5%</span>
              </div>
              <div className="rating-bar-item">
                <span>1 étoile</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: '0.5%' }}></div>
                </div>
                <span>0.5%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-page section bg-light">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Tous nos avis clients</h2>
            <button 
              onClick={() => setShowForm(!showForm)} 
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              {showForm ? 'Annuler' : '➕ Ajouter un avis'}
            </button>
          </div>

          {submitStatus.message && (
            <div 
              className={`submit-status ${submitStatus.type}`}
              style={{
                padding: '1rem',
                marginBottom: '2rem',
                borderRadius: '0.5rem',
                backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
              }}
            >
              {submitStatus.message}
            </div>
          )}

          {showForm && (
            <div className="add-review-form" style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '0.75rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#1a1a1a' }}>Partagez votre expérience</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                    placeholder="Votre nom"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="location" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Localisation
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                    placeholder="Ville (ex: Le Mans)"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="rating" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Note *
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  >
                    <option value={5}>5 étoiles - Excellent</option>
                    <option value={4}>4 étoiles - Très bien</option>
                    <option value={3}>3 étoiles - Bien</option>
                    <option value={2}>2 étoiles - Moyen</option>
                    <option value={1}>1 étoile - Insuffisant</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="service" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Service concerné *
                  </label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                    placeholder="Ex: Rénovation complète, Pose de toiture..."
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="text" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Votre avis *
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    required
                    rows="5"
                    minLength="20"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                    placeholder="Partagez votre expérience (minimum 20 caractères)..."
                  />
                  <small style={{ color: '#757575', marginTop: '0.25rem', display: 'block' }}>
                    {formData.text.length}/20 caractères minimum
                  </small>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Publier mon avis
                </button>
              </form>
            </div>
          )}

          <div className="testimonials-list">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-full">
                <div className="testimonial-header">
                  <div className="testimonial-author-info">
                    <div className="testimonial-avatar">{testimonial.initials}</div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span className="testimonial-location">{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="testimonial-stars">{testimonial.stars}</div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-meta">
                  <span className="testimonial-date">{testimonial.date}</span>
                  <span className="testimonial-service">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="external-reviews section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos avis sur les plateformes</h2>
            <p className="section-subtitle">Consultez également nos avis sur Google et Pages Jaunes</p>
          </div>
          <div className="external-reviews-grid">
            {externalReviews.map((review, index) => (
              <div key={index} className="external-review-card">
                <div className="external-review-logo">{review.logo}</div>
                <h3>{review.name}</h3>
                <div className="external-review-rating">{review.rating}</div>
                <div className="external-review-stars">{review.stars}</div>
                <p>{review.count}</p>
                <a href="#" className="btn btn-outline">Voir sur {review.name}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Rejoignez nos clients satisfaits"
        subtitle="Contactez-nous pour votre projet de toiture et obtenez un devis gratuit"
      />
    </>
  )
}

export default Reviews

