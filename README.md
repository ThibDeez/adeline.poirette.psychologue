# Site Vitrine - Adeline Poirette, Psychologue

Site professionnel pour le cabinet de psychologie d'Adeline Poirette à Saint-Amand-les-Eaux.

## 🎯 Objectifs du site

- ✅ Présenter l'activité professionnelle
- ✅ Optimisation SEO pour un bon référencement Google
- ✅ Design professionnel et apaisant
- ✅ Informations pratiques pour les patients
- ✅ Lien direct vers Doctolib pour prendre rendez-vous

## 🚀 Démarrage

### Installation
```bash
npm install
```

### Développement
```bash
npm start
```
Le site sera accessible sur `http://localhost:3000`

### Build de production
```bash
npm run build
```

### Déploiement sur GitHub Pages
```bash
npm run deploy
```

## 📋 Structure du site

### Page d'accueil (/)
- Header avec présentation
- Section "À propos"
- Spécialités et accompagnements (6 cartes)
- Tarifs et remboursements
- Contact et accès

### Informations pratiques (/infos/intro)
- Quand consulter un psychologue ?
- Déroulement d'une séance
- Tarifs détaillés
- Prise de rendez-vous
- Confidentialité

### Page À propos (/apropos)
- Présentation détaillée
- Approche thérapeutique
- Domaines d'intervention
- Cadre thérapeutique

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `src/css/custom.css` :
- Couleur primaire : Bleu apaisant (#4a90a4)
- Couleur secondaire : Vert doux (#7fa99b)

### Contenu
- Configuration globale : `docusaurus.config.ts`
- Page d'accueil : `src/pages/index.tsx`
- Spécialités : `src/components/HomepageFeatures/index.tsx`
- Informations pratiques : `docs/intro.md`

## 🔍 SEO

Le site inclut :
- ✅ Métadonnées optimisées (title, description, keywords)
- ✅ Balises Open Graph pour les réseaux sociaux
- ✅ Balises géographiques (Saint-Amand-les-Eaux, Nord)
- ✅ robots.txt configuré
- ✅ Sitemap automatique (généré par Docusaurus)
- ✅ URLs sémantiques
- ✅ Structure HTML5 sémantique
- ✅ Responsive design pour mobile

## 📱 Responsive

Le site est entièrement responsive et s'adapte à tous les écrans :
- 📱 Mobile
- 💻 Tablette
- 🖥️ Desktop

## 🛠️ Technologies

- **Docusaurus 3.9.2** : Framework de site statique
- **React 19** : Librairie UI
- **TypeScript** : Typage fort
- **CSS Modules** : Styles scopés

## 📦 Déploiement

Le site est configuré pour être déployé sur GitHub Pages :
- URL : `https://thibdeez.github.io/adeline.poirette.psychologue/`

Pour déployer :
```bash
npm run build
npm run deploy
```

## 🎯 Optimisations futures possibles

1. **Ajouter des témoignages** de patients (avec leur accord)
2. **Blog** pour partager des articles sur la psychologie
3. **FAQ** pour répondre aux questions fréquentes
4. **Formulaire de contact** en complément de Doctolib
5. **Photos du cabinet** pour rassurer les patients
6. **Vidéo de présentation** pour créer du lien
7. **Actualités** sur les horaires, congés, etc.
8. **Google Analytics** pour suivre les statistiques
9. **Schema.org markup** pour enrichir les résultats de recherche
10. **Google My Business** pour apparaître sur Google Maps

## 📞 Support

Pour toute question sur le site, contactez le développeur ou consultez la documentation Docusaurus :
https://docusaurus.io/

---

**Note** : N'oubliez pas de :
- ✅ Mettre à jour les informations de contact si nécessaire
- ✅ Ajouter votre numéro ADELI dans `/docs/intro.md`
- ✅ Personnaliser le logo dans `/static/img/logo.svg`
- ✅ Ajouter un favicon personnalisé dans `/static/img/favicon.ico`
- ✅ Vérifier que l'URL Doctolib est correcte

