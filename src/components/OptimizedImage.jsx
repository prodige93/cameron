import React, { useState, useEffect, useRef } from 'react'

/**
 * Composant d'image optimisé avec lazy loading et placeholder
 * Améliore les performances en chargeant les images uniquement quand elles sont visibles
 */
const OptimizedImage = ({ 
  src, 
  alt = '', 
  className = '', 
  style = {},
  fallbackGradient,
  onLoad,
  onError
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  // Intersection Observer pour le lazy loading
  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Commencer à charger 50px avant que l'image soit visible
        threshold: 0.01
      }
    )

    observer.observe(imgRef.current)

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  // Charger l'image quand elle est visible
  useEffect(() => {
    if (!isInView || !src) return

    const img = new Image()
    
    img.onload = () => {
      setImageLoaded(true)
      if (onLoad) onLoad()
    }
    
    img.onerror = () => {
      setImageError(true)
      if (onError) onError()
    }

    // Encoder l'URL correctement
    const encodedUrl = src.includes(' ') ? encodeURI(src) : src
    img.src = encodedUrl
  }, [isInView, src, onLoad, onError])

  const getEncodedUrl = (url) => {
    if (!url) return null
    const parts = url.split('/')
    return parts.map(part => part.includes(' ') ? encodeURIComponent(part) : part).join('/')
  }

  const encodedImageUrl = getEncodedUrl(src)
  const backgroundStyle = imageError || !src
    ? { background: fallbackGradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
    : imageLoaded && isInView
    ? {
        backgroundImage: `url("${encodedImageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#e5e7eb',
        transition: 'opacity 0.3s ease-in-out',
        opacity: imageLoaded ? 1 : 0
      }
    : {
        backgroundColor: '#e5e7eb',
        opacity: 0.5
      }

  return (
    <div
      ref={imgRef}
      className={`optimized-image ${className} ${imageLoaded ? 'loaded' : 'loading'}`}
      style={{
        ...backgroundStyle,
        ...style,
        minHeight: style.minHeight || '250px'
      }}
      role="img"
      aria-label={alt}
    >
      {!imageLoaded && !imageError && isInView && (
        <div className="image-loading-placeholder" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#999',
          fontSize: '0.9rem'
        }}>
          Chargement...
        </div>
      )}
    </div>
  )
}

export default OptimizedImage

