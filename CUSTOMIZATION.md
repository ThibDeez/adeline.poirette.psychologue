# Guide de personnalisation

Ce guide vous explique comment personnaliser votre site pour qu'il vous corresponde parfaitement.

## 🎨 Changer les couleurs

### Fichier : `src/css/custom.css`

Les couleurs principales sont définies au début du fichier :

```css
:root {
  --ifm-color-primary: #4a90a4;        /* Couleur principale (bleu) */
  --ifm-color-secondary: #7fa99b;       /* Couleur secondaire (vert) */
}
```

**Suggestions de palettes pour psychologue :**

#### Palette 1 : Bleu calme (actuelle)
```css
--ifm-color-primary: #4a90a4;
--ifm-color-secondary: #7fa99b;
```

#### Palette 2 : Violet doux
```css
--ifm-color-primary: #8b7ba8;
--ifm-color-secondary: #a8b5c7;
```

#### Palette 3 : Vert apaisant
```css
--ifm-color-primary: #6b9080;
--ifm-color-secondary: #a4c3b2;
```

#### Palette 4 : Rose chaleureux
```css
--ifm-color-primary: #c09891;
--ifm-color-secondary: #d4b5b0;
```

Pour générer automatiquement les nuances, utilisez : https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima

## 🖼️ Changer le logo

### Étape 1 : Préparer votre logo

**Format recommandé :**
- SVG (vectoriel, s'adapte à toutes les tailles)
- ou PNG avec fond transparent
- Dimensions : environ 200x50 pixels

### Étape 2 : Remplacer le fichier

1. Placez votre logo dans `/static/img/logo.svg` (ou `.png`)
2. Si vous utilisez un format différent, mettez à jour dans `docusaurus.config.ts` :

```typescript
logo: {
  alt: 'Adeline Poirette Psychologue',
  src: 'img/logo.png', // Changez l'extension si nécessaire
},
```

### Étape 3 : Favicon (icône dans l'onglet du navigateur)

Remplacez `/static/img/favicon.ico`

**Créer un favicon :**
- https://favicon.io (gratuit)
- https://realfavicongenerator.net (complet)

## 📝 Personnaliser les textes

### Page d'accueil : `src/pages/index.tsx`

**Section À propos (lignes 47-60) :**
```typescript
<p>
  Bienvenue sur mon site. Je suis <strong>Adeline Poirette</strong>, psychologue diplômée 
  et installée à <strong>Saint-Amand-les-Eaux</strong>.
</p>
```
👉 Modifiez ce texte pour raconter votre histoire, votre parcours, votre approche.

**Tarifs (ligne 80) :**
```typescript
50€ la séance
```
👉 Changez si nécessaire.

### Spécialités : `src/components/HomepageFeatures/index.tsx`

Les 6 cartes de spécialités sont dans le tableau `FeatureList` (lignes 12-77).

**Exemple pour modifier une spécialité :**
```typescript
{
  title: 'Votre nouveau titre',
  emoji: '🎯', // Changez l'emoji
  description: (
    <>
      Votre nouvelle description ici.
    </>
  ),
},
```

**Emojis utiles :**
- 👤 Personne
- 🧠 Cerveau
- 💭 Pensée
- 💚 Cœur vert
- 🌟 Étoile
- 🎯 Cible
- 🤝 Mains serrées
- 😊 Sourire

Liste complète : https://emojipedia.org

## 📍 Mettre à jour votre adresse

### Dans le fichier : `docusaurus.config.ts`

Mettez à jour les coordonnées GPS (lignes ~30-35 si vous ajoutez Schema.org) :

```typescript
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "50.4478",    // Votre latitude
  "longitude": "3.4294"      // Votre longitude
}
```

**Trouver vos coordonnées :**
1. Allez sur Google Maps
2. Clic droit sur votre adresse
3. Cliquez sur les coordonnées pour les copier

### Dans le fichier : `src/pages/index.tsx`

Section Contact (ligne 118) :
```typescript
<strong>Cabinet de Psychologie</strong><br />
Saint-Amand-les-Eaux<br />
59230, France
```

## 📞 Ajouter votre numéro de téléphone

Si vous souhaitez afficher un numéro de téléphone :

### Dans `src/pages/index.tsx` (section Contact)

Ajoutez après l'adresse :
```typescript
<p>
  <strong>Téléphone :</strong><br />
  <a href="tel:+33123456789">01 23 45 67 89</a>
</p>
```

### Dans `src/theme/Root.tsx` (Schema.org)

Mettez à jour :
```typescript
"telephone": "+33123456789",
```

## 📧 Ajouter votre email

### Dans plusieurs fichiers

1. **Mentions légales** (`src/pages/mentions-legales.md`) :
   ```markdown
   **Email :** votre.email@example.com
   ```

2. **Footer** (`docusaurus.config.ts`) - Ajoutez dans les liens :
   ```typescript
   {
     label: '✉️ Email',
     href: 'mailto:votre.email@example.com',
   },
   ```

## 🖼️ Ajouter vos propres images

### Pour la page d'accueil

1. Placez vos images dans `/static/img/`
2. Utilisez-les dans vos pages :

```typescript
<img 
  src="/img/votre-photo.jpg" 
  alt="Description de la photo"
  style={{width: '100%', maxWidth: '400px', borderRadius: '8px'}}
/>
```

**Optimiser vos images :**
- Compressez avec https://tinypng.com
- Convertissez en WebP avec https://squoosh.app
- Taille max recommandée : 500 Ko par image

## 📄 Ajouter de nouvelles pages

### Créer une page markdown

1. Créez un fichier dans `/src/pages/` :
   ```markdown
   ---
   title: Ma nouvelle page
   description: Description pour le SEO
   ---

   # Ma nouvelle page

   Contenu ici...
   ```

2. La page sera accessible sur : `/ma-nouvelle-page`

### Créer une page React

1. Créez un fichier `.tsx` dans `/src/pages/` :
   ```typescript
   import Layout from '@theme/Layout';

   export default function MaPage() {
     return (
       <Layout title="Ma Page" description="Description">
         <main>
           <h1>Ma nouvelle page</h1>
           <p>Contenu ici...</p>
         </main>
       </Layout>
     );
   }
   ```

## 🔗 Modifier la navigation

### Fichier : `docusaurus.config.ts`

**Barre de navigation (navbar)** - lignes 75-100 :

```typescript
items: [
  {
    to: '/#apropos',
    label: 'À propos',
    position: 'left',
  },
  // Ajoutez vos liens ici
  {
    to: '/votre-nouvelle-page',
    label: 'Nouveau lien',
    position: 'left',
  },
],
```

**Footer** - lignes 102-140 :

Ajoutez des liens dans les sections existantes ou créez une nouvelle section.

## 🎬 Ajouter une vidéo de présentation

Dans `src/pages/index.tsx`, ajoutez dans la section À propos :

```typescript
<div style={{maxWidth: '800px', margin: '2rem auto'}}>
  <iframe
    width="100%"
    height="450"
    src="https://www.youtube.com/embed/VOTRE_VIDEO_ID"
    title="Présentation"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{borderRadius: '12px'}}
  />
</div>
```

## 📱 Modifier les réseaux sociaux

### Ajouter des liens vers vos réseaux

Dans `docusaurus.config.ts`, ajoutez dans le footer :

```typescript
{
  title: 'Réseaux sociaux',
  items: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/votre-profil',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/votre-page',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/votre-compte',
    },
  ],
},
```

## 📚 Ajouter des articles (blog)

Actuellement, le blog est désactivé. Pour l'activer :

### Étape 1 : Réactiver le blog

Dans `docusaurus.config.ts`, remplacez :
```typescript
blog: false,
```

Par :
```typescript
blog: {
  showReadingTime: true,
  blogTitle: 'Articles & Conseils',
  blogDescription: 'Conseils et réflexions sur la psychologie',
},
```

### Étape 2 : Créer des articles

Créez des fichiers dans `/blog/` :

```markdown
---
slug: comprendre-anxiete
title: Comprendre l'anxiété
authors: [adeline]
tags: [anxiété, conseils]
---

Contenu de votre article ici...
<!--truncate-->
Suite de l'article...
```

## 🔧 Personnalisations avancées

### Modifier la police

Dans `src/css/custom.css` :

```css
:root {
  --ifm-font-family-base: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
}
```

Importez la police depuis Google Fonts dans `static/index.html` (à créer) :
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### Ajouter des animations

Installez une bibliothèque d'animations :
```bash
npm install aos
```

Puis utilisez-la dans vos composants.

## 💡 Conseils

### Testez toujours localement
Après chaque modification :
```bash
npm start
```
Visitez http://localhost:3000 pour voir les changements.

### Sauvegardez régulièrement
```bash
git add .
git commit -m "Description des modifications"
git push
```

### Demandez de l'aide
Si vous bloquez :
- Documentation Docusaurus : https://docusaurus.io/docs
- Forum Docusaurus : https://docusaurus.io/community/support
- Stack Overflow : Tag [docusaurus]

## 📋 Checklist de personnalisation

- [ ] Couleurs personnalisées
- [ ] Logo et favicon remplacés
- [ ] Textes de présentation modifiés
- [ ] Spécialités adaptées
- [ ] Adresse mise à jour
- [ ] Coordonnées de contact ajoutées
- [ ] Photos/images ajoutées
- [ ] Navigation vérifiée
- [ ] Mentions légales complétées
- [ ] Testé sur mobile
- [ ] Testé sur différents navigateurs

---

**Besoin d'aide ?** N'hésitez pas à consulter la documentation ou à demander de l'aide à un développeur !

