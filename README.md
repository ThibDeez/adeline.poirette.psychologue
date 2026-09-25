# Adeline Poirette — Psychologue clinicienne

Site vitrine à Saint-Amand-les-Eaux, construit avec Docusaurus, React et TypeScript. Hébergement statique sur GitHub Pages, avec domaine personnalisé.

## Développement

```sh
npm ci
npm start
```

## Vérifications et publication

```sh
npm run typecheck
npm run build
npm run serve
```

Les contrôles de typage et de compilation sont aussi exécutés par GitHub Actions. La publication reste une action distincte : `npm run deploy`.

## Contenu

- `src/pages/index.tsx` : accueil, approche, accompagnements et informations pratiques.
- `src/pages/consultations.md` : déroulement et modalités des consultations.
- `src/pages/mentions-legales.md` : mentions légales et confidentialité.
- `blog/` : articles et auteurs.
- `src/components/GlobalStructuredData.tsx` : données structurées du cabinet.
- `docusaurus.config.ts` : navigation, pied de page et métadonnées.

## Présentation

Palette sauge et ivoire, titres en Georgia et texte en police système, sans téléchargement de polices externes. Illustration d’accueil réalisée en CSS. Le thème sombre et les petits écrans disposent de styles adaptés.

La préférence de thème est mémorisée localement. Les rendez-vous se prennent sur Doctolib, via un lien externe.

## Mise à jour des informations

Lors d’un changement de tarif, d’adresse ou de modalités, vérifier l’accueil, la page Consultations, les mentions légales et les données structurées. Les horaires non confirmés ne sont pas publiés. Les articles déclarent leur date de publication dans le front matter ; le build ne dépend pas de l’historique Git. Le fichier `static/CNAME` conserve le domaine personnalisé dans le build.

Avant publication, vérifier le rendu mobile, le thème sombre, les liens externes et l’exactitude des informations professionnelles. Aucun portrait, diplôme ou parcours supplémentaire ne doit être ajouté sans contenu validé par la praticienne.
