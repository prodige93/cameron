/**
 * Service d'envoi d'email utilisant EmailJS (compatible avec Maildrop et autres services)
 */

// Configuration - À modifier avec vos identifiants EmailJS
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL || 'JORY.BATIMENT@GMAIL.COM'

/**
 * Envoie un email via EmailJS avec toutes les informations du formulaire de contact
 * @param {object} formData - Les données du formulaire de contact
 * @returns {Promise<object>} - Résultat de l'envoi
 */
export const sendContactEmail = async (formData) => {
  try {
    // Vérifier si EmailJS est disponible
    if (typeof window.emailjs === 'undefined') {
      // Charger EmailJS dynamiquement
      await loadEmailJS()
    }

    // Préparer les données pour l'email avec toutes les informations
    const emailData = {
      to_email: RECIPIENT_EMAIL,
      from_name: formData.name || 'Non spécifié',
      from_email: formData.email || 'Non spécifié',
      phone: formData.phone || 'Non spécifié',
      address: formData.address || 'Non spécifié',
      service: getServiceLabel(formData.service) || 'Non spécifié',
      urgency: getUrgencyLabel(formData.urgency) || 'Normale',
      message: formData.message || 'Aucun message',
      date: new Date().toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    // Préparer le message complet avec toutes les informations formatées
    const fullMessage = `
Nouvelle demande de contact

Informations du client:
- Nom et prénom: ${emailData.from_name}
- Email: ${emailData.from_email}
- Téléphone: ${emailData.phone}
- Adresse: ${emailData.address}

Détails de la demande:
- Type de travaux: ${emailData.service}
- Urgence: ${emailData.urgency}
- Date de la demande: ${emailData.date}

Message:
${emailData.message}

---
Ce message a été envoyé depuis le formulaire de contact du site web.
    `.trim()

    // Envoyer l'email via EmailJS avec toutes les informations
    const response = await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: RECIPIENT_EMAIL,
        from_name: emailData.from_name,
        from_email: emailData.from_email,
        phone: emailData.phone,
        address: emailData.address,
        service: emailData.service,
        urgency: emailData.urgency,
        message: emailData.message, // Message original de l'utilisateur
        full_message: fullMessage, // Message complet formaté (pour template alternatif)
        date: emailData.date,
        reply_to: emailData.from_email
      },
      EMAILJS_PUBLIC_KEY
    )

    return {
      success: true,
      message: 'Email envoyé avec succès',
      response: response
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return {
      success: false,
      message: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.',
      error: error.message || error.text || 'Erreur inconnue'
    }
  }
}

/**
 * Envoie un email de confirmation d'abonnement newsletter
 * @param {string} email - L'email de l'utilisateur
 * @returns {Promise<object>} - Résultat de l'envoi
 */
export const sendNewsletterSubscription = async (email) => {
  try {
    // Vérifier si EmailJS est disponible
    if (typeof window.emailjs === 'undefined') {
      await loadEmailJS()
    }

    const emailData = {
      to_email: RECIPIENT_EMAIL,
      subscriber_email: email,
      subscription_date: new Date().toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    const notificationMessage = `
Nouvel abonnement à la newsletter

Email de l'abonné: ${emailData.subscriber_email}
Date d'abonnement: ${emailData.subscription_date}

---
Ce message a été envoyé depuis le formulaire d'abonnement du site web.
    `.trim()

    // Envoyer une notification à l'administrateur
    await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: RECIPIENT_EMAIL,
        from_email: emailData.subscriber_email,
        message: notificationMessage,
        subject: 'Nouvel abonnement newsletter'
      },
      EMAILJS_PUBLIC_KEY
    )

    return {
      success: true,
      message: 'Abonnement réussi'
    }
  } catch (error) {
    console.error('Erreur lors de l\'abonnement:', error)
    return {
      success: false,
      message: 'Erreur lors de l\'abonnement. Veuillez réessayer.',
      error: error.message || error.text || 'Erreur inconnue'
    }
  }
}

/**
 * Charge dynamiquement la bibliothèque EmailJS
 */
const loadEmailJS = () => {
  return new Promise((resolve, reject) => {
    // Vérifier si EmailJS est déjà chargé
    if (typeof window.emailjs !== 'undefined') {
      resolve()
      return
    }

    // Charger le script EmailJS
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    script.onload = () => {
      // Initialiser EmailJS avec la clé publique
      window.emailjs.init(EMAILJS_PUBLIC_KEY)
      resolve()
    }
    script.onerror = () => {
      reject(new Error('Impossible de charger EmailJS'))
    }
    document.head.appendChild(script)
  })
}

/**
 * Convertit le code de service en libellé lisible
 */
const getServiceLabel = (serviceCode) => {
  const services = {
    pose: 'Pose de toiture',
    reparation: 'Réparation de toiture',
    renovation: 'Rénovation complète',
    demoussage: 'Démoussage et traitement',
    etancheite: 'Étanchéité',
    zinguerie: 'Zinguerie',
    urgence: 'Travaux d\'urgence',
    autre: 'Autre'
  }
  return services[serviceCode] || serviceCode
}

/**
 * Convertit le code d'urgence en libellé lisible
 */
const getUrgencyLabel = (urgencyCode) => {
  const urgencies = {
    normal: 'Normale (sous 1 mois)',
    urgent: 'Urgente (sous 1 semaine)',
    'very-urgent': 'Très urgente (sous 48h)'
  }
  return urgencies[urgencyCode] || urgencyCode
}

/**
 * Valide la configuration EmailJS
 */
export const validateEmailConfig = () => {
  const missing = []
  if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
    missing.push('EMAILJS_SERVICE_ID')
  }
  if (!EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
    missing.push('EMAILJS_TEMPLATE_ID')
  }
  if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    missing.push('EMAILJS_PUBLIC_KEY')
  }
  return {
    valid: missing.length === 0,
    missing: missing
  }
}

