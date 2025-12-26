# 🎨 Guide de mise à jour des logos et favicon

## ✅ Ce qui a été créé

J'ai créé les fichiers suivants dans `static/img/` :

### Logos
1. **`logo.svg`** - Logo principal avec silhouette mère-enfant (200x200)
2. **`logo-text.svg`** - Logo avec votre nom et titre (400x120) - **Recommandé pour la navbar**
3. **`favicon.svg`** - Version miniature pour le favicon (64x64)
4. **`og-image.svg`** - Image pour les réseaux sociaux Facebook, LinkedIn, etc. (1200x630)

### Fichiers utiles
5. **`logo-preview.html`** - Page de prévisualisation (ouvrez-la dans votre navigateur)
6. **`README.md`** - Documentation complète

### Scripts
7. **`generate-favicon.js`** (racine) - Script pour convertir le favicon
8. **`generate-og-image.js`** (racine) - Script pour convertir l'image OpenGraph

---

## 🚀 Étapes à suivre maintenant

### Étape 1 : Visualiser les logos
1. Ouvrez `static/img/logo-preview.html` dans votre navigateur (déjà ouvert normalement)
2. Vérifiez que les logos vous plaisent

### Étape 2 : Convertir le favicon SVG en ICO

**Option A - En ligne (le plus simple) :**
1. Allez sur [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Uploadez `static/img/favicon.svg`
3. Téléchargez le package généré
4. Remplacez `static/img/favicon.ico` par le nouveau fichier

**Option B - Avec Convertio :**
1. Allez sur [convertio.co/fr/svg-ico](https://convertio.co/fr/svg-ico/)
2. Uploadez `static/img/favicon.svg`
3. Téléchargez le `favicon.ico`
4. Remplacez le fichier existant

### Étape 3 : Convertir l'image OpenGraph

L'image OpenGraph est utilisée quand votre site est partagé sur les réseaux sociaux.

**Option A - En ligne :**
1. Allez sur [cloudconvert.com/svg-to-jpg](https://cloudconvert.com/svg-to-jpg)
2. Uploadez `static/img/og-image.svg`
3. Téléchargez `og-image.jpg`
4. Placez-le dans `static/img/`

**Option B - Avec Node.js (si Sharp fonctionne) :**
```bash
npm install --save-dev sharp
node generate-og-image.js
```

### Étape 4 : Mettre à jour la configuration (optionnel)

Si vous voulez utiliser le logo avec texte dans la navbar, modifiez `docusaurus.config.ts` :

**Avant :**
```javascript
navbar: {
  title: 'Adeline Poirette',
  logo: {
    alt: 'Adeline Poirette Psychologue',
    src: 'img/logo.svg',
  },
}
```

**Après (recommandé) :**
```javascript
navbar: {
  title: '', // Vide car le logo contient déjà le texte
  logo: {
    alt: 'Adeline Poirette Psychologue',
    src: 'img/logo-text.svg',
    width: 280, // Ajustez selon vos préférences
  },
}
```

---

## 🎨 Personnalisation des couleurs

Si vous voulez changer les couleurs, éditez les fichiers SVG.

### Couleurs actuelles
- **Violet principal** : `#7B68B6` (professionnel, apaisant)
- **Violet clair** : `#9B8BC6`
- **Rose doux** : `#E8A0BF` (périnatalité, bienveillance)
- **Rose moyen** : `#D8849F`

### Pour modifier
Ouvrez n'importe quel fichier `.svg` avec un éditeur de texte et cherchez ces codes couleur pour les remplacer.

**Suggestions d'alternatives :**
- Bleu calme : `#5B9BD5` et `#7AB8E8`
- Vert nature : `#6BAA75` et `#8BC89C`
- Mauve foncé : `#6B5B95` et `#8B7BA5`

---

## 📋 Checklist finale

- [ ] J'ai visualisé les logos dans `logo-preview.html`
- [ ] J'ai converti `favicon.svg` en `favicon.ico`
- [ ] J'ai remplacé l'ancien `favicon.ico`
- [ ] J'ai converti `og-image.svg` en `og-image.jpg` (optionnel)
- [ ] J'ai testé le site localement : `npm start`
- [ ] Les logos s'affichent correctement dans la navbar
- [ ] Le favicon s'affiche dans l'onglet du navigateur

---

## 🆘 En cas de problème

### Le favicon ne s'affiche pas
1. Videz le cache du navigateur (Ctrl+Shift+Delete)
2. Fermez et rouvrez le navigateur
3. Vérifiez que le fichier `static/img/favicon.ico` existe

### Le logo est trop grand/petit dans la navbar
Ajustez la propriété `width` dans `docusaurus.config.ts` :
```javascript
logo: {
  // ...
  width: 250, // Essayez différentes valeurs : 200, 250, 300
}
```

### L'image OG ne s'affiche pas sur les réseaux sociaux
1. Vérifiez que `og-image.jpg` existe dans `static/img/`
2. Testez avec [Facebook Debugger](https://developers.facebook.com/tools/debug/)
3. Attendez quelques minutes, les réseaux sociaux mettent en cache les images

---

## 🔗 Liens utiles

- [RealFaviconGenerator](https://realfavicongenerator.net/) - Générateur complet de favicons
- [Convertio](https://convertio.co/fr/) - Convertisseur de fichiers
- [Facebook Debugger](https://developers.facebook.com/tools/debug/) - Tester l'image OpenGraph
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) - Tester sur LinkedIn

---

## 📞 Questions ?

Si vous avez des questions ou souhaitez des modifications :
- Les couleurs ne vous plaisent pas ?
- Vous voulez un design différent ?
- Le logo doit être ajusté ?

N'hésitez pas à demander des modifications !

---

**Créé le :** 2025-12-26  
**Design :** Logo professionnel et apaisant pour psychologue spécialisée en périnatalité  
**Formats :** SVG (vectoriel, modifiable), ICO (favicon), JPG (réseaux sociaux)

