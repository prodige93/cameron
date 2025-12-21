import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Initialiser EmailJS dès le chargement du script
const initEmailJS = () => {
  const checkAndInit = () => {
    if (typeof window.emailjs !== 'undefined') {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'v2ntSO7w0YdzRAx9X'
      if (publicKey && publicKey !== 'YOUR_PUBLIC_KEY') {
        try {
          window.emailjs.init(publicKey)
          // EmailJS initialisé avec succès
        } catch (error) {
          console.error('Erreur lors de l\'initialisation d\'EmailJS:', error)
        }
      }
    } else {
      // Si EmailJS n'est pas encore chargé, attendre un peu et réessayer
      setTimeout(checkAndInit, 100)
    }
  }
  checkAndInit()
}

// Démarrer l'initialisation après un court délai pour laisser le script se charger
setTimeout(initEmailJS, 100)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

