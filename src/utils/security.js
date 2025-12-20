/**
 * Utilitaires de sécurité pour protéger le site contre les attaques courantes
 */

/**
 * Sanitize une chaîne de caractères pour prévenir les attaques XSS
 * @param {string} str - La chaîne à sanitizer
 * @returns {string} - La chaîne sanitizée
 */
export const sanitizeInput = (str) => {
  if (typeof str !== 'string') return ''
  
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  
  return str.replace(/[&<>"'/]/g, (char) => map[char])
}

/**
 * Sanitize un objet en sanitizant toutes ses propriétés string
 * @param {object} obj - L'objet à sanitizer
 * @returns {object} - L'objet sanitizé
 */
export const sanitizeObject = (obj) => {
  if (!obj || typeof obj !== 'object') return obj
  
  const sanitized = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'string') {
        sanitized[key] = sanitizeInput(obj[key])
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        sanitized[key] = sanitizeObject(obj[key])
      } else {
        sanitized[key] = obj[key]
      }
    }
  }
  return sanitized
}

/**
 * Valide un email
 * @param {string} email - L'email à valider
 * @returns {boolean} - True si l'email est valide
 */
export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email.trim()) && email.length <= 254
}

/**
 * Valide un numéro de téléphone français
 * @param {string} phone - Le numéro à valider
 * @returns {boolean} - True si le numéro est valide
 */
export const validatePhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false
  // Format français : 10 chiffres, peut commencer par 0 ou +33
  const phoneRegex = /^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/
  const cleaned = phone.replace(/[\s.-]/g, '')
  return phoneRegex.test(cleaned) && cleaned.length >= 10 && cleaned.length <= 12
}

/**
 * Valide un nom (pas de caractères spéciaux dangereux)
 * @param {string} name - Le nom à valider
 * @returns {boolean} - True si le nom est valide
 */
export const validateName = (name) => {
  if (!name || typeof name !== 'string') return false
  const trimmed = name.trim()
  // Autorise lettres, espaces, tirets, apostrophes (noms français)
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/
  return nameRegex.test(trimmed) && trimmed.length >= 2 && trimmed.length <= 50
}

/**
 * Valide un texte (message, avis, etc.)
 * @param {string} text - Le texte à valider
 * @param {number} minLength - Longueur minimale
 * @param {number} maxLength - Longueur maximale
 * @returns {object} - { valid: boolean, error: string }
 */
export const validateText = (text, minLength = 10, maxLength = 5000) => {
  if (!text || typeof text !== 'string') {
    return { valid: false, error: 'Le texte est requis.' }
  }
  
  const trimmed = text.trim()
  
  if (trimmed.length < minLength) {
    return { valid: false, error: `Le texte doit contenir au moins ${minLength} caractères.` }
  }
  
  if (trimmed.length > maxLength) {
    return { valid: false, error: `Le texte ne doit pas dépasser ${maxLength} caractères.` }
  }
  
  // Vérifier qu'il n'y a pas trop de caractères répétés (spam)
  const repeatedChars = /(.)\1{20,}/.test(trimmed)
  if (repeatedChars) {
    return { valid: false, error: 'Le texte contient trop de caractères répétés.' }
  }
  
  return { valid: true, error: null }
}

/**
 * Protection contre le rate limiting (limite les soumissions)
 * @param {string} key - Clé unique pour identifier l'utilisateur
 * @param {number} maxAttempts - Nombre maximum de tentatives
 * @param {number} windowMs - Fenêtre de temps en millisecondes
 * @returns {object} - { allowed: boolean, remaining: number, resetTime: number }
 */
export const checkRateLimit = (key, maxAttempts = 5, windowMs = 60000) => {
  const storageKey = `rateLimit_${key}`
  const now = Date.now()
  const stored = localStorage.getItem(storageKey)
  
  if (!stored) {
    const data = { count: 1, resetTime: now + windowMs }
    localStorage.setItem(storageKey, JSON.stringify(data))
    return { allowed: true, remaining: maxAttempts - 1, resetTime: data.resetTime }
  }
  
  const data = JSON.parse(stored)
  
  // Si la fenêtre de temps est expirée, réinitialiser
  if (now > data.resetTime) {
    const newData = { count: 1, resetTime: now + windowMs }
    localStorage.setItem(storageKey, JSON.stringify(newData))
    return { allowed: true, remaining: maxAttempts - 1, resetTime: newData.resetTime }
  }
  
  // Vérifier si la limite est atteinte
  if (data.count >= maxAttempts) {
    return { allowed: false, remaining: 0, resetTime: data.resetTime }
  }
  
  // Incrémenter le compteur
  data.count++
  localStorage.setItem(storageKey, JSON.stringify(data))
  return { allowed: true, remaining: maxAttempts - data.count, resetTime: data.resetTime }
}

/**
 * Génère un token CSRF simple (pour protection basique)
 * @returns {string} - Token CSRF
 */
export const generateCSRFToken = () => {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Valide un token CSRF
 * @param {string} token - Le token à valider
 * @param {string} storedToken - Le token stocké
 * @returns {boolean} - True si le token est valide
 */
export const validateCSRFToken = (token, storedToken) => {
  return token && storedToken && token === storedToken
}

/**
 * Nettoie les données d'un formulaire avant envoi
 * @param {object} formData - Les données du formulaire
 * @returns {object} - Les données nettoyées
 */
export const cleanFormData = (formData) => {
  const cleaned = {}
  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
      if (typeof formData[key] === 'string') {
        cleaned[key] = formData[key].trim()
      } else {
        cleaned[key] = formData[key]
      }
    }
  }
  return cleaned
}

