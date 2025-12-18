import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import CTASection from '../components/CTASection'

const RealizationDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Données des réalisations (vous pouvez les déplacer dans un fichier séparé ou une API)
  const realizations = {
    'remplacement-couverture-bardage': {
      image: '/images/bardage-cedral.jpg',
      title: 'Remplacement couverture et pose bardage Cedral',
      subtitle: 'Tuiles plates, bardage Cedral',
      description: `Nous vous présentons l'une des réalisations de Jory Charpente Couverture :
remplacement complet de la couverture en tuiles plates, accompagné de la pose d'un bardage Cedral.

Ce chantier a permis de redonner à l'habitation une toiture saine, durable et esthétique, tout en améliorant la protection et l'aspect extérieur du bâtiment. La pose du bardage Cedral apporte une finition moderne, résistante aux intempéries et nécessitant peu d'entretien.

Notre équipe a assuré l'ensemble des travaux avec rigueur et savoir-faire, dans le respect des normes et des délais, en utilisant des matériaux de qualité.

Jory Charpente Couverture,
votre spécialiste en charpente, couverture et bardage au Mans et dans toute la Sarthe.`
    },
    'renovation-complete-maison': {
      image: '/images/realisation-toiture-bardage.jpg',
      title: 'Rénovation complète - Maison individuelle',
      subtitle: 'Tuiles terre cuite, isolation renforcée',
      description: `Rénovation complète d'une toiture de maison individuelle de 180m² avec remplacement des tuiles en terre cuite et isolation renforcée.

Ce projet a nécessité une expertise technique approfondie pour préserver l'intégrité structurelle tout en améliorant les performances énergétiques. Les travaux ont été réalisés en 3 semaines dans le respect des normes en vigueur et des délais convenus.

Notre équipe a su allier savoir-faire traditionnel et techniques modernes pour offrir un résultat de qualité supérieure. Le remplacement de toute la zinguerie complète cette rénovation complète.`
    },
    'pose-toiture-residence': {
      image: null,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      title: 'Pose toiture neuve - Résidence',
      subtitle: 'Ardoises naturelles, zinguerie cuivre',
      description: `Installation complète d'une toiture neuve sur une résidence avec ardoises naturelles et zinguerie en cuivre.

Ce chantier d'envergure de 250m² a nécessité une planification minutieuse et une exécution rigoureuse. Le choix des matériaux de qualité supérieure garantit une durabilité exceptionnelle et un rendu esthétique remarquable.

Notre expertise en pose de toiture neuve nous permet de garantir un résultat parfait, conforme aux attentes du client et aux normes en vigueur. Chantier réalisé en 4 semaines.`
    },
    'reparation-post-tempete': {
      image: null,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      title: 'Réparation post-tempête',
      subtitle: "Intervention d'urgence, remplacement complet",
      description: `Intervention d'urgence suite aux dégâts causés par une tempête. Remplacement complet de la couverture endommagée.

Notre réactivité et notre expertise nous ont permis d'intervenir rapidement (sous 24h) pour sécuriser les lieux et procéder au remplacement de 80 tuiles, à la réparation de la zinguerie et à la sécurisation complète de la toiture.

Cette intervention démontre notre capacité à gérer les situations d'urgence avec professionnalisme et efficacité, tout en respectant les normes de qualité.`
    },
    'isolation-sous-toiture': {
      image: null,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      title: 'Isolation sous toiture',
      subtitle: 'Performance énergétique optimisée',
      description: `Amélioration de l'isolation thermique d'une maison individuelle. Installation de laine de roche sous rampants sur 200m², pose de pare-vapeur et optimisation de la ventilation.

Ce projet répond aux exigences de la RE 2020 et permet une amélioration significative des performances énergétiques du bâtiment. L'installation professionnelle garantit une isolation optimale tout en préservant la ventilation nécessaire.

Notre expertise en isolation nous permet d'offrir des solutions performantes et conformes aux dernières normes environnementales.`
    },
    'renovation-toiture-zinc': {
      image: null,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      title: 'Rénovation toiture zinc',
      subtitle: 'Préservation du patrimoine architectural',
      description: `Rénovation complète d'une toiture en zinc de 150m² sur un immeuble haussmannien. Remplacement du zinc, réfection des faîtages et noues.

Les travaux ont été réalisés avec un soin particulier pour préserver le caractère architectural de ce bâtiment patrimonial. Notre expertise en zinc nous permet de garantir une restauration fidèle à l'original tout en améliorant la durabilité.

Cette réalisation démontre notre capacité à allier respect du patrimoine et techniques modernes de rénovation.`
    },
    'pose-toiture-shingle': {
      image: null,
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      title: 'Pose toiture shingle',
      subtitle: 'Solution économique et performante',
      description: `Installation d'une toiture en bardeaux bitumineux (shingle) sur une maison individuelle. Pose de 120m² de shingle avec isolation intégrée.

Cette solution économique offre d'excellentes performances en termes d'étanchéité et d'isolation. Le shingle est un matériau moderne qui allie esthétique, performance et durabilité.

Notre équipe maîtrise parfaitement la pose de ce type de toiture, garantissant un résultat parfait et durable.`
    },
    'reparation-fuite-etancheite': {
      image: null,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      title: 'Réparation fuite et étanchéité',
      subtitle: 'Intervention rapide et efficace',
      description: `Diagnostic et réparation d'une fuite importante sur une toiture terrasse. Remplacement de l'étanchéité EPDM sur 80m², réparation des joints et mise en conformité.

Notre intervention rapide a permis de limiter les dégâts et de restaurer l'étanchéité complète de la toiture terrasse. L'utilisation de matériaux EPDM de qualité garantit une étanchéité durable et performante.

Cette réalisation démontre notre expertise en diagnostic et réparation d'étanchéité, avec une intervention efficace et rapide.`
    },
    'renovation-complete-isolation': {
      image: null,
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      title: 'Rénovation complète avec isolation',
      subtitle: 'Projet éligible MaPrimeRénov\'',
      description: `Rénovation totale d'une toiture de 200m² avec remplacement des tuiles, isolation renforcée par l'extérieur (sarking) et installation d'une ventilation optimisée.

Ce projet complet améliore significativement les performances énergétiques du bâtiment et est éligible aux aides MaPrimeRénov'. L'isolation par sarking offre une solution performante sans perte d'espace intérieur.

Notre expertise en rénovation énergétique nous permet d'accompagner nos clients dans leurs projets d'amélioration de l'habitat, avec accès aux aides disponibles.`
    }
  }

  const realization = realizations[id]

  if (!realization) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1>Réalisation non trouvée</h1>
        <p>La réalisation que vous recherchez n'existe pas.</p>
        <Link to="/realisations" className="btn btn-primary">
          Retour aux réalisations
        </Link>
      </div>
    )
  }

  const backgroundStyle = realization.image
    ? {
        backgroundImage: `url(${realization.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#e5e7eb'
      }
    : {
        background: realization.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <button 
            onClick={() => navigate(-1)}
            className="btn-back"
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← Retour
          </button>
          <h1>{realization.title}</h1>
          <p>{realization.subtitle}</p>
        </div>
      </section>

      <section className="realization-detail section">
        <div className="container">
          <div className="realization-detail-content">
            <div className="realization-detail-image" style={backgroundStyle}></div>
            <div className="realization-detail-text">
              <div className="realization-detail-description">
                {realization.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Vous avez un projet similaire ?"
        subtitle="Contactez-nous pour discuter de votre projet et obtenir un devis gratuit"
      />
    </>
  )
}

export default RealizationDetail

