import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CTASection from '../components/CTASection'

const Services = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroller vers l'ancre si présente dans l'URL
    if (location.hash) {
      const hash = location.hash.substring(1) // Enlever le #
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const headerOffset = 80 // Hauteur du header
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [location])
  const services = [
    {
      id: 'pose',
      badge: 'Service principal',
      title: 'Charpente',
      intro: 'Installation complète de toitures neuves avec expertise et savoir-faire artisanal. Nous maîtrisons tous les matériaux de couverture pour répondre à vos besoins esthétiques et budgétaires.',
      features: [
        'Pose de tuiles (terre cuite, béton, ardoise)',
        'Installation de toitures en zinc',
        'Pose de shingle (bardeaux bitumineux)',
        'Toitures métalliques (tôle, acier)',
        'Toitures végétalisées',
        'Charpente et couverture complète'
      ],
      process: [
        { step: 'Diagnostic et étude', desc: 'Analyse de votre projet et de vos contraintes' },
        { step: 'Conseil en matériaux', desc: 'Recommandation adaptée à votre région et budget' },
        { step: 'Devis détaillé', desc: 'Estimation précise avec choix de matériaux' },
        { step: 'Pose professionnelle', desc: 'Installation par nos artisans qualifiés' },
        { step: 'Garantie décennale', desc: 'Protection complète de votre investissement' }
      ],
      image: '/images/realisation-charpente-construction.jpeg'
    },
    {
      id: 'fenetres',
      badge: 'Fenêtres de toit',
      title: 'Fenêtres de toit',
      intro: 'Pose, remplacement et création de fenêtres de toit (Velux). Apport de lumière naturelle et amélioration du confort de votre habitation.',
      features: [
        'Pose de fenêtres de toit Velux',
        'Remplacement de fenêtres existantes',
        'Création d\'ouvertures sur mesure',
        'Installation de stores et volets',
        'Étanchéité parfaite garantie',
        'Ventilation optimisée'
      ],
      benefits: [
        'Apport de lumière naturelle',
        'Amélioration du confort',
        'Ventilation optimale',
        'Étanchéité garantie'
      ],
      image: '/images/WhatsApp Image 2025-12-17 at 19.07.20.jpeg',
      reverse: true
    },
    {
      id: 'zinguerie',
      badge: 'Zinguerie',
      title: 'Zinguerie',
      intro: 'Fabrication et pose de tous éléments de zinguerie sur mesure. Finitions parfaites pour une toiture complète et esthétique.',
      features: [
        'Faîtages et arêtiers',
        'Noues et solins',
        'Chatières et sorties de toit',
        'Bandes de rive et égouts',
        'Évacuations et descentes',
        'Fabrication sur mesure en atelier'
      ],
      process: [
        { step: 'Diagnostic et relevé', desc: 'Analyse de votre toiture et mesure précise des éléments à fabriquer' },
        { step: 'Fabrication sur mesure', desc: 'Réalisation des pièces en atelier selon vos spécifications' },
        { step: 'Choix du matériau', desc: 'Conseil en matériau : zinc, aluminium, cuivre ou acier' },
        { step: 'Pose professionnelle', desc: 'Installation par nos artisans qualifiés avec garantie d\'étanchéité' },
        { step: 'Finitions et protection', desc: 'Traitement anti-corrosion et finitions esthétiques parfaites' }
      ],
      benefits: [
        'Étanchéité parfaite garantie',
        'Durabilité et longévité',
        'Esthétique professionnelle',
        'Fabrication sur mesure adaptée'
      ],
      image: '/images/WhatsApp Image 2025-12-20 at 17.54.42.jpeg',
      reverse: true
    },
    {
      id: 'renovation',
      badge: 'Rénovation complète',
      title: 'Couverture',
      intro: 'Rénovation totale de votre toiture avec amélioration de l\'isolation et des performances énergétiques. Un investissement durable pour votre confort et vos économies.',
      features: [
        'Démolition et remplacement complet de la couverture',
        'Isolation thermique sous toiture (RT 2012/RE 2020)',
        'Amélioration de l\'étanchéité',
        'Remplacement de la zinguerie',
        'Installation de ventilation optimale',
        'Mise aux normes réglementaires'
      ],
      benefits: [
        'Jusqu\'à 30% d\'économies d\'énergie',
        'Confort thermique amélioré',
        'Valorisation de votre bien immobilier',
        'Éligible aux aides et subventions'
      ],
      image: '/images/WhatsApp Image 2025-12-17 at 19.06.41 (1).jpeg'
    },
    {
      id: 'demoussage',
      badge: 'Entretien',
      title: 'Entretien & Démoussage',
      intro: 'Nettoyage professionnel de votre toiture avec traitement anti-mousse et anti-lichen. Protégez et prolongez la durée de vie de votre couverture.',
      features: [
        'Nettoyage haute pression douce (sans abîmer)',
        'Démoussage complet de la toiture',
        'Traitement anti-mousse et anti-lichen',
        'Traitement hydrofuge (imperméabilisation)',
        'Nettoyage des gouttières inclus',
        'Protection durable jusqu\'à 10 ans'
      ],
      benefits: [
        'Protection contre la dégradation des tuiles',
        'Amélioration de l\'étanchéité',
        'Esthétique : toiture comme neuve',
        'Augmentation de la durée de vie'
      ],
      image: '/images/WhatsApp Image 2025-12-17 at 19.07.40.jpeg',
      reverse: true
    },
    {
      id: 'etancheite',
      badge: 'Étanchéité',
      title: 'Étanchéité & Isolation',
      intro: 'Mise en conformité et amélioration de l\'étanchéité de votre toiture. Protection totale contre les infiltrations d\'eau.',
      features: [
        'Étanchéité toiture terrasse (EPDM, bitume)',
        'Étanchéité toiture inclinée',
        'Traitement des points singuliers',
        'Réparation d\'étanchéité existante',
        'Diagnostic d\'étanchéité complet',
        'Garantie décennale étanchéité'
      ],
      image: '/images/WhatsApp Image 2025-12-17 at 19.07.57.jpeg'
    },
    {
      id: 'urgence',
      badge: 'Urgence 24h/24 7j/7',
      title: 'Travaux d\'urgence',
      intro: 'Intervention rapide 24h/24 et 7j/7 pour tous vos problèmes de toiture urgents. Fuites, dégâts de tempête, toitures endommagées : nous intervenons rapidement.',
      features: [
        'Fuites et infiltrations d\'eau',
        'Dégâts après tempête ou intempéries',
        'Toiture partiellement arrachée',
        'Tuiles ou ardoises tombées',
        'Gouttières endommagées',
        'Sécurisation immédiate du bâtiment'
      ],
      benefits: [
        'Réponse sous 2h',
        'Intervention sous 24h',
        'Sécurisation immédiate',
        'Devis rapide et transparent'
      ],
      urgent: true,
      noImage: true
    }
  ]

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Services Couvreur Le Mans - Charpente, Couverture, Zinguerie, Fenêtres de Toit</h1>
          <p>Services complets de couvreur au Mans et dans toute la Sarthe (72) : charpente, couverture, zinguerie, fenêtres de toit, démoussage, étanchéité. Devis gratuit, intervention rapide.</p>
        </div>
      </section>

      <section className="services-detail section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-detail ${index % 2 === 1 ? 'bg-light' : ''}`}
            >
              <div className={`service-detail-content ${service.reverse ? 'reverse' : ''} ${service.noImage ? 'no-image' : ''}`}>
                <div className="service-detail-text">
                  <span className={`service-badge ${service.urgent ? 'urgent' : ''}`}>
                    {service.badge}
                  </span>
                  <h2>{service.title}</h2>
                  <p className="service-intro">{service.intro}</p>
                  
                  {service.id === 'urgence' && service.features && service.benefits ? (
                    <div className="service-features-benefits-grid">
                      <div className="service-features">
                        <h3>Ce que nous proposons :</h3>
                        <ul>
                          {service.features.map((feature, idx) => (
                            <li key={idx}>✓ {feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="service-benefits">
                        <h3>Notre engagement urgence :</h3>
                        <ul>
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <>
                      {service.features && (
                        <div className="service-features">
                          <h3>Ce que nous proposons :</h3>
                          <ul>
                            {service.features.map((feature, idx) => (
                              <li key={idx}>✓ {feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.process && (
                        <div className="service-process">
                          <h3>Notre processus :</h3>
                          <ol>
                            {service.process.map((item, idx) => (
                              <li key={idx}>
                                <strong>{item.step}</strong> : {item.desc}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {service.benefits && (
                        <div className="service-benefits">
                          <h3>{service.id === 'reparation' ? 'Pourquoi nous choisir :' : service.id === 'demoussage' ? 'Pourquoi démousser ?' : 'Bénéfices :'}</h3>
                          <ul>
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}

                  <div className="service-cta">
                    {service.urgent ? (
                      <a href="tel:+33750398368" className="btn btn-primary btn-urgent">
                        Appeler maintenant : 07 50 39 83 68
                      </a>
                    ) : (
                      <Link to="/contact" className="btn btn-primary">
                        Demander un devis
                      </Link>
                    )}
                  </div>
                </div>
                {!service.noImage && (
                  <div className="service-detail-image">
                    {service.image ? (
                      <div
                        className="service-image-placeholder"
                        style={{
                          backgroundImage: `url("${encodeURI(service.image)}")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                        role="img"
                        aria-label={`${service.title} - Service couvreur Le Mans - JORY CHARPENTE COUVERTURE`}
                      >
                      </div>
                    ) : service.gradient ? (
                      <div
                        className={`service-image-placeholder ${service.urgent ? 'urgent' : ''}`}
                        style={{ background: service.gradient }}
                        role="img"
                        aria-label={`${service.title} - Service couvreur Le Mans - JORY CHARPENTE COUVERTURE`}
                      >
                        <span>{service.title}</span>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Un projet de toiture en tête ?"
        subtitle="Contactez-nous pour un devis gratuit et personnalisé"
      />
    </>
  )
}

export default Services

