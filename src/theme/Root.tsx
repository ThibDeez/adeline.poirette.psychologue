import React from 'react';
import Link from '@docusaurus/Link';
import GlobalStructuredData from '@site/src/components/GlobalStructuredData';
import {appointmentUrl} from '@site/src/data/navigation';

/**
 * Root wrapper component de Docusaurus
 * Enveloppe toute l'application et permet d'injecter des éléments globaux
 * Documentation: https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
 */
export default function Root({children}: {children: React.ReactNode}) {
  return (
    <>
      {/* Données structurées Schema.org pour le SEO */}
      <GlobalStructuredData />

      {/* Contenu du site */}
      {children}

      <aside className="mobileAppointmentBar" aria-label="Prise de rendez-vous">
        <Link
          className="button button--primary mobileAppointmentButton"
          href={appointmentUrl}
          aria-label="Prendre rendez-vous sur Doctolib">
          Prendre rendez-vous
        </Link>
      </aside>
    </>
  );
}
