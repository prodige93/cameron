import React from 'react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'

const Services = () => {
  const services = [
    {
      id: 'pose',
      badge: 'Service principal',
      title: 'Pose de toiture',
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
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'reparation',
      badge: 'Intervention rapide',
      title: 'Réparation de toiture',
      intro: 'Intervention rapide et efficace pour réparer tous types de dégâts sur votre toiture. Nous identifions précisément les problèmes et proposons des solutions durables.',
      features: [
        'Réparation de fuites et infiltrations',
        'Remplacement de tuiles ou ardoises cassées',
        'Réparation de zinguerie endommagée',
        'Colmatage de fissures et joints',
        'Réparation de faîtages et noues',
        'Consolidation de charpente'
      ],
      benefits: [
        'Diagnostic précis avec caméra thermique',
        'Intervention sous 48h pour les urgences',
        'Garantie sur toutes nos réparations',
        'Devis gratuit et transparent'
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      reverse: true
    },
    {
      id: 'renovation',
      badge: 'Rénovation complète',
      title: 'Rénovation complète de toiture',
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
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 'gouttieres',
      badge: 'Évacuation des eaux',
      title: 'Pose et réparation de gouttières',
      intro: 'Installation et réparation de systèmes d\'évacuation des eaux pluviales sur mesure. Protection optimale de votre façade et de vos fondations.',
      features: [
        'Pose de gouttières PVC, zinc, aluminium',
        'Installation de descentes et raccordements',
        'Réparation et remplacement de gouttières',
        'Nettoyage et débouchage',
        'Installation de récupérateurs d\'eau',
        'Protection contre les feuilles (grilles, crapaudines)'
      ],
      benefits: [
        'PVC : Économique et résistant',
        'Aluminium : Léger et durable',
        'Zinc : Esthétique et longévité',
        'Cuivre : Premium et intemporel'
      ],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      reverse: true
    },
    {
      id: 'demoussage',
      badge: 'Entretien',
      title: 'Démoussage et traitement de toiture',
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
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 'isolation',
      badge: 'Performance énergétique',
      title: 'Isolation sous toiture',
      intro: 'Amélioration de l\'isolation thermique et phonique de votre habitation. Confort optimal et économies d\'énergie garanties.',
      features: [
        'Isolation par l\'intérieur (sous rampants)',
        'Isolation par l\'extérieur (sarking)',
        'Isolation avec laine de verre, laine de roche',
        'Isolation écologique (ouate de cellulose, chanvre)',
        'Pare-vapeur et ventilation optimisée',
        'Conformité RT 2012 / RE 2020'
      ],
      benefits: [
        'Réduction facture énergétique jusqu\'à 30%',
        'Confort été comme hiver',
        'Éligible MaPrimeRénov\' et aides',
        'Diagnostic énergétique inclus'
      ],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      reverse: true
    },
    {
      id: 'etancheite',
      badge: 'Étanchéité',
      title: 'Étanchéité de toiture',
      intro: 'Mise en conformité et amélioration de l\'étanchéité de votre toiture. Protection totale contre les infiltrations d\'eau.',
      features: [
        'Étanchéité toiture terrasse (EPDM, bitume)',
        'Étanchéité toiture inclinée',
        'Traitement des points singuliers',
        'Réparation d\'étanchéité existante',
        'Diagnostic d\'étanchéité complet',
        'Garantie décennale étanchéité'
      ],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 'zinguerie',
      badge: 'Zinguerie',
      title: 'Zinguerie et finitions',
      intro: 'Fabrication et pose de tous éléments de zinguerie sur mesure. Finitions parfaites pour une toiture complète et esthétique.',
      features: [
        'Faîtages et arêtiers',
        'Noues et solins',
        'Chatières et sorties de toit',
        'Bandes de rive et égouts',
        'Évacuations et descentes',
        'Fabrication sur mesure en atelier'
      ],
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      reverse: true
    },
    {
      id: 'urgence',
      badge: 'Urgence 24/7',
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
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
      urgent: true
    }
  ]

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Nos services de couverture</h1>
          <p>Des solutions complètes pour tous vos besoins en toiture</p>
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
              <div className={`service-detail-content ${service.reverse ? 'reverse' : ''}`}>
                <div className="service-detail-text">
                  <span className={`service-badge ${service.urgent ? 'urgent' : ''}`}>
                    {service.badge}
                  </span>
                  <h2>{service.title}</h2>
                  <p className="service-intro">{service.intro}</p>
                  
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
                      <h3>{service.id === 'reparation' ? 'Pourquoi nous choisir :' : service.id === 'gouttieres' ? 'Matériaux disponibles :' : service.id === 'demoussage' ? 'Pourquoi démousser ?' : service.id === 'urgence' ? 'Notre engagement urgence :' : 'Bénéfices :'}</h3>
                      <ul>
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="service-cta">
                    {service.urgent ? (
                      <a href="tel:+33750398368" className="btn btn-primary btn-urgent">
                        📞 Appeler maintenant : 07 50 39 83 68
                      </a>
                    ) : (
                      <Link to="/contact" className="btn btn-primary">
                        Demander un devis
                      </Link>
                    )}
                  </div>
                </div>
                <div className="service-detail-image">
                  <div
                    className={`service-image-placeholder ${service.urgent ? 'urgent' : ''}`}
                    style={{ background: service.gradient }}
                  >
                    <span>{service.title}</span>
                  </div>
                </div>
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

