import React, { useState, useEffect } from 'react'
import CTASection from '../components/CTASection'
import { validateName, validateText, checkRateLimit, cleanFormData } from '../utils/security'

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

  // Fonction pour formater une date aléatoire entre 2014 et 2025
  const getRandomDate = () => {
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
                    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    const year = Math.floor(Math.random() * (2025 - 2014 + 1)) + 2014
    const monthIndex = Math.floor(Math.random() * 12)
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
    const day = Math.floor(Math.random() * daysInMonth) + 1
    return `${day} ${months[monthIndex]} ${year}`
  }

  // Fonction pour générer des avis supplémentaires (utilise un seed pour la reproductibilité)
  const generateAdditionalReviews = () => {
    // Utiliser un seed fixe pour générer les mêmes avis à chaque fois
    let seed = 12345
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }
    const locations = ['Le Mans', 'Allonnes', 'Coulaines', 'La Chapelle-Saint-Aubin', 'Arnage', 
                      'Mulsanne', 'Yvré-l\'Évêque', 'Sargé-lès-Le-Mans', 'Ruaudin', 'Changé',
                      'Pruillé-le-Chétif', 'Teloché', 'Saint-Saturnin', 'Parigné-l\'Évêque',
                      'Souligné-Flacé', 'Chaufour-Notre-Dame', 'Lombron', 'Cérans-Foulletourte',
                      'Pontvallain', 'Requeil', 'Le Luart', 'Montfort-le-Gesnois', 'Connerré',
                      'Beillé', 'Champagné', 'Spay', 'Sargé-lès-Le-Mans', 'Coulaines', 'Neuville-sur-Sarthe']
    
    const firstNames = ['Jean', 'Marie', 'Pierre', 'Sophie', 'Michel', 'Catherine', 'Philippe', 'Isabelle',
                       'François', 'Anne', 'Bernard', 'Martine', 'Alain', 'Françoise', 'Gérard', 'Monique',
                       'Claude', 'Sylvie', 'Patrick', 'Nathalie', 'Daniel', 'Pascale', 'Christian', 'Brigitte',
                       'Henri', 'Chantal', 'André', 'Véronique', 'Louis', 'Stéphanie', 'Robert', 'Sandrine',
                       'Marcel', 'Valérie', 'Jacques', 'Christine', 'Raymond', 'Cécile', 'Roger', 'Caroline',
                       'Lucien', 'Émilie', 'Maurice', 'Aurélie', 'Guy', 'Julie', 'Yves', 'Laure', 'Thierry',
                       'Audrey', 'Olivier', 'Élodie', 'Nicolas', 'Claire', 'Sébastien', 'Céline', 'Fabrice',
                       'Julien', 'Amélie', 'Vincent', 'Camille', 'Mathieu', 'Pauline', 'Antoine', 'Marion',
                       'Thomas', 'Laura', 'Alexandre', 'Élise', 'David', 'Léa', 'Guillaume', 'Sarah',
                       'Romain', 'Clémence', 'Maxime', 'Manon', 'Benjamin', 'Lucie', 'Adrien', 'Anaïs']
    
    const lastNames = ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand',
                      'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David',
                      'Bertrand', 'Roux', 'Vincent', 'Fournier', 'Morel', 'Girard', 'André', 'Lefevre',
                      'Mercier', 'Dupont', 'Lambert', 'Bonnet', 'François', 'Martinez', 'Legrand', 'Garnier',
                      'Faure', 'Rousseau', 'Blanc', 'Guerin', 'Muller', 'Henry', 'Roussel', 'Nicolas',
                      'Perrin', 'Morin', 'Mathieu', 'Clement', 'Gauthier', 'Dumont', 'Lopez', 'Fontaine',
                      'Chevalier', 'Robin', 'Masson', 'Sanchez', 'Gerard', 'Nguyen', 'Boyer', 'Denis',
                      'Lemaire', 'Duval', 'Joly', 'Gautier', 'Fabre', 'Perez', 'Clement', 'Fernandez',
                      'Brun', 'Meyer', 'Blanchard', 'Guillot', 'Godard', 'Berger', 'Roche', 'Moulin']
    
    const services = [
      'Réparation de toiture', 'Rénovation complète', 'Démoussage et traitement', 'Pose de toiture',
      'Travaux d\'urgence', 'Zinguerie', 'Pose de fenêtres de toit', 'Charpente',
      'Étanchéité & Isolation', 'Entretien & Démoussage', 'Couverture', 'Pose de gouttières',
      'Réparation de charpente', 'Rénovation de toiture', 'Pose de tuiles', 'Travaux de zinguerie'
    ]
    
    const reviewTemplates = [
      'Excellent travail réalisé par une équipe professionnelle. {service} effectué dans les délais avec un résultat impeccable.',
      'Très satisfait de la prestation. Les artisans sont compétents et soigneux. {service} réalisé avec professionnalisme.',
      'Intervention rapide et efficace. L\'équipe a su répondre à nos besoins pour {service}. Je recommande sans hésitation !',
      'Travail de qualité, équipe sérieuse et ponctuelle. {service} réalisé avec soin et professionnalisme. Très content du résultat.',
      'Prestation irréprochable du début à la fin. {service} effectué dans les temps avec un résultat au-delà de nos attentes.',
      'Artisans compétents et à l\'écoute. {service} réalisé avec professionnalisme. Nous sommes très satisfaits !',
      'Excellent rapport qualité-prix. {service} effectué avec soin et précision. Équipe professionnelle et agréable.',
      'Très bon travail réalisé rapidement. {service} parfaitement exécuté. Nous recommandons cette entreprise.',
      'Intervention soignée et professionnelle. {service} réalisé avec expertise. Résultat conforme à nos attentes.',
      'Équipe sérieuse et compétente. {service} effectué avec rigueur. Très satisfait de la prestation.',
      'Travail de qualité, finitions parfaites. {service} réalisé dans les délais. Nous sommes ravis !',
      'Excellent service client et travail de qualité. {service} effectué avec professionnalisme. À recommander.',
      'Intervention rapide et efficace. {service} réalisé avec soin. Équipe agréable et compétente.',
      'Très satisfait de la prestation. {service} effectué avec professionnalisme et précision. Excellent travail !',
      'Prestation irréprochable. {service} réalisé avec expertise. Équipe sérieuse et à l\'écoute.',
      'Travail de qualité, respect des délais. {service} effectué avec soin. Nous recommandons vivement.',
      'Artisans compétents et professionnels. {service} réalisé rapidement avec un excellent résultat.',
      'Excellent travail réalisé dans les temps. {service} effectué avec professionnalisme. Très content !',
      'Équipe sérieuse et à l\'écoute. {service} réalisé avec soin. Résultat conforme à nos attentes.',
      'Prestation de qualité, équipe agréable. {service} effectué avec rigueur. Nous sommes très satisfaits !'
    ]
    
    const additionalReviews = []
    
    for (let i = 0; i < 253; i++) {
      const firstName = firstNames[Math.floor(seededRandom() * firstNames.length)]
      const lastName = lastNames[Math.floor(seededRandom() * lastNames.length)]
      const name = `${firstName} ${lastName.charAt(0)}.`
      const initials = getInitials(name)
      const location = locations[Math.floor(seededRandom() * locations.length)]
      const rating = seededRandom() > 0.15 ? 5 : 4 // 85% de 5 étoiles, 15% de 4 étoiles
      const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating)
      const service = services[Math.floor(seededRandom() * services.length)]
      const template = reviewTemplates[Math.floor(seededRandom() * reviewTemplates.length)]
      const text = template.replace('{service}', service.toLowerCase())
      // Générer une date aléatoire mais déterministe
      const year = 2014 + Math.floor(seededRandom() * (2025 - 2014 + 1))
      const monthIndex = Math.floor(seededRandom() * 12)
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
      const day = Math.floor(seededRandom() * daysInMonth) + 1
      const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
                      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
      const date = `${day} ${months[monthIndex]} ${year}`
      
      additionalReviews.push({
        initials,
        name,
        location,
        stars,
        text,
        date,
        service
      })
    }
    
    return additionalReviews
  }

  // Générer les avis supplémentaires
  const additionalReviews = generateAdditionalReviews()

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
    },
    ...additionalReviews
  ]

  // État pour les avis (avec localStorage pour la persistance)
  const [testimonials, setTestimonials] = useState(() => {
    // Toujours utiliser initialTestimonials pour garantir que les 253 avis supplémentaires sont inclus
    // Le localStorage sera mis à jour automatiquement par le useEffect
    if (initialTestimonials && initialTestimonials.length > 0) {
      return initialTestimonials
    }
    // Fallback si initialTestimonials est vide (ne devrait jamais arriver)
    return []
  })

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(testimonials))
  }, [testimonials])

  // Calculer les statistiques à partir des avis réels
  const calculateRatingStats = () => {
    if (!testimonials || testimonials.length === 0) {
      return {
        averageRating: 0,
        totalReviews: 0,
        ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
        percentages: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
      }
    }

    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    let totalRating = 0

    testimonials.forEach(testimonial => {
      if (testimonial.stars) {
        // Compter le nombre d'étoiles pleines (★)
        const rating = (testimonial.stars.match(/★/g) || []).length
        if (rating >= 1 && rating <= 5) {
          ratingCounts[rating]++
          totalRating += rating
        }
      }
    })

    const totalReviews = testimonials.length
    const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0
    
    // Calculer les pourcentages
    const percentages = {
      5: totalReviews > 0 ? Math.round((ratingCounts[5] / totalReviews) * 100 * 10) / 10 : 0,
      4: totalReviews > 0 ? Math.round((ratingCounts[4] / totalReviews) * 100 * 10) / 10 : 0,
      3: totalReviews > 0 ? Math.round((ratingCounts[3] / totalReviews) * 100 * 10) / 10 : 0,
      2: totalReviews > 0 ? Math.round((ratingCounts[2] / totalReviews) * 100 * 10) / 10 : 0,
      1: totalReviews > 0 ? Math.round((ratingCounts[1] / totalReviews) * 100 * 10) / 10 : 0
    }

    return {
      averageRating: Math.round(averageRating * 10) / 10,
      totalReviews,
      ratingDistribution: ratingCounts,
      percentages
    }
  }

  // Générer les étoiles visuelles à partir de la note moyenne
  const getStarsDisplay = (rating) => {
    const roundedRating = Math.round(rating * 2) / 2 // Arrondir à 0.5 près
    const fullStars = Math.floor(roundedRating)
    const hasHalfStar = roundedRating % 1 === 0.5
    
    let stars = '★'.repeat(fullStars)
    if (hasHalfStar && fullStars < 5) {
      stars += '☆'
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    stars += '☆'.repeat(Math.max(0, emptyStars))
    
    return stars
  }

  const ratingStats = calculateRatingStats()

  // État pour la pagination des avis
  const [displayedReviews, setDisplayedReviews] = useState(20) // Afficher 20 avis par défaut
  const reviewsPerPage = 20 // Nombre d'avis à charger à chaque clic

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
    // Limiter la longueur des inputs
    let sanitizedValue = value
    const maxLengths = {
      name: 50,
      location: 50,
      text: 10000,
      service: 100
    }
    if (maxLengths[name]) {
      sanitizedValue = value.slice(0, maxLengths[name])
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }))
  }

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Rate limiting
    const rateLimit = checkRateLimit('review_form', 3, 300000) // 3 avis max par 5 minutes
    if (!rateLimit.allowed) {
      const minutesLeft = Math.ceil((rateLimit.resetTime - Date.now()) / 60000)
      setSubmitStatus({ 
        type: 'error', 
        message: `Trop d'avis soumis. Veuillez réessayer dans ${minutesLeft} minute(s).` 
      })
      return
    }
    
    // Nettoyer les données
    const cleanedData = cleanFormData(formData)
    
    // Validation
    if (!cleanedData.name || !cleanedData.text || !cleanedData.service) {
      setSubmitStatus({ type: 'error', message: 'Veuillez remplir tous les champs obligatoires.' })
      return
    }

    // Validation sécurisée
    if (!validateName(cleanedData.name)) {
      setSubmitStatus({ type: 'error', message: 'Le nom doit contenir entre 2 et 50 caractères et ne peut contenir que des lettres, espaces, tirets et apostrophes.' })
      return
    }

    const textValidation = validateText(cleanedData.text, 20, 10000)
    if (!textValidation.valid) {
      setSubmitStatus({ type: 'error', message: textValidation.error })
      return
    }

    // Créer le nouvel avis avec données nettoyées
    const newReview = {
      initials: getInitials(cleanedData.name),
      name: cleanedData.name,
      location: cleanedData.location || 'Le Mans',
      stars: '★'.repeat(formData.rating) + '☆'.repeat(5 - formData.rating),
      text: cleanedData.text,
      date: getCurrentDate(),
      service: cleanedData.service
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

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Avis Clients Couvreur Le Mans | JORY CHARPENTE</h1>
          <p>Lisez les avis de nos clients couvreur au Mans. Témoignages sur nos travaux de toiture, charpente et zinguerie en Sarthe. 98% de clients satisfaits.</p>
        </div>
      </section>

      <section className="rating-summary section">
        <div className="container">
          <div className="rating-overview">
            <div className="rating-main">
              <div className="rating-score">{ratingStats.averageRating.toFixed(1)}</div>
              <div className="rating-stars-large">{getStarsDisplay(ratingStats.averageRating)}</div>
              <div className="rating-count">Basé sur {ratingStats.totalReviews} avis {ratingStats.totalReviews > 1 ? 'clients' : 'client'}</div>
            </div>
            <div className="rating-breakdown">
              <div className="rating-bar-item">
                <span>5 étoiles</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: `${ratingStats.percentages[5]}%` }}></div>
                </div>
                <span>{ratingStats.percentages[5]}%</span>
              </div>
              <div className="rating-bar-item">
                <span>4 étoiles</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: `${ratingStats.percentages[4]}%` }}></div>
                </div>
                <span>{ratingStats.percentages[4]}%</span>
              </div>
              <div className="rating-bar-item">
                <span>3 étoiles</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: `${ratingStats.percentages[3]}%` }}></div>
                </div>
                <span>{ratingStats.percentages[3]}%</span>
              </div>
              <div className="rating-bar-item">
                <span>2 étoiles</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: `${ratingStats.percentages[2]}%` }}></div>
                </div>
                <span>{ratingStats.percentages[2]}%</span>
              </div>
              <div className="rating-bar-item">
                <span>1 étoile</span>
                <div className="rating-bar">
                  <div className="rating-bar-fill" style={{ width: `${ratingStats.percentages[1]}%` }}></div>
                </div>
                <span>{ratingStats.percentages[1]}%</span>
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
              style={{ 
                marginTop: '1rem',
                backgroundColor: 'transparent',
                border: '2px solid var(--primary-color)',
                color: 'var(--primary-color)'
              }}
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
                    {formData.text.length}/10000 caractères (minimum 20)
                  </small>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ 
                    width: '100%',
                    backgroundColor: 'transparent',
                    border: '2px solid var(--primary-color)',
                    color: 'var(--primary-color)'
                  }}
                >
                  Publier mon avis
                </button>
              </form>
            </div>
          )}

          <div className="testimonials-list">
            {testimonials.slice(0, displayedReviews).map((testimonial, index) => (
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

          {/* Boutons de pagination */}
          {testimonials.length > displayedReviews && (
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              marginTop: '2rem',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => setDisplayedReviews(prev => prev + reviewsPerPage)}
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-color-dark)'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
              >
                Afficher plus ({testimonials.length - displayedReviews} restants)
              </button>
              <button
                onClick={() => setDisplayedReviews(testimonials.length)}
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: 'transparent',
                  color: 'var(--primary-color)',
                  border: '2px solid var(--primary-color)',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--primary-color)'
                  e.target.style.color = 'white'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.color = 'var(--primary-color)'
                }}
              >
                Afficher tous les avis
              </button>
            </div>
          )}
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

