import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsScrolled(window.scrollY > heroBottom - 100)
      } else {
        setIsScrolled(window.scrollY > 50)
      }
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

  const handleNavClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isRealizationsPage = location.pathname === '/realisations'

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isRealizationsPage ? 'realizations-page' : ''}`} id="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="header-logo">
              <img src="/images/LOGO.png" alt="JORY CHARPENTE COUVERTURE - Couvreur Le Mans 72" className="logo-image" />
            </Link>
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`} id="nav">
              <ul className="nav-list">
                <li className="nav-more">
                  <span>Plus</span>
                  <ul className="nav-dropdown">
                    <li>
                      <Link 
                        to="/services"
                        onClick={(e) => handleNavClick(e, '/services')}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/realisations"
                      >
                        Réalisations
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/avis"
                        onClick={(e) => handleNavClick(e, '/avis')}
                      >
                        Avis
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link 
                    to="/" 
                    className={isActive('/') ? 'active' : ''}
                    onClick={(e) => handleNavClick(e, '/')}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={isActive('/contact') ? 'active' : ''}
                    onClick={(e) => handleNavClick(e, '/contact')}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

