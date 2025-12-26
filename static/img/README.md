# Logos et Favicon - Guide d'utilisation

Ce dossier contient les logos et favicons pour le site d'Adeline Poirette, psychologue clinicienne.

## 📁 Fichiers disponibles

### Logos
- **`logo.svg`** - Logo principal (200x200) avec silhouette mère-enfant
- **`logo-text.svg`** - Logo avec texte complet (400x120)
- **`favicon.svg`** - Version favicon du logo (64x64)

### Aperçu
- **`logo-preview.html`** - Ouvrez ce fichier dans un navigateur pour voir tous les logos

## 🎨 Design et symbolisme

Les logos représentent :
- **Mère et enfant** : Symbolise la périnatalité et l'accompagnement
- **Formes douces et arrondies** : Évoquent la douceur, la sécurité et le soin
- **Couleurs apaisantes** :
  - **Violet (7B68B6)** : Professionnalisme, calme, sagesse
  - **Rose doux (E8A0BF)** : Bienveillance, périnatalité, douceur

## 🔧 Comment convertir le favicon SVG en ICO

### Option 1 : Convertisseur en ligne (Recommandé)

1. Allez sur l'un de ces sites :
   - [Convertio](https://convertio.co/fr/svg-ico/)
   - [Favicon.io](https://favicon.io/favicon-converter/)
   - [RealFaviconGenerator](https://realfavicongenerator.net/) (le plus complet)

2. Uploadez `favicon.svg`

3. Téléchargez le `favicon.ico` généré

4. Remplacez `static/img/favicon.ico` par le nouveau fichier

### Option 2 : Avec un éditeur d'image

1. Ouvrez `favicon.svg` dans :
   - Photoshop
   - GIMP
   - Inkscape
   - Affinity Designer

2. Exportez en PNG aux tailles : 16x16, 32x32, 64x64, 128x128

3. Utilisez un convertisseur PNG→ICO en ligne

### Option 3 : Avec le script Node.js (si Sharp est installé)

```bash
npm install --save-dev sharp
node generate-favicon.js
```

Puis convertissez le PNG généré en ICO avec un outil en ligne.

## 📝 Configuration dans Docusaurus

### Favicon (déjà configuré)

Dans `docusaurus.config.ts` :
```javascript
favicon: 'img/favicon.ico',
```

### Logo dans la navbar

**Option A - Logo seul (actuel) :**
```javascript
navbar: {
  title: 'Adeline Poirette',
  logo: {
    alt: 'Adeline Poirette Psychologue',
    src: 'img/logo.svg',
  },
}
```

**Option B - Logo avec texte (recommandé) :**
```javascript
navbar: {
  title: '', // Pas de titre car le logo contient le texte
  logo: {
    alt: 'Adeline Poirette Psychologue',
    src: 'img/logo-text.svg',
    width: 300, // Ajustez selon vos préférences
  },
}
```

## 🎯 Recommandations

### Pour la navbar
- Utilisez `logo-text.svg` pour une meilleure identification de marque
- Si l'espace est limité, utilisez `logo.svg` avec le titre texte

### Pour le favicon
- Le fichier ICO doit contenir plusieurs tailles (16x16, 32x32, 64x64)
- Utilisez RealFaviconGenerator pour générer tous les formats modernes (PNG, SVG, etc.)

### Pour les réseaux sociaux
- Créez une image OpenGraph 1200x630 basée sur le logo
- Configurez-la dans `docusaurus.config.ts` avec `image: 'img/og-image.jpg'`

## 🔄 Personnalisation des couleurs

Pour modifier les couleurs, éditez les fichiers SVG :

```xml
<!-- Violet principal -->
<stop offset="0%" style="stop-color:#7B68B6;stop-opacity:1" />

<!-- Rose doux -->
<stop offset="0%" style="stop-color:#E8A0BF;stop-opacity:1" />
```

Suggestions d'alternatives :
- **Bleu apaisant** : #4A90E2 → #6BA4E8
- **Vert nature** : #5CAF8D → #7CCFA4
- **Violet foncé** : #5E4D8A → #7B68B6

## ✨ Prochaines étapes

1. ✅ Les logos SVG sont créés
2. ⏳ Convertir `favicon.svg` en `favicon.ico`
3. ⏳ (Optionnel) Créer une image OpenGraph pour les réseaux sociaux
4. ⏳ (Optionnel) Générer un ensemble complet de favicons pour tous les appareils

## 📞 Support

Pour toute modification ou question, contactez votre développeur web.

