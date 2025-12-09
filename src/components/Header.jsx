import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <span className="logo-icon">🏠</span>
              <span className="logo-text">Toiture Pro</span>
            </Link>
          </div>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`} id="nav">
            <ul className="nav-list">
              <li>
                <Link to="/" className={isActive('/') ? 'active' : ''}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className={isActive('/services') ? 'active' : ''}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className={isActive('/realisations') ? 'active' : ''}>
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className={isActive('/a-propos') ? 'active' : ''}>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/avis" className={isActive('/avis') ? 'active' : ''}>
                  Avis
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`btn-nav ${isActive('/contact') ? 'active' : ''}`}>
                  Devis gratuit
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-contact">
            <a href="tel:+33123456789" className="phone-link">
              01 23 45 67 89
            </a>
          </div>
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

