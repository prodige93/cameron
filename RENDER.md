# Configuration Render pour Toiture Pro

## ⚠️ IMPORTANT : Configuration requise dans le Dashboard Render

Le service Render doit être configuré correctement dans le dashboard. Voici les deux options :

## Option 1 : Static Site (RECOMMANDÉ) ✅

**C'est la meilleure option pour un site React statique.**

1. Dans Render Dashboard, créez un **"Static Site"** (pas un Web Service)
2. Connectez votre repository GitHub
3. Configurez **EXACTEMENT** comme suit :
   - **Build Command** : `npm run build`
   - **Publish Directory** : `dist` ⚠️ **IMPORTANT : doit être exactement "dist" (pas "main", pas vide)**
   - **Root Directory** : (laissez vide)

**Avantages** :
- ✅ Plus rapide
- ✅ Moins cher (gratuit pour les sites statiques)
- ✅ Pas besoin de serveur Node.js
- ✅ CDN automatique

### 📧 Static Site avec service de mailing externe

**Vous pouvez utiliser un Static Site même avec un service de mailing externe** si vous utilisez :

- ✅ **EmailJS** - Clé API publique, requêtes depuis le frontend
- ✅ **Formspree** - Service de formulaire, pas de backend nécessaire
- ✅ **Netlify Forms** - Intégration directe dans le HTML
- ✅ **Web3Forms** - Service de formulaire sans backend
- ✅ **Getform** - Service de formulaire avec endpoint public

**Ces services fonctionnent directement depuis le frontend** → **Static Site suffit** ✅

## Option 2 : Web Service (si nécessaire)

Si vous devez utiliser un Web Service :

1. Dans Render Dashboard, créez un **"Web Service"**
2. Configurez :
   - **Build Command** : `npm run build`
   - **Start Command** : `npm start`
   - **Environment** : Node
   - **Node Version** : 22.16.0 (ou laissez par défaut)

**OU** si Render exécute automatiquement `npm run dev` :

- **Start Command** : `npm run render` (fait build + start automatiquement)

### 📧 Web Service avec service de mailing (clés secrètes)

**Utilisez un Web Service uniquement si** :

- ❌ **SendGrid** - Nécessite une clé API secrète (backend requis)
- ❌ **Mailgun** - Nécessite une clé API secrète (backend requis)
- ❌ **AWS SES** - Nécessite des credentials AWS (backend requis)
- ❌ **Backend personnalisé** - Votre propre API Node.js/Express

**Ces services nécessitent de cacher les clés API secrètes dans le backend** → **Web Service requis** ⚠️

### 💡 Recommandation

**Pour la plupart des cas, utilisez un Static Site avec EmailJS ou Formspree** :
- ✅ Simple à configurer
- ✅ Gratuit ou très peu cher
- ✅ Pas besoin de backend
- ✅ Fonctionne parfaitement avec Static Site

## Vérification

Après le déploiement, vérifiez que :
- ✅ Le build se termine sans erreur
- ✅ Le site est accessible sur l'URL fournie par Render
- ✅ Aucune erreur "No open ports detected"

## Dépannage

### ❌ Erreur : "Publish directory main does not exist!"

**Solution** : Dans le dashboard Render, vérifiez que le **Publish Directory** est bien défini à `dist` (et non `main` ou vide).

1. Allez dans les paramètres de votre Static Site
2. Vérifiez le champ **"Publish Directory"**
3. Assurez-vous qu'il contient exactement : `dist`
4. Sauvegardez et redéployez

### ❌ Erreur : "No open ports detected"

Si vous voyez "No open ports detected" :
1. Vérifiez que le service est configuré comme **Static Site** (Option 1)
2. OU vérifiez que le **Start Command** est bien `npm start` ou `npm run render`
3. Vérifiez que les scripts dans `package.json` incluent `--host 0.0.0.0`

### ✅ Configuration correcte pour Static Site

Assurez-vous que ces paramètres sont exactement comme suit :

- **Build Command** : `npm run build`
- **Publish Directory** : `dist` ⚠️ (pas `main`, pas vide, exactement `dist`)
- **Root Directory** : (laissez vide)

