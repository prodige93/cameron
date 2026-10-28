import React from 'react'

// Destinataire et motif par défaut de l'email de demande de devis
const QUOTE_EMAIL_RECIPIENT = 'alexandre.jory@gmail.com'
const QUOTE_EMAIL_SUBJECT = 'Demande de Devis'

const QUOTE_MAILTO_URL = `mailto:${QUOTE_EMAIL_RECIPIENT}?subject=${encodeURIComponent(QUOTE_EMAIL_SUBJECT)}`

const zones = [
  'Le Mans et ses environs',
  'Changé',
  'Allonnes',
  'Sablé-sur-Sarthe',
  'La Flèche',
  'Mamers',
  'Toute la Sarthe (72)'
]

const Contact = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Couvreur Le Mans - Devis Gratuit 24/7 | JORY CHARPENTE</h1>
          <p>Contactez votre couvreur au Mans. Devis gratuit sous 24h pour réparation toiture, charpente, zinguerie. Intervention urgente 24h/24 au 06 29 20 50 36.</p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container contact-page">
          {/* Informations de contact */}
          <div className="contact-page-cards">
            <div className="contact-page-card">
              <div className="contact-page-icon" aria-hidden="true">📍</div>
              <h3>Adresse</h3>
              <p>12 rue de l'activité<br />72000 Le Mans, Sarthe</p>
            </div>

            <div className="contact-page-card">
              <div className="contact-page-icon" aria-hidden="true">📞</div>
              <h3>Téléphone</h3>
              <p><a href="tel:+33629205036">06 29 20 50 36</a></p>
              <p className="contact-page-note">Urgences 24h/24 - 7j/7</p>
            </div>

            <div className="contact-page-card">
              <div className="contact-page-icon" aria-hidden="true">✉️</div>
              <h3>Email</h3>
              <p><a href="mailto:alexandre.jory@gmail.com">alexandre.jory@gmail.com</a></p>
            </div>

            <div className="contact-page-card">
              <div className="contact-page-icon" aria-hidden="true">🕒</div>
              <h3>Horaires</h3>
              <p>Lundi - Vendredi : 8h - 18h<br />Samedi : 9h - 12h<br />Dimanche : Fermé</p>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div className="contact-page-zone">
            <h3>Zone d'intervention</h3>
            <ul className="contact-page-chips">
              {zones.map((zone) => (
                <li key={zone}>{zone}</li>
              ))}
            </ul>
          </div>

          {/* Bouton de demande de devis */}
          <div className="contact-page-quote">
            <a href={QUOTE_MAILTO_URL} className="btn-quote-email">
              <svg
                className="btn-quote-email-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              <span className="btn-quote-email-text">
                <strong>Demande de Devis Gratuit et Rapide</strong>
                <small>Envoi par email · Réponse sous 24h</small>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
