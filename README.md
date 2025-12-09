# Toiture Pro - Site Web React

Site web professionnel pour une entreprise de couverture, développé en React.js avec Vite.

## 🚀 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

## 📦 Démarrage

### Mode développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

### Prévisualisation du build

```bash
npm run preview
```

## 📁 Structure du projet

```
cameron/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.jsx       # En-tête avec navigation
│   │   ├── Footer.jsx       # Pied de page
│   │   ├── Layout.jsx       # Layout principal
│   │   ├── ServiceCard.jsx  # Carte de service
│   │   ├── TestimonialCard.jsx # Carte de témoignage
│   │   └── CTASection.jsx   # Section call-to-action
│   ├── pages/               # Pages de l'application
│   │   ├── Home.jsx         # Page d'accueil
│   │   ├── Services.jsx     # Page services
│   │   ├── Realizations.jsx # Page réalisations
│   │   ├── About.jsx        # Page à propos
│   │   ├── Reviews.jsx      # Page avis clients
│   │   └── Contact.jsx       # Page contact
│   ├── App.jsx              # Composant principal avec routing
│   ├── main.jsx             # Point d'entrée
│   ├── index.css            # Styles principaux
│   └── styles.css            # Fichier CSS complet
├── index.html               # Template HTML
├── package.json             # Dépendances et scripts
├── vite.config.js           # Configuration Vite
└── README.md                # Ce fichier
```

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **React Router DOM 6** - Routing pour les applications React
- **Vite** - Build tool moderne et rapide
- **CSS3** - Styles personnalisés avec variables CSS

## 📄 Pages disponibles

- `/` - Page d'accueil
- `/services` - Liste détaillée des services
- `/realisations` - Galerie de réalisations avec filtres
- `/a-propos` - Présentation de l'entreprise
- `/avis` - Avis et témoignages clients
- `/contact` - Formulaire de contact et devis

## 🎨 Fonctionnalités

- ✅ Navigation responsive avec menu mobile
- ✅ Filtres de réalisations par catégorie
- ✅ Formulaire de contact avec validation
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations au scroll
- ✅ Header sticky avec effet au scroll
- ✅ Routing avec React Router

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans `src/styles.css` via les variables CSS :

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #f59e0b;
  /* ... */
}
```

### Ajouter une nouvelle page

1. Créer un nouveau composant dans `src/pages/`
2. Ajouter la route dans `src/App.jsx`
3. Ajouter le lien dans `src/components/Header.jsx` et `Footer.jsx`

## 📝 Notes

- Le formulaire de contact simule actuellement l'envoi. Pour une utilisation en production, il faudra intégrer un backend ou un service d'email.
- Les images de réalisations utilisent des gradients CSS. Remplacez-les par de vraies images si nécessaire.
- La carte sur la page contact est un placeholder. Intégrez Google Maps ou OpenStreetMap pour une carte interactive.

## 📄 Licence

Ce projet est un exemple de site web pour une entreprise de couverture.

## 👨‍💻 Développement

Pour toute question ou amélioration, n'hésitez pas à contribuer au projet.

