import React from 'react';

/** Informations publiques et stables utilisées par les moteurs de recherche. */
export default function GlobalStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.adelinepoirette-psychologue.fr/#website',
        url: 'https://www.adelinepoirette-psychologue.fr',
        name: 'Adeline Poirette - Psychologue clinicienne',
        description:
          "Site du cabinet d’Adeline Poirette, psychologue clinicienne à Saint-Amand-les-Eaux, spécialisée en périnatalité et parentalité.",
        inLanguage: 'fr-FR',
        publisher: {
          '@id': 'https://www.adelinepoirette-psychologue.fr/#psychologist',
        },
      },
      {
        '@type': 'Psychologist',
        '@id': 'https://www.adelinepoirette-psychologue.fr/#psychologist',
        name: 'Adeline Poirette',
        description:
          'Psychologue clinicienne à Saint-Amand-les-Eaux, spécialisée en périnatalité et accompagnement à la parentalité.',
        url: 'https://www.adelinepoirette-psychologue.fr',
        image: 'https://www.adelinepoirette-psychologue.fr/img/og-image.jpg',
        logo: 'https://www.adelinepoirette-psychologue.fr/img/logo.svg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '13 Rue du 18 Juin 1940',
          addressLocality: 'Saint-Amand-les-Eaux',
          postalCode: '59230',
          addressRegion: 'Hauts-de-France',
          addressCountry: 'FR',
        },
        hasMap:
          'https://www.google.com/maps/search/?api=1&query=13+Rue+du+18+Juin+1940+Saint-Amand-les-Eaux',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Porte du Hainaut',
        },
        priceRange: '50 €',
        paymentAccepted: ['Carte bancaire', 'Espèces'],
        currenciesAccepted: 'EUR',
        availableLanguage: 'fr-FR',
        knowsAbout: [
          'Psychologie clinique',
          'Périnatalité',
          'Parentalité',
          'Deuil périnatal',
          'Troubles anxieux et dépressifs',
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Numéro ADELI',
            name: '599326485',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Numéro RPPS',
            name: '10009288001',
          },
        ],
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Parking gratuit',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Accès aux personnes à mobilité réduite',
            value: true,
          },
        ],
        sameAs: [
          'https://www.doctolib.fr/psychologue/saint-amand-les-eaux/adeline-poirette',
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
    />
  );
}
