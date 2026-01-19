import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Layout from './components/Layout'

// Lazy loading pour optimiser les performances
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Realizations = lazy(() => import('./pages/Realizations'))
const RealizationDetail = lazy(() => import('./pages/RealizationDetail'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Contact = lazy(() => import('./pages/Contact'))

// Composant de chargement
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh',
    fontSize: '1.2rem',
    color: '#666'
  }}>
    Chargement...
  </div>
)

// Page 404
const NotFound = () => (
  <section className="page-header">
    <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#2563eb' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Page non trouvée</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  </section>
)

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Routes principales */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realizations />} />
          <Route path="/realisations/:id" element={<RealizationDetail />} />
          <Route path="/avis" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Redirections pour compatibilité (anciennes URLs) */}
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/about.html" element={<Navigate to="/" replace />} />
          <Route path="/services.html" element={<Navigate to="/services" replace />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="/avis.html" element={<Navigate to="/avis" replace />} />
          <Route path="/a-propos" element={<Navigate to="/" replace />} />
          <Route path="/a-propos.html" element={<Navigate to="/" replace />} />
          
          {/* Route 404 - doit être en dernier */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App

