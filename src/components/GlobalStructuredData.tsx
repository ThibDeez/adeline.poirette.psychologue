import React from 'react';

/**
 * Composant pour les données structurées Schema.org
 * Injectées globalement sur toutes les pages du site pour le SEO
 */
export default function GlobalStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Psychologist", "MedicalBusiness", "LocalBusiness"],
    "@id": "https://www.adelinepoirette-psychologue.fr/#psychologist",
    "name": "Adeline Poirette - Psychologue Clinicienne",
    "alternateName": "Cabinet de Psychologie Adeline Poirette",
    "description": "Psychologue clinicienne spécialisée en périnatalité à Saint-Amand-les-Eaux (59230). Accompagnement psychologique des adultes, futurs parents, jeunes parents. Dépression post-partum, PMA, deuil périnatal, guidance parentale. Consultation en cabinet proche Valenciennes, Lille, Douai.",
    "url": "https://www.adelinepoirette-psychologue.fr",
    "image": "https://www.adelinepoirette-psychologue.fr/img/og-image.jpg",
    "logo": "https://www.adelinepoirette-psychologue.fr/img/logo.svg",
    "telephone": "",
    "email": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13 Rue du 18 Juin 1940",
      "addressLocality": "Saint-Amand-les-Eaux",
      "postalCode": "59230",
      "addressRegion": "Hauts-de-France",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.4478",
      "longitude": "3.4283"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "50€",
    "paymentAccepted": ["Espèces", "Carte bancaire"],
    "currenciesAccepted": "EUR",
    "areaServed": [
      {
        "@type": "City",
        "name": "Saint-Amand-les-Eaux",
        "@id": "https://www.wikidata.org/wiki/Q212260"
      },
      {
        "@type": "City",
        "name": "Valenciennes",
        "@id": "https://www.wikidata.org/wiki/Q41999"
      },
      {
        "@type": "City",
        "name": "Lille",
        "@id": "https://www.wikidata.org/wiki/Q648"
      },
      {
        "@type": "City",
        "name": "Douai",
        "@id": "https://www.wikidata.org/wiki/Q173545"
      },
      {
        "@type": "City",
        "name": "Orchies"
      },
      {
        "@type": "City",
        "name": "Raismes"
      },
      {
        "@type": "City",
        "name": "Condé-sur-l'Escaut"
      },
      {
        "@type": "City",
        "name": "Denain"
      },
      {
        "@type": "City",
        "name": "Wallers"
      },
      {
        "@type": "City",
        "name": "Haveluy"
      },
      {
        "@type": "City",
        "name": "Abscon"
      },
      {
        "@type": "City",
        "name": "Bouchain"
      },
      {
        "@type": "City",
        "name": "Escautpont"
      },
      {
        "@type": "City",
        "name": "Vieux-Condé"
      },
      {
        "@type": "City",
        "name": "Bruay-sur-l'Escaut"
      },
      {
        "@type": "City",
        "name": "Anzin"
      }
    ],
    "availableLanguage": {
      "@type": "Language",
      "name": "Français",
      "alternateName": "fr"
    },
    "knowsLanguage": ["fr-FR"],
    "medicalSpecialty": [
      "Psychologie périnatale",
      "Psychologie clinique",
      "Psychologie de la parentalité",
      "Traitement de la dépression post-partum"
    ],
    "serviceType": [
      "Consultation psychologique",
      "Périnatalité",
      "Accompagnement à la parentalité",
      "Dépression post-partum",
      "Baby blues",
      "Accompagnement PMA",
      "Procréation médicalement assistée",
      "Deuil périnatal",
      "Fausse couche",
      "IMG (Interruption Médicale de Grossesse)",
      "Guidance parentale",
      "Épuisement parental",
      "Burn-out parental",
      "Consultation grossesse",
      "Anxiété périnatale",
      "Consultation couple",
      "Consultation avec bébé",
      "Interactions précoces parent-enfant",
      "Troubles anxieux",
      "Troubles dépressifs"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Psychologie",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultation psychologique individuelle",
            "description": "Séance de consultation psychologique pour adultes (1h)",
            "provider": {
              "@type": "Psychologist",
              "name": "Adeline Poirette"
            }
          },
          "price": "50",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accompagnement périnatal",
            "description": "Accompagnement psychologique pendant la grossesse et le post-partum"
          },
          "price": "50",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Traitement dépression post-partum",
            "description": "Prise en charge de la dépression post-partum et du baby blues"
          },
          "price": "50",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accompagnement PMA",
            "description": "Soutien psychologique durant un parcours de procréation médicalement assistée"
          },
          "price": "50",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accompagnement deuil périnatal",
            "description": "Accompagnement du deuil périnatal (fausse couche, IMG, mort néonatale)"
          },
          "price": "50",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Guidance parentale",
            "description": "Accompagnement et guidance parentale pour parents d'enfants de tout âge"
          },
          "price": "50",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultation couple",
            "description": "Consultation psychologique pour couples (futurs parents, jeunes parents)"
          },
          "price": "50",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultation avec bébé",
            "description": "Consultation précoce parent-bébé (0-2 ans) pour travailler les interactions"
          },
          "price": "50",
          "priceCurrency": "EUR"
        }
      ]
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Numéro ADELI",
        "name": "599326485"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Numéro RPPS",
        "name": "10009288001"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "professional",
        "name": "Psychologue Clinicienne"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Consultation psychologique",
        "price": "50",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking gratuit",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Accès PMR",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Accueil avec bébé",
        "value": true
      }
    ],
    "isAcceptingNewPatients": true,
    "sameAs": [
      "https://www.doctolib.fr/psychologue/saint-amand-les-eaux/adeline-poirette"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

