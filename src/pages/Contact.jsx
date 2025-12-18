import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    urgency: 'normal',
    message: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.service || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Veuillez remplir tous les champs obligatoires.' })
      setIsSubmitting(false)
      return
    }

    if (!formData.consent) {
      setSubmitStatus({ type: 'error', message: 'Veuillez accepter l\'utilisation de vos données.' })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Veuillez entrer une adresse email valide.' })
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form data:', formData)
      setSubmitStatus({ type: 'success', message: 'Merci pour votre demande ! Nous vous recontacterons sous 24h.' })
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        service: '',
        urgency: 'normal',
        message: '',
        consent: false
      })
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Une erreur est survenue. Veuillez réessayer.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p>Demandez votre devis gratuit et sans engagement</p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2>Demandez votre devis gratuit</h2>
              <p className="form-intro">
                Remplissez le formulaire ci-dessous et nous vous recontacterons sous 24h pour discuter de votre projet.
              </p>

              {submitStatus && (
                <div className={`submit-message ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom et prénom *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Adresse</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Rue, Code postal, Ville"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Type de travaux *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="pose">Pose de toiture</option>
                    <option value="reparation">Réparation de toiture</option>
                    <option value="renovation">Rénovation complète</option>
                    <option value="gouttieres">Pose/réparation de gouttières</option>
                    <option value="demoussage">Démoussage et traitement</option>
                    <option value="isolation">Isolation sous toiture</option>
                    <option value="etancheite">Étanchéité</option>
                    <option value="zinguerie">Zinguerie</option>
                    <option value="urgence">Travaux d'urgence</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="urgency">Urgence</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option value="normal">Normale (sous 1 mois)</option>
                    <option value="urgent">Urgente (sous 1 semaine)</option>
                    <option value="very-urgent">Très urgente (sous 48h)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Décrivez votre projet *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre projet, la surface de votre toiture, le type de bâtiment, etc."
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                    />
                    <span>J'accepte que mes données soient utilisées pour me recontacter *</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </button>
              </form>
            </div>

            <div className="contact-info-wrapper">
              <h2>Nos coordonnées</h2>

              <div className="contact-info-card">
                <div className="contact-info-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h3>Adresse</h3>
                    <p>LE TILLEUL<br />72560 Changé, Sarthe</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h3>Téléphone</h3>
                    <p><a href="tel:+33750398368">07 50 39 83 68</a></p>
                    <p className="contact-note">Urgences 24/7 : <a href="tel:+33750398368">07 50 39 83 68</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:JORY.BATIMENT@GMAIL.COM">JORY.BATIMENT@GMAIL.COM</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">🕐</div>
                  <div>
                    <h3>Horaires</h3>
                    <p>Lundi - Vendredi : 8h - 18h<br />Samedi : 9h - 12h<br />Dimanche : Fermé</p>
                  </div>
                </div>
              </div>

              <div className="zone-intervention">
                <h3>Zone d'intervention</h3>
                <p>Nous intervenons dans toute la Sarthe (72) :</p>
                <ul className="zone-list">
                  <li>Le Mans et ses environs</li>
                  <li>Changé</li>
                  <li>Allonnes</li>
                  <li>Sablé-sur-Sarthe</li>
                  <li>La Flèche</li>
                  <li>Mamers</li>
                  <li>Et toute la Sarthe (72)</li>
                </ul>
              </div>

              <div className="contact-cta">
                <h3>Besoin d'une intervention urgente ?</h3>
                <p>Appelez-nous directement pour une intervention rapide</p>
                <a href="tel:+33750398368" className="btn btn-primary">📞 Appeler maintenant</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Notre localisation</h2>
          <div className="map-placeholder">
            <p>📍 LE TILLEUL, 72560 Changé, Sarthe</p>
            <p className="map-note">Carte interactive (à intégrer avec Google Maps ou OpenStreetMap)</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

