# Guide SEO - Référencement naturel

Ce guide vous aidera à améliorer le référencement de votre site sur Google et autres moteurs de recherche.

## ✅ Optimisations déjà en place

### 1. Métadonnées SEO
- ✅ Titres optimisés avec mots-clés
- ✅ Descriptions méta pour chaque page
- ✅ Mots-clés ciblés : psychologue, Saint-Amand-les-Eaux, thérapie, consultation
- ✅ Balises Open Graph pour réseaux sociaux
- ✅ Balises géographiques (géolocalisation)

### 2. Structure technique
- ✅ URLs sémantiques et lisibles
- ✅ Structure HTML5 sémantique
- ✅ Sitemap.xml automatique
- ✅ Robots.txt configuré
- ✅ Schema.org markup (données structurées)
- ✅ Performance optimisée (Docusaurus)

### 3. Contenu
- ✅ Contenu riche et pertinent
- ✅ Hiérarchie des titres (H1, H2, H3)
- ✅ Texte alternatif pour images (à ajouter)
- ✅ Liens internes cohérents
- ✅ Contenu unique (pas de duplicate)

### 4. Mobile
- ✅ Design responsive
- ✅ Navigation mobile optimisée
- ✅ Temps de chargement rapide

## 🎯 Actions prioritaires à faire maintenant

### 1. Google Search Console (URGENT)

**Pourquoi ?** Pour que Google indexe votre site rapidement.

**Comment faire :**
1. Allez sur https://search.google.com/search-console
2. Cliquez sur "Ajouter une propriété"
3. Entrez l'URL de votre site
4. Vérifiez la propriété (fichier HTML ou DNS)
5. Soumettez le sitemap : `https://votresite.com/sitemap.xml`

**Temps estimé :** 15 minutes  
**Impact :** ⭐⭐⭐⭐⭐ (Critique)

### 2. Google My Business (URGENT)

**Pourquoi ?** Pour apparaître sur Google Maps et les recherches locales.

**Comment faire :**
1. Allez sur https://business.google.com
2. Créez un profil d'entreprise
3. Remplissez toutes les informations :
   - Nom : Adeline Poirette - Psychologue
   - Catégorie : Psychologue
   - Adresse exacte du cabinet
   - Téléphone (si souhaité)
   - Site web : lien vers votre site
   - Horaires d'ouverture
   - Photos du cabinet (façade, salle d'attente, bureau)

**Temps estimé :** 30 minutes  
**Impact :** ⭐⭐⭐⭐⭐ (Critique pour référencement local)

### 3. Backlinks - Annuaires professionnels

**Pourquoi ?** Les liens depuis d'autres sites améliorent votre autorité.

**Où s'inscrire :**

#### Annuaires médicaux (Priorité 1)
- [ ] **Doctolib** (déjà fait ✅)
- [ ] **Annuaire Psychologue.net** : https://psychologue.net
- [ ] **Syndicat National des Psychologues** : https://psychologues-psychologie.net
- [ ] **Annuaire FFP** (Fédération Française des Psychologues)

#### Annuaires locaux (Priorité 2)
- [ ] **Pages Jaunes** : https://www.pagesjaunes.fr
- [ ] **118 712** : https://www.118712.fr
- [ ] **Yelp France** : https://www.yelp.fr
- [ ] **Foursquare** : https://foursquare.com

#### Annuaires de santé (Priorité 3)
- [ ] **Doctoome** : https://www.doctoome.com
- [ ] **RDV Médicaux** : https://www.rdv-medicaux.com
- [ ] **MonDocteur** : https://www.mondocteur.fr

**Temps estimé :** 2-3 heures au total  
**Impact :** ⭐⭐⭐⭐ (Important)

### 4. Contenu régulier

**Pourquoi ?** Google favorise les sites mis à jour régulièrement.

**Idées de contenu :**
- Articles de blog sur la psychologie
- Actualités du cabinet (horaires, congés)
- FAQ enrichie régulièrement
- Témoignages de patients (anonymisés, avec accord)

**Fréquence recommandée :** 1-2 articles par mois  
**Impact :** ⭐⭐⭐⭐ (Important sur le long terme)

## 🔍 Mots-clés à cibler

### Mots-clés principaux
- psychologue Saint-Amand-les-Eaux
- consultation psychologique Saint-Amand
- psychologue 59230
- psy Saint-Amand-les-Eaux
- cabinet psychologie Saint-Amand

### Mots-clés secondaires
- psychologue pour enfants Saint-Amand
- psychologue pour adolescents Saint-Amand
- thérapie anxiété Saint-Amand
- psychologue dépression Nord
- accompagnement psychologique Valenciennes (ville proche)
- psychologue burnout Saint-Amand

### Longue traîne (très spécifique)
- comment choisir un psychologue à Saint-Amand
- psychologue troubles anxieux Saint-Amand-les-Eaux
- consultation psy sans rendez-vous Saint-Amand
- tarif psychologue Saint-Amand-les-Eaux
- psychologue remboursement mutuelle

## 📊 Outils de suivi

### Google Analytics (Gratuit)
**Installation :**
1. Créez un compte sur https://analytics.google.com
2. Ajoutez votre site
3. Récupérez votre ID de suivi (G-XXXXXXXXXX)
4. Ajoutez dans `docusaurus.config.ts` :
```typescript
gtag: {
  trackingID: 'G-XXXXXXXXXX',
  anonymizeIP: true,
},
```

**Ce que vous pourrez suivre :**
- Nombre de visiteurs
- Pages les plus consultées
- Provenance des visiteurs (Google, direct, réseaux sociaux)
- Taux de rebond
- Durée des visites

### Microsoft Clarity (Gratuit - Recommandé)
Alternative ou complément à Google Analytics avec des fonctionnalités supplémentaires :
- Enregistrements de sessions
- Heatmaps (cartes de chaleur)
- Plus respectueux de la vie privée

https://clarity.microsoft.com

### Google Search Console (Gratuit - Indispensable)
**Fonctionnalités :**
- Position de vos mots-clés sur Google
- Nombre d'impressions et de clics
- Erreurs d'indexation
- Problèmes de performance mobile
- Backlinks détectés

## 📱 Réseaux sociaux

### LinkedIn (Recommandé pour professionnels)
**Pourquoi ?** Crédibilité professionnelle et networking

**À faire :**
- Créer un profil professionnel complet
- Partager des articles sur la psychologie
- Se connecter avec d'autres professionnels de santé
- Rejoindre des groupes de psychologues

**Fréquence :** 2-3 posts par semaine  
**Impact :** ⭐⭐⭐

### Facebook Page (Optionnel)
**Pourquoi ?** Toucher une audience locale et familiale

**À faire :**
- Créer une page professionnelle
- Partager des conseils bien-être
- Publier vos horaires et actualités
- Répondre aux messages

**Fréquence :** 1-2 posts par semaine  
**Impact :** ⭐⭐⭐

### Instagram (Optionnel)
**Pourquoi ?** Toucher un public plus jeune

**Contenu possible :**
- Citations inspirantes
- Conseils psychologie
- Informations sur la santé mentale

**Fréquence :** 2-3 posts par semaine  
**Impact :** ⭐⭐

## 🎯 Objectifs SEO à 3, 6 et 12 mois

### Dans 3 mois
- [ ] Site indexé sur Google
- [ ] Profil Google My Business actif
- [ ] 10+ backlinks de qualité
- [ ] 50+ visiteurs par mois

### Dans 6 mois
- [ ] Première page Google pour "psychologue Saint-Amand-les-Eaux"
- [ ] 5+ avis Google positifs
- [ ] 100+ visiteurs par mois
- [ ] 3-5 prises de rendez-vous par mois via le site

### Dans 12 mois
- [ ] Top 3 Google pour requête principale
- [ ] 10+ avis Google
- [ ] 200+ visiteurs par mois
- [ ] 10+ prises de rendez-vous par mois via le site

## 📈 Améliorer le référencement local

### 1. Citations locales
Assurez-vous que vos informations (NAP : Name, Address, Phone) sont **identiques** sur tous les sites :
- Même format d'adresse
- Même numéro de téléphone
- Même nom de cabinet

### 2. Avis clients
**Très important pour le SEO local !**

Encouragez vos patients satisfaits à laisser un avis sur :
- Google My Business (priorité)
- Doctolib
- Pages Jaunes

**Comment demander :**
- En fin de suivi, si le patient est satisfait
- Envoi d'un email avec le lien direct
- QR code en salle d'attente

### 3. Contenu local
Mentionnez régulièrement :
- Saint-Amand-les-Eaux
- Les villes proches (Valenciennes, Douai, etc.)
- La région (Nord, Hauts-de-France)

### 4. Photos géolocalisées
- Photos du cabinet avec métadonnées GPS
- Photos de Saint-Amand-les-Eaux
- Photos de la devanture

## ⚠️ À éviter (Pénalités Google)

### ❌ Black Hat SEO
- Achat de backlinks
- Bourrage de mots-clés (keyword stuffing)
- Contenu dupliqué
- Texte caché
- Spam de commentaires

### ❌ Autres erreurs
- Ne pas mettre à jour le site
- Contenu de mauvaise qualité
- Site trop lent
- Pas de version mobile
- Liens cassés

## 📞 Besoin d'aide ?

### Ressources gratuites
- **Google SEO Guide** : https://developers.google.com/search/docs
- **Moz Beginner's Guide** : https://moz.com/beginners-guide-to-seo
- **Ahrefs Blog** : https://ahrefs.com/blog

### Outils gratuits
- **Google PageSpeed Insights** : Tester la vitesse
- **Google Mobile-Friendly Test** : Tester le responsive
- **Answer The Public** : Trouver des questions populaires
- **Ubersuggest** : Recherche de mots-clés (version gratuite limitée)

### Si vous souhaitez déléguer
- **SEO freelance** : 300-800€/mois
- **Agence SEO** : 800-2000€/mois
- **Consultant SEO ponctuel** : 500-1500€ (audit + recommandations)

## ✅ Checklist mensuelle SEO

- [ ] Vérifier Google Search Console (erreurs, positions)
- [ ] Publier 1-2 nouveaux contenus
- [ ] Obtenir 1-2 nouveaux backlinks
- [ ] Demander 1-2 avis Google
- [ ] Vérifier les liens cassés
- [ ] Analyser les statistiques de visite
- [ ] Optimiser une page existante
- [ ] Mettre à jour les informations (horaires, etc.)

---

**Bon courage pour votre référencement ! 🚀**

Le SEO est un travail de long terme. Les premiers résultats apparaissent généralement après 3-6 mois d'efforts réguliers.

