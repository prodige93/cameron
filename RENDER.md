# Configuration Render pour Toiture Pro

## ⚠️ IMPORTANT : Configuration requise dans le Dashboard Render

Le service Render doit être configuré correctement dans le dashboard. Voici les deux options :

## Option 1 : Static Site (RECOMMANDÉ) ✅

**C'est la meilleure option pour un site React statique.**

1. Dans Render Dashboard, créez un **"Static Site"** (pas un Web Service)
2. Connectez votre repository GitHub
3. Configurez :
   - **Build Command** : `npm run build`
   - **Publish Directory** : `dist`
   - **Root Directory** : (laissez vide)

**Avantages** :
- ✅ Plus rapide
- ✅ Moins cher (gratuit pour les sites statiques)
- ✅ Pas besoin de serveur Node.js
- ✅ CDN automatique

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

## Vérification

Après le déploiement, vérifiez que :
- ✅ Le build se termine sans erreur
- ✅ Le site est accessible sur l'URL fournie par Render
- ✅ Aucune erreur "No open ports detected"

## Dépannage

Si vous voyez "No open ports detected" :
1. Vérifiez que le service est configuré comme **Static Site** (Option 1)
2. OU vérifiez que le **Start Command** est bien `npm start` ou `npm run render`
3. Vérifiez que les scripts dans `package.json` incluent `--host 0.0.0.0`

