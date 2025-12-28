import React from 'react';
import Head from '@docusaurus/Head';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Psychologist',
    name: 'Adeline Poirette',
    description: 'Psychologue clinicienne spécialisée en périnatalité et accompagnement à la parentalité',
    url: 'https://www.adelinepoirette-psychologue.fr',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '13 Rue du 18 Juin 1940',
      addressLocality: 'Saint-Amand-les-Eaux',
      postalCode: '59230',
      addressRegion: 'Hauts-de-France',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.4478,
      longitude: 3.4283,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Saint-Amand-les-Eaux',
      },
      {
        '@type': 'City',
        name: 'Lille',
      },
      {
        '@type': 'City',
        name: 'Valenciennes',
      },
      {
        '@type': 'City',
        name: 'Douai',
      },
      {
        '@type': 'City',
        name: 'Orchies',
      },
      {
        '@type': 'City',
        name: 'Raismes',
      },
      {
        '@type': 'City',
        name: 'Condé-sur-l\'Escaut',
      },
      {
        '@type': 'City',
        name: 'Denain',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '50€',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services psychologiques',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Accompagnement périnatal',
            description: 'Accompagnement psychologique pendant la grossesse et le post-partum',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dépression post-partum',
            description: 'Prise en charge de la dépression post-partum et du baby blues',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Accompagnement PMA',
            description: 'Soutien psychologique durant un parcours de procréation médicalement assistée',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deuil périnatal',
            description: 'Accompagnement du deuil périnatal (fausse couche, IMG, mort néonatale)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Guidance parentale',
            description: 'Accompagnement et guidance parentale pour parents d\'enfants de tout âge',
          },
        },
      ],
    },
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}

