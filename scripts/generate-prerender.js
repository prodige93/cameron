#!/usr/bin/env node

/**
 * Script pour générer des fichiers HTML statiques pour chaque route
 * Cela permet à Google de crawler et indexer les pages correctement
 */

const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/services',
  '/realisations',
  '/a-propos',
  '/avis',
  '/contact'
];

const distPath = path.join(__dirname, '..', 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

// Lire le fichier index.html
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Fonction pour mettre à jour les balises meta selon la route
function updateMetaForRoute(html, route) {
  let updatedHtml = html;
  
  const metaConfig = {
    '/': {
      title: 'Couvreur Le Mans 72 - JORY CHARPENTE COUVERTURE | Réparation Toiture Sarthe',
      description: 'Couvreur Le Mans : JORY CHARPENTE COUVERTURE, votre artisan couvreur professionnel au Mans (72). Réparation toiture, charpente, zinguerie, fenêtres de toit. Intervention rapide 24/7, devis gratuit couvreur Le Mans. Spécialiste couverture Sarthe depuis Changé.',
      canonical: 'https://jory-couverture.com/',
      ogUrl: 'https://jory-couverture.com/'
    },
    '/services': {
      title: 'Services Couvreur Le Mans - Charpente, Couverture, Zinguerie | JORY',
      description: 'Services de couvreur au Mans : charpente, couverture, zinguerie, fenêtres de toit, démoussage, étanchéité. Devis gratuit. Intervention rapide dans toute la Sarthe 72.',
      canonical: 'https://jory-couverture.com/services',
      ogUrl: 'https://jory-couverture.com/services'
    },
    '/realisations': {
      title: 'Réalisations Couvreur Le Mans - Galerie Photos Toiture | JORY',
      description: 'Découvrez nos réalisations de couvreur au Mans : rénovation toiture, charpente, zinguerie. Photos avant/après de nos travaux en Sarthe 72.',
      canonical: 'https://jory-couverture.com/realisations',
      ogUrl: 'https://jory-couverture.com/realisations'
    },
    '/a-propos': {
      title: 'À Propos - Couvreur Le Mans Depuis Changé | JORY CHARPENTE COUVERTURE',
      description: 'Découvrez JORY CHARPENTE COUVERTURE, votre couvreur expert au Mans et dans toute la Sarthe. Artisan qualifié en charpente, couverture et zinguerie.',
      canonical: 'https://jory-couverture.com/a-propos',
      ogUrl: 'https://jory-couverture.com/a-propos'
    },
    '/avis': {
      title: 'Avis Clients Couvreur Le Mans | JORY CHARPENTE',
      description: 'Lisez les avis de nos clients couvreur au Mans. Témoignages sur nos travaux de toiture, charpente et zinguerie en Sarthe.',
      canonical: 'https://jory-couverture.com/avis',
      ogUrl: 'https://jory-couverture.com/avis'
    },
    '/contact': {
      title: 'Contact Couvreur Le Mans - Devis Gratuit 24/7 | JORY CHARPENTE',
      description: 'Contactez votre couvreur au Mans. Devis gratuit sous 24h pour réparation toiture, charpente, zinguerie. Intervention urgente 24h/24 au 07 50 39 83 68.',
      canonical: 'https://jory-couverture.com/contact',
      ogUrl: 'https://jory-couverture.com/contact'
    }
  };
  
  const config = metaConfig[route] || metaConfig['/'];
  
  // Mettre à jour le title
  updatedHtml = updatedHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${config.title}</title>`
  );
  
  // Mettre à jour la meta description
  updatedHtml = updatedHtml.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']/,
    `<meta name="description" content="${config.description}"`
  );
  
  // Mettre à jour la meta title
  updatedHtml = updatedHtml.replace(
    /<meta\s+name=["']title["']\s+content=["'][^"']*["']/,
    `<meta name="title" content="${config.title}"`
  );
  
  // Mettre à jour l'URL canonique
  updatedHtml = updatedHtml.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/,
    `<link rel="canonical" href="${config.canonical}"`
  );
  
  // Mettre à jour l'URL canonique dans le script initial
  updatedHtml = updatedHtml.replace(
    /const\s+canonicalUrl\s*=\s*['"][^'"]*['"]/,
    `const canonicalUrl = '${config.canonical}'`
  );
  
  // Mettre à jour og:url
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']/,
    `<meta property="og:url" content="${config.ogUrl}"`
  );
  
  // Mettre à jour og:title
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/,
    `<meta property="og:title" content="${config.title}"`
  );
  
  // Mettre à jour og:description
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']/,
    `<meta property="og:description" content="${config.description}"`
  );
  
  // Mettre à jour twitter:url
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']twitter:url["']\s+content=["'][^"']*["']/,
    `<meta property="twitter:url" content="${config.ogUrl}"`
  );
  
  // Mettre à jour twitter:title
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']twitter:title["']\s+content=["'][^"']*["']/,
    `<meta property="twitter:title" content="${config.title}"`
  );
  
  // Mettre à jour twitter:description
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']twitter:description["']\s+content=["'][^"']*["']/,
    `<meta property="twitter:description" content="${config.description}"`
  );
  
  return updatedHtml;
}

// Générer les fichiers HTML pour chaque route
routes.forEach(route => {
  let html = indexHtml;
  
  // Mettre à jour les meta tags pour cette route
  html = updateMetaForRoute(html, route);
  
  // Déterminer le chemin du fichier
  let filePath;
  if (route === '/') {
    filePath = path.join(distPath, 'index.html');
  } else {
    // Créer le dossier si nécessaire
    const routeDir = path.join(distPath, route.slice(1));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    filePath = path.join(routeDir, 'index.html');
  }
  
  // Écrire le fichier
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ Généré: ${filePath}`);
});

console.log('\n✅ Prerendering terminé ! Les pages sont maintenant accessibles pour Google.');
