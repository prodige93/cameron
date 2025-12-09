import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'

const Realizations = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const realizations = [
    {
      category: 'renovation',
      title: 'Rénovation complète - Maison individuelle',
      location: 'Paris 15ème',
      description: 'Rénovation complète d\'une toiture de 180m² avec remplacement des tuiles terre cuite, isolation renforcée sous toiture et remplacement de toute la zinguerie. Travaux réalisés en 3 semaines.',
      tags: ['Tuiles terre cuite', 'Isolation', 'Zinguerie'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      category: 'pose',
      title: 'Pose toiture neuve - Résidence',
      location: 'Boulogne-Billancourt',
      description: 'Installation complète d\'une toiture en ardoises naturelles sur une résidence neuve. Pose de 250m² d\'ardoises avec zinguerie en cuivre. Chantier de 4 semaines.',
      tags: ['Ardoises naturelles', 'Zinguerie cuivre', 'Pose neuve'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      category: 'reparation',
      title: 'Réparation post-tempête',
      location: 'Nanterre',
      description: 'Intervention d\'urgence après une tempête ayant endommagé une partie de la toiture. Remplacement de 80 tuiles, réparation de la zinguerie et sécurisation complète. Intervention sous 24h.',
      tags: ['Urgence', 'Réparation', 'Tuiles'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      category: 'isolation',
      title: 'Isolation sous toiture',
      location: 'Issy-les-Moulineaux',
      description: 'Amélioration de l\'isolation thermique d\'une maison individuelle. Installation de laine de roche sous rampants (200m²), pose de pare-vapeur et optimisation de la ventilation. Conformité RE 2020.',
      tags: ['Isolation', 'Performance énergétique', 'RE 2020'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      category: 'renovation',
      title: 'Rénovation toiture zinc',
      location: 'Paris 16ème',
      description: 'Rénovation complète d\'une toiture en zinc de 150m² sur un immeuble haussmannien. Remplacement du zinc, réfection des faîtages et noues. Travaux réalisés avec soin pour préserver le caractère architectural.',
      tags: ['Zinc', 'Rénovation', 'Patrimoine'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      category: 'pose',
      title: 'Pose toiture shingle',
      location: 'Clichy',
      description: 'Installation d\'une toiture en bardeaux bitumineux (shingle) sur une maison individuelle. Pose de 120m² de shingle avec isolation intégrée. Solution économique et performante.',
      tags: ['Shingle', 'Pose neuve', 'Économique'],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      category: 'reparation',
      title: 'Réparation fuite et étanchéité',
      location: 'Levallois-Perret',
      description: 'Diagnostic et réparation d\'une fuite importante sur une toiture terrasse. Remplacement de l\'étanchéité EPDM sur 80m², réparation des joints et mise en conformité. Intervention rapide.',
      tags: ['Étanchéité', 'Réparation', 'EPDM'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      category: 'renovation',
      title: 'Rénovation complète avec isolation',
      location: 'Montrouge',
      description: 'Rénovation totale d\'une toiture de 200m² avec remplacement des tuiles, isolation renforcée par l\'extérieur (sarking) et installation d\'une ventilation optimisée. Projet éligible MaPrimeRénov\'.',
      tags: ['Rénovation', 'Isolation', 'MaPrimeRénov\''],
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    }
  ]

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'renovation', label: 'Rénovation' },
    { id: 'pose', label: 'Pose neuve' },
    { id: 'reparation', label: 'Réparation' },
    { id: 'isolation', label: 'Isolation' }
  ]

  const filteredRealizations = activeFilter === 'all'
    ? realizations
    : realizations.filter(r => r.category === activeFilter)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Nos réalisations</h1>
          <p>Découvrez quelques-unes de nos réalisations de couverture</p>
        </div>
      </section>

      <section className="filters-section section">
        <div className="container">
          <div className="filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="realizations-gallery section">
        <div className="container">
          <div className="realizations-grid">
            {filteredRealizations.map((realization, index) => (
              <div key={index} className="realization-item" data-category={realization.category}>
                <div
                  className="realization-image"
                  style={{ background: realization.gradient }}
                >
                  <div className="realization-overlay">
                    <h3>{realization.title}</h3>
                    <p>{realization.location}</p>
                  </div>
                </div>
                <div className="realization-info">
                  <h3>{realization.title}</h3>
                  <p className="realization-location">📍 {realization.location}</p>
                  <p className="realization-desc">{realization.description}</p>
                  <div className="realization-tags">
                    {realization.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section section bg-light">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Chantiers réalisés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25</div>
              <div className="stat-label">Années d'expérience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Clients satisfaits</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24h</div>
              <div className="stat-label">Délai moyen intervention</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Votre projet de toiture nous intéresse"
        subtitle="Contactez-nous pour discuter de votre projet et obtenir un devis gratuit"
      />
    </>
  )
}

export default Realizations

