# Guide de déploiement

## 📦 Déploiement sur GitHub Pages

### Prérequis
- Un compte GitHub
- Git installé sur votre machine
- Node.js installé (version 20+)

### Étape 1 : Créer un dépôt GitHub

1. Allez sur https://github.com
2. Créez un nouveau dépôt nommé `adeline.poirette.psychologue`
3. Ne créez pas de README (le projet en a déjà un)

### Étape 2 : Initialiser Git et pousser le code

```bash
cd C:\Users\B241YI\Downloads\adeline.poirette.psychologue
git init
git add .
git commit -m "Initial commit - Site vitrine psychologue"
git branch -M main
git remote add origin https://github.com/thibdeez/adeline.poirette.psychologue.git
git push -u origin main
```

### Étape 3 : Configurer GitHub Pages

1. Allez dans **Settings** > **Pages** de votre dépôt
2. Dans **Source**, sélectionnez **GitHub Actions**
3. Ou créez un workflow manuel (voir ci-dessous)

### Étape 4 : Déployer

#### Option A : Déploiement automatique via GitHub Actions

Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

#### Option B : Déploiement manuel

```bash
npm run build
npm run deploy
```

### Étape 5 : Vérifier le déploiement

Le site sera accessible sur : 
`https://thibdeez.github.io/adeline.poirette.psychologue/`

## 🌐 Déploiement avec un nom de domaine personnalisé

### Si vous avez un nom de domaine (ex: adelinepoirette.fr)

1. **Achetez un nom de domaine** chez un registrar (OVH, Gandi, etc.)

2. **Configurez les DNS** :
   - Créez un enregistrement CNAME pointant vers `thibdeez.github.io`
   - Ou utilisez des enregistrements A pointant vers les IPs de GitHub :
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Ajoutez le domaine personnalisé dans GitHub** :
   - Settings > Pages > Custom domain
   - Entrez votre domaine (ex: `adelinepoirette.fr`)
   - Cochez "Enforce HTTPS"

4. **Créez un fichier CNAME** dans `/static/` :
   ```
   adelinepoirette.fr
   ```

5. **Mettez à jour `docusaurus.config.ts`** :
   ```typescript
   url: 'https://adelinepoirette.fr',
   baseUrl: '/',
   ```

## 🚀 Autres options de déploiement

### Netlify (Gratuit)

1. Créez un compte sur https://netlify.com
2. Connectez votre dépôt GitHub
3. Configuration :
   - Build command : `npm run build`
   - Publish directory : `build`
4. Le site sera disponible sur `votresite.netlify.app`

### Vercel (Gratuit)

1. Créez un compte sur https://vercel.com
2. Importez votre projet depuis GitHub
3. Vercel détecte automatiquement Docusaurus
4. Le site sera disponible sur `votresite.vercel.app`

### Autres hébergeurs

- **Cloudflare Pages** : Gratuit, performant
- **Render** : Gratuit pour sites statiques
- **Firebase Hosting** : Google, gratuit
- **AWS Amplify** : Amazon, forfait gratuit

## 🔍 Améliorer le référencement après déploiement

### 1. Google Search Console

1. Allez sur https://search.google.com/search-console
2. Ajoutez votre site
3. Vérifiez la propriété (fichier HTML ou DNS)
4. Soumettez votre sitemap : `https://votresite.com/sitemap.xml`

### 2. Google My Business

1. Créez un profil sur https://business.google.com
2. Ajoutez votre cabinet de psychologue
3. Remplissez toutes les informations :
   - Adresse exacte
   - Horaires
   - Photos du cabinet
   - Catégorie : Psychologue
   - Lien vers votre site web

### 3. Annuaires professionnels

Inscrivez-vous sur :
- **Doctolib** (déjà fait ✅)
- **Pages Jaunes**
- **118 712**
- **Yelp**
- **Annuaire des psychologues**

### 4. Réseaux sociaux

Créez des profils professionnels :
- **LinkedIn** : Pour le réseau professionnel
- **Facebook Page** : Pour toucher les patients locaux
- **Instagram** : Pour partager du contenu éducatif

## 📊 Analytics et suivi

### Google Analytics

Ajoutez dans `docusaurus.config.ts` :

```typescript
gtag: {
  trackingID: 'G-XXXXXXXXXX',
  anonymizeIP: true,
},
```

### Microsoft Clarity (Gratuit)

Alternative ou complément à Google Analytics :
https://clarity.microsoft.com/

## 🔄 Mises à jour régulières

Pour mettre à jour le site :

```bash
# Modifier vos fichiers
git add .
git commit -m "Description des modifications"
git push
```

Le site se mettra automatiquement à jour via GitHub Actions.

## ⚠️ Points importants

1. **Vérifiez les informations de contact** avant de déployer
2. **Testez le site localement** avec `npm start`
3. **Vérifiez que tous les liens fonctionnent**
4. **Optimisez les images** avant de les ajouter
5. **Activez HTTPS** sur votre hébergement
6. **Surveillez les performances** avec Lighthouse

## 🆘 Problèmes courants

### Le site ne s'affiche pas

- Vérifiez que `baseUrl` est correct dans `docusaurus.config.ts`
- Attendez quelques minutes après le déploiement
- Vérifiez les logs du déploiement

### Les liens sont cassés

- Utilisez des liens relatifs avec `Link` de Docusaurus
- Vérifiez le `baseUrl` dans la configuration

### Le site est lent

- Optimisez les images (format WebP, compression)
- Activez le CDN si disponible
- Utilisez les outils de performance de Chrome DevTools

## 📞 Support

Pour toute aide, consultez :
- Documentation Docusaurus : https://docusaurus.io/docs/deployment
- GitHub Pages : https://docs.github.com/pages

