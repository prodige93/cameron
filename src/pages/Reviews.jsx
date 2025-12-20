import React from 'react'
import CTASection from '../components/CTASection'

const Reviews = () => {
  const testimonials = [
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
    }
  ]

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

