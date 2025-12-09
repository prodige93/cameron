import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = ({ title, subtitle, buttonText = "Demander un devis gratuit", buttonLink = "/contact" }) => {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta-content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <Link to={buttonLink} className="btn btn-primary btn-large">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection

