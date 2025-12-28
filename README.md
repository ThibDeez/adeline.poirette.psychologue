# Site Vitrine - Adeline Poirette, Psychologue Clinicienne

Site professionnel pour le cabinet de psychologie d'Adeline Poirette, spécialisée en périnatalité et parentalité, à Saint-Amand-les-Eaux (Nord).

## 🎯 Objectifs du site

- ✅ Présenter l'activité professionnelle et les spécialités
- ✅ Optimisation SEO pour un excellent référencement Google (local et régional)
- ✅ Référencement géographique : Saint-Amand-les-Eaux, Lille, Valenciennes, Douai
- ✅ Design professionnel, apaisant et accessible
- ✅ Informations pratiques complètes pour les patients
- ✅ Lien direct vers Doctolib pour prendre rendez-vous
- ✅ Identité visuelle professionnelle (logos et favicons personnalisés)
- ✅ Blog avec contenu SEO optimisé

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
- Header avec présentation et localisation
- Section "À propos" avec zone géographique
- Spécialités et accompagnements (6 cartes détaillées)
- Tarifs et remboursements
- Contact, accès et villes desservies

### Pages informations (/infos/)
- **Introduction** (`/infos/intro`) - Quand consulter, déroulement, confidentialité
- **Pourquoi consulter** (`/infos/pourquoi-consulter`) - Situations d'accompagnement
- **FAQ** (`/infos/faq`) - Questions fréquentes
- **Accès au cabinet** (`/infos/acces-cabinet`) - Itinéraires depuis Lille, Valenciennes, Douai, etc.

### Page À propos (/apropos)
- Présentation détaillée du parcours
- Formations et diplômes
- Approche thérapeutique
- Valeurs et méthode de travail

### Page Mentions légales (/mentions-legales)
- Informations légales obligatoires
- RGPD et protection des données
- Numéros ADELI et RPPS

### Blog (/blog)
- Article sur la place du père en PMI
- Articles SEO-optimisés pour le référencement local

## 🎨 Identité visuelle et personnalisation

### Logos
Le site dispose d'une identité visuelle complète :
- **Logo principal** (`static/img/logo.svg`) - Silhouette mère-enfant (200×200)
- **Logo avec texte** (`static/img/logo-text.svg`) - Pour la navbar (400×120)
- **Favicon multi-formats** - Optimisé pour tous les appareils

Pour plus de détails, consultez `GUIDE-LOGOS.md`.

### Favicons
Configuration complète pour tous les appareils :
- `favicon.ico` - Format classique
- `favicon-16x16.png` et `favicon-32x32.png` - Tailles standards
- `favicon.svg` - Format vectoriel moderne
- `apple-touch-icon.png` - iOS (180×180)
- `android-chrome-192x192.png` et `android-chrome-512x512.png` - Android
- `site.webmanifest` - Manifeste PWA
- `browserconfig.xml` - Configuration Windows

Pour plus de détails, consultez `CONFIGURATION-FAVICONS.md`.

### Couleurs
Les couleurs sont définies dans `src/css/custom.css` :
- **Couleur primaire** : Violet apaisant (#7B68B6)
- **Couleur secondaire** : Rose doux (#E8A0BF)
- **Theme-color** : #7B68B6 (barre d'adresse mobile)

Ces couleurs ont été choisies pour évoquer le professionnalisme, la bienveillance et la périnatalité.

### Contenu
- Configuration globale : `docusaurus.config.ts`
- Page d'accueil : `src/pages/index.tsx`
- Spécialités : `src/components/HomepageFeatures/index.tsx`
- Informations pratiques : `docs/*.md`
- Articles de blog : `blog/*.md`

## 🔍 SEO et Référencement

Le site inclut des optimisations SEO avancées :

### Métadonnées optimisées
- ✅ Balises title, description, keywords personnalisées
- ✅ Balises Open Graph pour les réseaux sociaux
- ✅ Image OpenGraph personnalisée (`og-image.jpg`)
- ✅ Balises géographiques (Saint-Amand-les-Eaux, Nord, Hauts-de-France)

### Référencement local
- ✅ **Villes cibles** : Saint-Amand-les-Eaux, Lille, Valenciennes, Douai, Orchies, Raismes, Condé-sur-l'Escaut, Denain
- ✅ Page dédiée "Accès au cabinet" avec itinéraires depuis toutes les villes
- ✅ Mentions géographiques dans le contenu
- ✅ Métadonnées géo (geo.region, geo.placename)

### Schema.org (Données structurées)
- ✅ Type : "Psychologist"
- ✅ Adresse complète du cabinet
- ✅ Coordonnées GPS (latitude/longitude)
- ✅ Liste des services proposés
- ✅ Zone de couverture (areaServed) : 12 villes
- ✅ Numéros ADELI et RPPS

Configuration dans `src/theme/Root.tsx`.

### Contenu SEO
- ✅ Blog avec articles optimisés pour le référencement local
- ✅ URLs sémantiques et lisibles
- ✅ Structure HTML5 sémantique
- ✅ Liens internes optimisés
- ✅ Attributs alt sur toutes les images

### Fichiers techniques
- ✅ `robots.txt` configuré
- ✅ `sitemap.xml` généré automatiquement par Docusaurus
- ✅ `site.webmanifest` pour PWA

### Configuration
- ✅ `onBrokenAnchors: 'warn'` - Gestion des ancres internes
- ✅ `onBrokenLinks: 'throw'` - Détection des liens cassés

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

Le site est configuré pour un domaine personnalisé :
- URL de production : `https://www.adelinepoirette-psychologue.fr`
- BaseURL : `/` (racine du domaine)
- Google Analytics : Intégré (G-J8Y62DT7N6)
- Recherche : Lunr Search (français)

### Configuration du domaine personnalisé

**Important** : Un fichier `CNAME` a été créé dans `static/CNAME` contenant votre domaine personnalisé. Ce fichier sera automatiquement copié dans le dossier `build/` lors du déploiement, ce qui empêchera GitHub Pages de réinitialiser votre domaine.

Contenu du fichier `static/CNAME` :
```
www.adelinepoirette-psychologue.fr
```

### Pour déployer :
```bash
npm run build
npm run deploy
```

Le fichier CNAME sera automatiquement inclus dans le déploiement.

### Configuration DNS requise

Pour faire pointer votre domaine vers GitHub Pages :

1. **Chez votre registrar (OVH, Gandi, etc.)** :
   - Ajoutez un enregistrement CNAME :
     - Nom : `www`
     - Valeur : `thibdeez.github.io`
   - OU ajoutez des enregistrements A pour le domaine racine :
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

2. **Dans GitHub Pages settings** :
   - Allez dans Settings > Pages
   - Sous "Custom domain", entrez : `www.adelinepoirette-psychologue.fr`
   - Cochez "Enforce HTTPS"

Le fichier `CNAME` dans `static/` garantit que votre domaine personnalisé ne sera jamais réinitialisé lors des déploiements.

## 🎯 Fonctionnalités implémentées

1. ✅ **Design professionnel** avec identité visuelle complète
2. ✅ **SEO avancé** avec référencement local multi-villes
3. ✅ **Blog** avec articles optimisés
4. ✅ **FAQ** pour répondre aux questions fréquentes
5. ✅ **Page d'accès** avec itinéraires détaillés
6. ✅ **Données structurées Schema.org** pour les résultats enrichis
7. ✅ **Favicons multi-plateformes** (iOS, Android, Windows)
8. ✅ **PWA ready** avec manifest et theme-color
9. ✅ **OpenGraph** pour un partage optimisé sur les réseaux sociaux
10. ✅ **Responsive design** pour tous les appareils
11. ✅ **Google Analytics** configuré (G-J8Y62DT7N6) avec anonymisation IP
12. ✅ **Recherche intégrée** Lunr Search en français
13. ✅ **Domaine personnalisé** avec fichier CNAME

## 🚀 Optimisations futures possibles

1. **Témoignages** de patients (avec leur accord écrit)
2. **Photos du cabinet** pour rassurer les futurs patients
3. **Vidéo de présentation** pour créer du lien
4. **Formulaire de contact** en complément de Doctolib
5. **Actualités** sur les horaires, congés, événements
6. **Google My Business** pour apparaître sur Google Maps
7. **Articles de blog réguliers** pour améliorer le référencement
8. **Newsletter** pour fidéliser (avec respect RGPD)
9. **Carte interactive** pour localiser le cabinet

## 📞 Support

Pour toute question sur le site, consultez :
- La documentation Docusaurus : https://docusaurus.io/

---

## ✅ Checklist de déploiement

Avant le déploiement final, vérifiez que :
- ✅ Les informations de contact sont à jour
- ✅ L'URL Doctolib est correcte
- ✅ Les numéros ADELI et RPPS sont exacts
- ✅ Tous les liens fonctionnent (internes et externes)
- ✅ Les images s'affichent correctement
- ✅ Le site est testé sur mobile
- ✅ Les favicons s'affichent sur tous les navigateurs
- ✅ Le site est testé en navigation privée
- ✅ Le sitemap est généré (`npm run build`)
- ✅ Les métadonnées SEO sont optimisées

---

**Dernière mise à jour** : 28 décembre 2025  
**Version** : 2.0  
**Status** : ✅ Production Ready

**Note importante** : Le fichier `static/CNAME` est essentiel pour maintenir le domaine personnalisé. Ne le supprimez pas !

