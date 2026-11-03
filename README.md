# Adeline Poirette — Psychologue clinicienne

Site vitrine construit avec Docusaurus, React et TypeScript. Le site est hébergé sur GitHub Pages avec un domaine personnalisé.

## Prérequis

- Node.js 20 ou supérieur
- npm

## Développement local

Installer les dépendances puis lancer le serveur de développement :

```sh
npm ci
npm start
```

## Vérifier et prévisualiser le build

```sh
npm run typecheck
npm run build
npm run serve
```

`npm run serve` prévisualise le site généré dans le dossier `build/`.

## Publier sur GitHub Pages

Après avoir vérifié le build, lancer :

```sh
npm run deploy
```

La publication est manuelle : ce dépôt ne contient actuellement aucun workflow GitHub Actions pour lancer les vérifications ou publier automatiquement. Le fichier `static/CNAME` conserve le domaine personnalisé lors du build.
