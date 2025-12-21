# Configuration du système d'email (EmailJS/Maildrop)

Ce document explique comment configurer le système d'envoi d'emails pour recevoir toutes les informations des formulaires de contact et d'abonnement newsletter.

## Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (plan gratuit: 200 emails/mois)
3. Connectez-vous à votre compte

### 2. Configurer un service email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** (format: `service_xxxxx`)

### 3. Créer un template d'email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez le template suivant ou personnalisez-le :

**Nom du template:** Formulaire de contact

**Sujet:**
```
Nouvelle demande de devis - {{from_name}} - {{service}}
```

**Contenu (utilisez {{full_message}} pour avoir le format complet, ou créez votre propre format):**
```
{{full_message}}
```

**OU créez votre propre format avec les variables individuelles:**
```
NOUVELLE DEMANDE DE DEVIS GRATUIT

═══════════════════════════════════════════════════════════
INFORMATIONS DU CLIENT
═══════════════════════════════════════════════════════════

Nom et prénom: {{from_name}}
Email: {{from_email}}
Numéro de téléphone: {{phone}}
Adresse: {{address}}

═══════════════════════════════════════════════════════════
DÉTAILS DE LA DEMANDE
═══════════════════════════════════════════════════════════

Type de travaux: {{service}}
Urgence: {{urgency}}
Date de la demande: {{date}}

═══════════════════════════════════════════════════════════
DESCRIPTION DU PROJET / MESSAGE
═══════════════════════════════════════════════════════════

{{message}}

═══════════════════════════════════════════════════════════

Ce message a été envoyé automatiquement depuis le formulaire de contact du site web.
Vous pouvez répondre directement à cet email pour contacter le client.
```

**Variables disponibles dans le template:**
- `{{from_name}}` - Nom et prénom du client
- `{{from_email}}` - Email du client
- `{{phone}}` - Numéro de téléphone du client
- `{{address}}` - Adresse du client
- `{{service}}` - Type de travaux (déjà formaté en texte lisible)
- `{{urgency}}` - Niveau d'urgence (déjà formaté)
- `{{message}}` - Message/description du projet du client
- `{{full_message}}` - Message complet formaté avec toutes les informations
- `{{date}}` - Date et heure de la demande
- `{{reply_to}}` - Email de réponse (email du client)
```

4. Notez le **Template ID** (format: `template_xxxxx`)

### 4. Obtenir la clé publique

1. Allez dans **Account** > **General**
2. Copiez la **Public Key** (format: `xxxxxxxx`)

### 5. Configurer les variables d'environnement

1. Renommez le fichier `.env.example` en `.env`
2. Remplissez les valeurs avec vos identifiants :

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxx
VITE_RECIPIENT_EMAIL=JORY.BATIMENT@GMAIL.COM
```

### 6. Redémarrer l'application

Après avoir configuré le fichier `.env`, redémarrez votre application :

```bash
npm run dev
```

## Données envoyées

### Formulaire de contact
Toutes les informations saisies par l'utilisateur sont envoyées dans l'email :
- Nom et prénom (obligatoire)
- Email (obligatoire)
- **Numéro de téléphone** (obligatoire)
- Adresse (optionnel)
- Type de travaux (obligatoire)
- Niveau d'urgence (normal, urgente, très urgente)
- Message détaillé (obligatoire)
- Date et heure de la demande

### Abonnement newsletter
- Email de l'abonné
- Date et heure d'abonnement

## Test

1. Remplissez le formulaire de contact sur votre site
2. Soumettez-le
3. Vérifiez que vous recevez bien l'email avec toutes les informations
4. Testez également l'abonnement newsletter

## Notes importantes

- Le fichier `.env` ne doit **jamais** être commité dans Git (il est déjà dans .gitignore)
- Assurez-vous que le template EmailJS correspond aux variables utilisées dans le code
- Les emails sont envoyés automatiquement à l'adresse configurée dans `VITE_RECIPIENT_EMAIL`
- Le plan gratuit d'EmailJS permet 200 emails par mois, ce qui devrait suffire pour la plupart des cas d'usage

## Support

Si vous rencontrez des problèmes :
1. Vérifiez que toutes les variables d'environnement sont correctement configurées
2. Vérifiez la console du navigateur pour les erreurs
3. Vérifiez que votre compte EmailJS est actif
4. Vérifiez que le template EmailJS utilise les bonnes variables

