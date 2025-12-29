import React from 'react';
import GlobalStructuredData from '@site/src/components/GlobalStructuredData';

/**
 * Root wrapper component de Docusaurus
 * Enveloppe toute l'application et permet d'injecter des éléments globaux
 * Documentation: https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
 */
export default function Root({children}) {
  return (
    <>
      {/* Données structurées Schema.org pour le SEO */}
      <GlobalStructuredData />

      {/* Contenu du site */}
      {children}
    </>
  );
}

