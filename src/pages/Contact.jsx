import React, { useState } from 'react'
import { validateEmail, validatePhone, validateName, validateText, cleanFormData } from '../utils/security'
import { sendContactEmail } from '../utils/emailService'

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
    // Limiter la longueur des inputs pour éviter les attaques
    let sanitizedValue = value
    if (type === 'text' || type === 'email' || type === 'tel') {
      const maxLengths = {
        name: 50,
        phone: 20,
        email: 254,
        address: 200,
        message: 5000
      }
      if (maxLengths[name]) {
        sanitizedValue = value.slice(0, maxLengths[name])
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : sanitizedValue
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Nettoyer les données
    const cleanedData = cleanFormData(formData)

    // Validation des champs obligatoires
    if (!cleanedData.name || !cleanedData.phone || !cleanedData.email || !cleanedData.service || !cleanedData.message) {
      setSubmitStatus({ type: 'error', message: 'Veuillez remplir tous les champs obligatoires.' })
      setIsSubmitting(false)
      return
    }

    if (!cleanedData.consent) {
      setSubmitStatus({ type: 'error', message: 'Veuillez accepter l\'utilisation de vos données.' })
      setIsSubmitting(false)
      return
    }

    // Validation sécurisée
    if (!validateName(cleanedData.name)) {
      setSubmitStatus({ type: 'error', message: 'Le nom doit contenir entre 2 et 50 caractères et ne peut contenir que des lettres, espaces, tirets et apostrophes.' })
      setIsSubmitting(false)
      return
    }

    if (!validateEmail(cleanedData.email)) {
      setSubmitStatus({ type: 'error', message: 'Veuillez entrer une adresse email valide.' })
      setIsSubmitting(false)
      return
    }

    if (!validatePhone(cleanedData.phone)) {
      setSubmitStatus({ type: 'error', message: 'Veuillez entrer un numéro de téléphone français valide (10 chiffres).' })
      setIsSubmitting(false)
      return
    }

    const textValidation = validateText(cleanedData.message, 20, 5000)
    if (!textValidation.valid) {
      setSubmitStatus({ type: 'error', message: textValidation.error })
      setIsSubmitting(false)
      return
    }

    // Envoyer l'email avec toutes les informations via EmailJS/Maildrop
    try {
      const emailResult = await sendContactEmail(cleanedData)
      
      if (emailResult.success) {
        setSubmitStatus({ type: 'success', message: 'Merci pour votre demande ! Nous vous recontacterons sous 24h.' })
        // Réinitialiser le formulaire après succès
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
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: emailResult.message || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.' 
        })
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
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
                    <option value="pose">Charpente</option>
                    <option value="fenetres">Fenêtres de toit</option>
                    <option value="zinguerie">Zinguerie</option>
                    <option value="renovation">Couverture</option>
                    <option value="demoussage">Entretien & Démoussage</option>
                    <option value="etancheite">Étanchéité & Isolation</option>
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
                  <div className="contact-icon"></div>
                  <div>
                    <h3>Adresse</h3>
                    <p>LE TILLEUL<br />72560 Changé, Sarthe</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon"></div>
                  <div>
                    <h3>Téléphone</h3>
                    <p><a href="tel:+33750398368">07 50 39 83 68</a></p>
                    <h3 style={{ marginTop: '1rem' }}>Urgences 24h/24 7j/7</h3>
                    <p><a href="tel:+33750398368">07 50 39 83 68</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon"></div>
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:JORY.BATIMENT@GMAIL.COM">JORY.BATIMENT@GMAIL.COM</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon"></div>
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
                <p style={{ color: 'white' }}>Appelez-nous directement pour une intervention rapide</p>
                <a href="tel:+33750398368" className="btn btn-primary">Appeler maintenant</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

