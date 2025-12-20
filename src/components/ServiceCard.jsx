import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ServiceCard = ({ icon, title, description, link }) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    const [path, hash] = link.split('#')
    
    if (hash) {
      // Si on est déjà sur la page services, scroll directement
      if (window.location.pathname === path) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
      
      // Sinon, naviguer puis scroller
      navigate(path)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      navigate(link)
    }
  }

  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} onClick={handleClick} className="service-link">
        En savoir plus →
      </a>
    </div>
  )
}

export default ServiceCard

