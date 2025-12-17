import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Jory Charpente Couverture</h3>
            <p>Entreprise artisanale spécialisée dans les travaux de charpente, couverture et pose de fenêtres de toit. Nous intervenons pour des projets neufs et de rénovation, auprès des particuliers et professionnels dans toute la Sarthe.</p>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/realisations">Réalisations</Link></li>
              <li><Link to="/avis">Avis clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#charpente">Charpente</Link></li>
              <li><Link to="/services#couverture">Couverture</Link></li>
              <li><Link to="/services#renovation">Rénovation</Link></li>
              <li><Link to="/services#fenetres">Fenêtres de toit</Link></li>
              <li><Link to="/services#etancheite">Étanchéité & Isolation</Link></li>
              <li><Link to="/services#entretien">Entretien & Démoussage</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>📍 Le Mans, Sarthe (72)</li>
              <li>📞 <a href="tel:+33622107812">06 22 10 78 12</a></li>
              <li>✉️ <a href="mailto:contact@jory-charpente-couverture.fr">contact@jory-charpente-couverture.fr</a></li>
              <li>🕐 Lun-Dim: 8h-20h (urgences)</li>
              <li>
                <a href="https://wa.me/33622107812" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  💬 Contactez-nous sur WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Jory Charpente Couverture. Tous droits réservés.</p>
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

