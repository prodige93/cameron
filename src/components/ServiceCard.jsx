import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="service-link">
        En savoir plus →
      </Link>
    </div>
  )
}

export default ServiceCard

