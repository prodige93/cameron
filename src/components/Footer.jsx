import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Toiture Pro</h3>
            <p>Votre expert en couverture depuis 1999. Artisans passionnés au service de votre toiture.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/realisations">Réalisations</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/avis">Avis clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#pose">Pose de toiture</Link></li>
              <li><Link to="/services#reparation">Réparation</Link></li>
              <li><Link to="/services#renovation">Rénovation</Link></li>
              <li><Link to="/services#gouttieres">Gouttières</Link></li>
              <li><Link to="/services#demoussage">Démoussage</Link></li>
              <li><Link to="/services#urgence">Urgences</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>📍 123 Rue de la Toiture<br />75015 Paris</li>
              <li>📞 <a href="tel:+33123456789">01 23 45 67 89</a></li>
              <li>✉️ <a href="mailto:contact@toiturepro.fr">contact@toiturepro.fr</a></li>
              <li>🕐 Lun-Ven: 8h-18h<br />Sam: 9h-12h</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Toiture Pro. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

