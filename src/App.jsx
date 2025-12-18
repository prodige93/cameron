import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Realizations from './pages/Realizations'
import RealizationDetail from './pages/RealizationDetail'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realizations />} />
        <Route path="/realisations/:id" element={<RealizationDetail />} />
        <Route path="/avis" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App

