# 📚 Index des ressources et documentation

Ce fichier vous aide à naviguer dans la documentation de votre site.

## 🎯 Par où commencer ?

1. **BIENVENUE.html** 👈 Ouvrez ce fichier dans votre navigateur
2. **GETTING-STARTED.md** - Lisez ce guide de démarrage
3. **README.md** - Vue d'ensemble technique du projet

## 📖 Documentation principale

### Pour débuter

| Fichier | Description | Quand l'utiliser |
|---------|-------------|------------------|
| **BIENVENUE.html** | Page de bienvenue interactive | Maintenant ! |
| **GETTING-STARTED.md** | Guide de démarrage complet | Première lecture |
| **README.md** | Documentation technique | Pour comprendre la structure |

### Pour personnaliser

| Fichier | Description | Temps estimé |
|---------|-------------|--------------|
| **CUSTOMIZATION.md** | Guide de personnalisation | 1-2 heures |
| - Changer les couleurs | Palette de couleurs | 15 min |
| - Modifier le logo | Logo et favicon | 30 min |
| - Personnaliser les textes | Contenu des pages | 1 heure |
| - Ajouter des images | Photos et visuels | 30 min |

### Pour déployer

| Fichier | Description | Temps estimé |
|---------|-------------|--------------|
| **DEPLOY.md** | Guide de déploiement | 30-60 min |
| - GitHub Pages | Hébergement gratuit | 30 min |
| - Nom de domaine | Configuration DNS | 1 heure |
| - Alternatives | Netlify, Vercel, etc. | Variable |

### Pour le référencement

| Fichier | Description | Temps estimé |
|---------|-------------|--------------|
| **SEO.md** | Guide SEO complet | 2-3 heures |
| - Actions prioritaires | Google My Business, etc. | 1 heure |
| - Mots-clés | Recherche et optimisation | 1 heure |
| - Outils de suivi | Analytics, Search Console | 1 heure |

### Pour créer du contenu

| Fichier | Description | Temps estimé |
|---------|-------------|--------------|
| **CONTENT.md** | Guide de création de contenu | Lecture : 30 min |
| - Idées d'articles | 10+ suggestions | - |
| - Format et structure | Template d'article | - |
| - Calendrier éditorial | Planning annuel | - |

## 🗂️ Structure des fichiers du site

### Fichiers de configuration

```
📄 package.json              Configuration npm
📄 docusaurus.config.ts      Configuration principale du site
📄 sidebars.ts               Structure de la documentation
📄 tsconfig.json             Configuration TypeScript
```

### Pages du site

```
📁 src/pages/
  📄 index.tsx               Page d'accueil (React)
  📄 apropos.md              Page À propos (Markdown)
  📄 mentions-legales.md     Mentions légales

📁 docs/
  📄 intro.md                Informations pratiques
  📄 faq.md                  Questions fréquentes
  📄 pourquoi-consulter.md   Pourquoi consulter
```

### Composants React

```
📁 src/components/
  📁 HomepageFeatures/
    📄 index.tsx             Spécialités (6 cartes)
    📄 styles.module.css     Styles des spécialités
```

### Styles

```
📁 src/css/
  📄 custom.css              Styles personnalisés globaux

📁 src/pages/
  📄 index.module.css        Styles page d'accueil
```

### Ressources statiques

```
📁 static/
  📁 img/                    Images et logo
  📄 robots.txt              Configuration robots
```

### Thème personnalisé

```
📁 src/theme/
  📄 Root.tsx                Schema.org pour SEO
```

## 🎨 Fichiers à modifier selon vos besoins

### Pour personnaliser le contenu

| Fichier | Contenu | Priorité |
|---------|---------|----------|
| `src/pages/index.tsx` | Page d'accueil | ⭐⭐⭐ Urgent |
| `src/components/HomepageFeatures/index.tsx` | Spécialités | ⭐⭐⭐ Urgent |
| `docs/intro.md` | Infos pratiques | ⭐⭐ Important |
| `src/pages/apropos.md` | À propos | ⭐⭐ Important |
| `src/pages/mentions-legales.md` | Mentions légales | ⭐⭐ Important |
| `docs/faq.md` | FAQ | ⭐ Optionnel |

### Pour personnaliser le style

| Fichier | Contenu | Priorité |
|---------|---------|----------|
| `src/css/custom.css` | Couleurs principales | ⭐⭐ Si souhaité |
| `static/img/logo.svg` | Logo | ⭐⭐ Si souhaité |
| `static/img/favicon.ico` | Favicon | ⭐ Optionnel |

### Pour configurer le site

| Fichier | Contenu | Priorité |
|---------|---------|----------|
| `docusaurus.config.ts` | Config globale | ⭐⭐⭐ Vérifier |
| `src/theme/Root.tsx` | Schema.org | ⭐ Optionnel |

## 📋 Checklists rapides

### Avant le premier lancement

```bash
☐ Node.js installé (version 20+)
☐ Terminal ouvert dans le bon dossier
☐ npm install exécuté
☐ npm start pour tester
```

### Avant la personnalisation

```bash
☐ CUSTOMIZATION.md lu
☐ Backup du projet créé
☐ Liste des modifications préparée
☐ Textes rédigés (présentation, etc.)
```

### Avant le déploiement

```bash
☐ Site testé localement (npm start)
☐ Tous les liens vérifiés
☐ Contenu relu et corrigé
☐ Mentions légales complétées
☐ npm run build réussi
```

### Après le déploiement

```bash
☐ Site accessible en ligne
☐ Google Search Console configuré
☐ Google My Business créé
☐ Premiers annuaires ajoutés
☐ Analytics installé
```

## 🆘 Résolution de problèmes

### Le site ne démarre pas

1. **Vérifiez Node.js** : `node --version` (doit être 20+)
2. **Réinstallez** : 
   ```bash
   Remove-Item -Recurse -Force node_modules
   npm install
   ```
3. **Consultez** : README.md section "Problèmes courants"

### Erreur lors du build

1. **Vérifiez** les erreurs TypeScript
2. **Consultez** la console pour le détail
3. **Corrigez** les fichiers mentionnés
4. **Retestez** : `npm run build`

### Le site est cassé après modification

1. **Annulez** vos modifications : `git checkout .`
2. **Restaurez** la dernière version qui marchait
3. **Refaites** les modifications progressivement
4. **Testez** après chaque changement

## 💡 Conseils pour réussir

### Organisation

1. **Lisez d'abord** GETTING-STARTED.md
2. **Testez** le site avant toute modification
3. **Modifiez** un fichier à la fois
4. **Sauvegardez** régulièrement (git commit)

### Apprentissage

1. **Documentation Docusaurus** : https://docusaurus.io/docs
2. **Markdown Guide** : https://www.markdownguide.org
3. **React Basics** : https://react.dev/learn (si besoin)
4. **CSS Tricks** : https://css-tricks.com

### Support

1. **Forum Docusaurus** : Questions techniques
2. **Stack Overflow** : Tag [docusaurus]
3. **GitHub Issues** : Bugs Docusaurus
4. **Discord** : Communauté Docusaurus

## 🎯 Objectifs par phase

### Phase 1 : Lancement (Semaine 1)
- [ ] Lire GETTING-STARTED.md
- [ ] Tester le site localement
- [ ] Personnaliser les textes
- [ ] Déployer sur GitHub Pages

### Phase 2 : Référencement (Semaine 2-4)
- [ ] Google My Business
- [ ] Google Search Console
- [ ] 5+ annuaires professionnels
- [ ] Google Analytics

### Phase 3 : Contenu (Mois 2-3)
- [ ] Premier article de blog
- [ ] Partage sur réseaux sociaux
- [ ] Demande premiers avis
- [ ] Monitoring des statistiques

### Phase 4 : Optimisation (Mois 4+)
- [ ] Analyse des performances
- [ ] Ajustements SEO
- [ ] Nouveau contenu régulier
- [ ] Amélioration continue

## 📞 Contact et support

### Documentation locale
Tous les guides sont dans le dossier du projet :
```
C:\Users\B241YI\Downloads\adeline.poirette.psychologue\
```

### Ressources en ligne
- **Docusaurus** : https://docusaurus.io
- **React** : https://react.dev
- **MDN Web Docs** : https://developer.mozilla.org

### Communauté
- **Discord Docusaurus** : https://discord.gg/docusaurus
- **Forum Docusaurus** : https://docusaurus.io/community/support
- **Stack Overflow** : Tag [docusaurus]

---

## ✅ Prochaine action

👉 **Ouvrez BIENVENUE.html dans votre navigateur pour commencer !**

Ou lancez directement le site avec :
```bash
cd C:\Users\B241YI\Downloads\adeline.poirette.psychologue
npm start
```

---

**Bon courage pour votre site ! 🚀**

*Dernière mise à jour : 24 décembre 2025*

