import React from 'react'
import CTASection from '../components/CTASection'

const About = () => {
  const values = [
    { icon: '🎯', title: 'Excellence', desc: 'Nous visons l\'excellence dans chaque détail, de la préparation du chantier à la finition. Chaque toiture est une œuvre à laquelle nous apportons tout notre savoir-faire.' },
    { icon: '🤝', title: 'Proximité', desc: 'Une relation de confiance avec nos clients est essentielle. Nous prenons le temps d\'écouter, de conseiller et d\'accompagner chaque projet avec attention.' },
    { icon: '🛡️', title: 'Fiabilité', desc: 'Respect des délais, transparence des devis, garanties solides : nous nous engageons à être fiables et à tenir nos promesses.' },
    { icon: '🌱', title: 'Éco-responsabilité', desc: 'Nous privilégions les matériaux durables et recyclables, et proposons des solutions d\'isolation performantes pour réduire l\'impact environnemental.' },
    { icon: '⚡', title: 'Réactivité', desc: 'Pour les urgences comme pour les projets planifiés, nous nous engageons à être réactifs et à intervenir rapidement.' },
    { icon: '📚', title: 'Formation continue', desc: 'Notre équipe se forme régulièrement aux nouvelles techniques, normes et matériaux pour toujours offrir les meilleures solutions.' }
  ]

  const team = [
    { initials: 'JD', name: 'Jean Dupont', role: 'Fondateur & Maître Couvreur', bio: '25 ans d\'expérience, spécialiste en toitures traditionnelles et patrimoniales. Formateur et passionné par la transmission du savoir-faire.', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { initials: 'ML', name: 'Marie Leroy', role: 'Chef d\'équipe', bio: '15 ans d\'expérience, experte en rénovation et isolation. Certifiée RGE et spécialisée en performance énergétique.', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { initials: 'PM', name: 'Pierre Martin', role: 'Couvreur Expert', bio: '12 ans d\'expérience, spécialiste en zinguerie et finitions. Maîtrise parfaite des toitures en zinc et cuivre.', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { initials: 'SB', name: 'Sophie Bernard', role: 'Responsable Qualité', bio: '10 ans d\'expérience, garantit la qualité de tous nos chantiers. Spécialiste en diagnostic et conformité réglementaire.', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }
  ]

  const certifications = [
    { icon: '🛡️', title: 'Garantie décennale', desc: 'Assurance décennale complète couvrant tous nos travaux de couverture et d\'étanchéité. Protection totale pendant 10 ans.' },
    { icon: '✅', title: 'Qualibat', desc: 'Certification Qualibat RGE (Reconnu Garant de l\'Environnement) pour nos travaux d\'isolation et de rénovation énergétique.' },
    { icon: '🏆', title: 'CAPEB', desc: 'Membre de la Confédération de l\'Artisanat et des Petites Entreprises du Bâtiment. Engagement qualité et éthique professionnelle.' },
    { icon: '📋', title: 'Assurances', desc: 'Assurance responsabilité civile professionnelle et assurance tous risques chantier. Protection complète de nos clients.' }
  ]

  const numbers = [
    { value: '25', label: 'Années d\'expérience' },
    { value: '2000', label: 'Chantiers réalisés' },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '12', label: 'Artisans qualifiés' },
    { value: '24h', label: 'Délai moyen intervention' },
    { value: '100%', label: 'Garantie décennale' }
  ]

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>À propos de Toiture Pro</h1>
          <p>25 ans d'expertise et de passion pour la couverture</p>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Notre histoire</h2>
              <p>
                Fondée en 1999 par Jean Dupont, maître couvreur passionné, <strong>Toiture Pro</strong> est née d'une vision simple : offrir des services de couverture de qualité supérieure, alliant savoir-faire artisanal traditionnel et techniques modernes.
              </p>
              <p>
                Depuis plus de 25 ans, nous avons su évoluer avec notre secteur, en nous formant continuellement aux nouvelles normes, aux matériaux innovants et aux techniques d'isolation performantes. Ce qui n'a jamais changé, c'est notre engagement envers l'excellence et la satisfaction de nos clients.
              </p>
              <p>
                De petite entreprise artisanale, nous sommes devenus une référence dans la région parisienne, réalisant plus de 2000 chantiers avec un taux de satisfaction exceptionnel de 98%. Notre croissance s'est faite naturellement, grâce au bouche-à-oreille et à la confiance que nos clients nous accordent.
              </p>
              <p>
                Aujourd'hui, <strong>Toiture Pro</strong> c'est une équipe de 12 artisans qualifiés, tous passionnés par leur métier et engagés dans la qualité de leur travail. Nous intervenons sur tous types de projets, des maisons individuelles aux bâtiments publics, en passant par les immeubles collectifs.
              </p>
            </div>
            <div className="about-image">
              <div className="about-image-placeholder" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <span>Notre équipe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos valeurs</h2>
            <p className="section-subtitle">Les principes qui guident notre travail au quotidien</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Notre équipe</h2>
            <p className="section-subtitle">Des artisans qualifiés et passionnés</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div
                  className="team-avatar"
                  style={{ background: member.gradient }}
                >
                  <span>{member.initials}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="team-note">
            <p>Notre équipe compte également 8 autres artisans qualifiés, tous formés et certifiés, qui travaillent avec passion sur vos projets de toiture.</p>
          </div>
        </div>
      </section>

      <section className="certifications section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Certifications et garanties</h2>
            <p className="section-subtitle">Des garanties solides pour votre tranquillité</p>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <p>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="key-numbers section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos chiffres clés</h2>
          </div>
          <div className="numbers-grid">
            {numbers.map((number, index) => (
              <div key={index} className="number-item">
                <div className="number-value">{number.value}</div>
                <div className="number-label">{number.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Faites confiance à notre expertise"
        subtitle="Contactez-nous pour discuter de votre projet de toiture"
      />
    </>
  )
}

export default About

