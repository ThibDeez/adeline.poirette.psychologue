import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  instagramUrl,
  mapsUrl,
  phoneUrl,
} from '@site/src/data/navigation';

export default function LocalPracticeStructuredData(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const siteUrl = new URL(useBaseUrl('/'), siteConfig.url).href;
  const logoUrl = new URL(useBaseUrl('/img/logo.svg'), siteConfig.url).href;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${siteUrl}#cabinet`,
    name: 'Adeline Poirette',
    description:
      'Cabinet de psychologie clinique à Saint-Amand-les-Eaux, spécialisé en périnatalité et accompagnement à la parentalité.',
    url: siteUrl,
    logo: logoUrl,
    telephone: phoneUrl.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '13 Rue du 18 Juin 1940',
      addressLocality: 'Saint-Amand-les-Eaux',
      postalCode: '59230',
      addressRegion: 'Hauts-de-France',
      addressCountry: 'FR',
    },
    hasMap: mapsUrl,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Porte du Hainaut',
    },
    priceRange: '50 €',
    paymentAccepted: ['Carte bancaire', 'Espèces'],
    currenciesAccepted: 'EUR',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Parking gratuit',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Entrée accessible aux personnes à mobilité réduite',
        value: true,
      },
    ],
    employee: {'@id': `${siteUrl}#psychologist`},
    sameAs: [instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
    />
  );
}
