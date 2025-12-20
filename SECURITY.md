# Mesures de Sécurité du Site

Ce document décrit les mesures de sécurité implémentées sur le site JORY CHARPENTE COUVERTURE.

## 🔒 Mesures de Sécurité Implémentées

### 1. Protection contre les attaques XSS (Cross-Site Scripting)
- ✅ Sanitization de tous les inputs utilisateur
- ✅ Échappement des caractères spéciaux HTML
- ✅ Validation stricte des données avant affichage
- ✅ Headers HTTP X-XSS-Protection activés

### 2. Validation des Formulaires
- ✅ Validation côté client avec règles strictes
- ✅ Validation des emails (format et longueur)
- ✅ Validation des numéros de téléphone français
- ✅ Validation des noms (caractères autorisés uniquement)
- ✅ Limitation de la longueur des champs
- ✅ Détection des patterns de spam

### 3. Rate Limiting (Limitation des Requêtes)
- ✅ Limite de 5 soumissions par heure pour le formulaire de contact
- ✅ Limite de 3 avis par 5 minutes
- ✅ Protection contre le spam et les abus

### 4. Headers de Sécurité HTTP
- ✅ X-Frame-Options: Protection contre le clickjacking
- ✅ X-Content-Type-Options: Protection contre le MIME sniffing
- ✅ Referrer-Policy: Contrôle des informations de référent
- ✅ Content-Security-Policy: Restriction des ressources chargées
- ✅ Permissions-Policy: Contrôle des fonctionnalités du navigateur

### 5. Protection des Données
- ✅ Nettoyage automatique des données de formulaire
- ✅ Pas de stockage de données sensibles côté client
- ✅ Protection des fichiers sensibles (.htaccess, .env, etc.)

### 6. Validation des Entrées Utilisateur
- ✅ Sanitization de tous les champs texte
- ✅ Validation des formats (email, téléphone, nom)
- ✅ Limitation de la longueur des champs
- ✅ Détection des caractères répétés (spam)

## 📋 Recommandations pour la Production

### Avant la mise en production :

1. **HTTPS obligatoire**
   - Activez HTTPS avec un certificat SSL valide
   - Décommentez la ligne Strict-Transport-Security dans .htaccess
   - Forcez la redirection HTTP vers HTTPS

2. **Validation côté serveur**
   - Implémentez une validation serveur pour tous les formulaires
   - Ne faites jamais confiance aux données client
   - Utilisez un backend sécurisé (Node.js, PHP, etc.)

3. **Protection CSRF**
   - Implémentez des tokens CSRF pour les formulaires
   - Validez les tokens côté serveur

4. **Gestion des erreurs**
   - Ne révélez jamais d'informations sensibles dans les messages d'erreur
   - Loggez les erreurs côté serveur uniquement

5. **Base de données**
   - Utilisez des requêtes préparées (prepared statements)
   - Échappez toutes les données avant insertion
   - Limitez les permissions de la base de données

6. **Authentification**
   - Si vous ajoutez une zone d'administration, utilisez :
     - Mots de passe forts (minimum 12 caractères)
     - Hashage bcrypt/argon2
     - Authentification à deux facteurs (2FA)
     - Sessions sécurisées

7. **Monitoring**
   - Surveillez les tentatives d'attaque
   - Configurez des alertes pour les activités suspectes
   - Loggez les accès et les erreurs

## 🔧 Configuration Serveur

### Apache (.htaccess)
Le fichier `.htaccess` dans le dossier `public/` contient :
- Headers de sécurité
- Compression
- Cache
- Protection des fichiers sensibles

### Nginx
Si vous utilisez Nginx, ajoutez ces headers dans votre configuration :

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

## 📝 Maintenance

- Mettez à jour régulièrement les dépendances
- Surveillez les vulnérabilités connues (CVE)
- Testez régulièrement la sécurité du site
- Sauvegardez régulièrement les données

## ⚠️ Avertissements

- Les mesures de sécurité côté client ne remplacent **JAMAIS** la sécurité côté serveur
- Toujours valider et sanitizer les données côté serveur
- Ne stockez jamais de données sensibles (mots de passe, tokens) dans le localStorage
- Utilisez HTTPS en production

## 📞 Contact Sécurité

En cas de découverte d'une vulnérabilité, contactez l'équipe de développement.

