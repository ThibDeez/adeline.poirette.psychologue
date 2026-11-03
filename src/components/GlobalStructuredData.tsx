import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  appointmentUrl,
  instagramUrl,
} from '@site/src/data/navigation';

export default function GlobalStructuredData(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const siteUrl = new URL(useBaseUrl('/'), siteConfig.url).href;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: 'Adeline Poirette',
        description: siteConfig.tagline,
        inLanguage: 'fr-FR',
        publisher: {'@id': `${siteUrl}#psychologist`},
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}#psychologist`,
        name: 'Adeline Poirette',
        jobTitle: 'Psychologue clinicienne',
        description:
          'Psychologue clinicienne diplômée depuis 2015, spécialisée en périnatalité et en accompagnement à la parentalité à Saint-Amand-les-Eaux.',
        url: siteUrl,
        sameAs: [appointmentUrl, instagramUrl],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          name: 'Diplôme universitaire en psychopathologie périnatale et développement précoce',
        },
        knowsAbout: [
          'Psychologie clinique',
          'Périnatalité',
          'Parentalité',
          'Psychopathologie périnatale et développement précoce',
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
