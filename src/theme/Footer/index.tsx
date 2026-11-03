import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import InstagramIcon from '@site/src/components/InstagramIcon';
import {
  appointmentUrl,
  careLinks,
  instagramUrl,
  mapsUrl,
  navigationLinks,
  phoneNumber,
  phoneUrl,
} from '@site/src/data/navigation';
import styles from './styles.module.css';

const practicalLinks = [
  {label: 'Tarifs', to: '/#tarifs'},
  {label: 'Consultations', to: '/consultations'},
  {label: 'Mentions légales', to: '/mentions-legales'},
];

export default function Footer(): ReactNode {
  const logoUrl = useBaseUrl('/img/logo.svg');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <Link className={styles.brand} to="/" aria-label="Retour à l’accueil">
            <img src={logoUrl} alt="" width="72" height="72" />
            <span>
              <strong>Adeline Poirette</strong>
              <small>Psychologue clinicienne</small>
            </span>
          </Link>
          <p>
            Consultations pour adultes, futurs parents et parents, dans un
            cadre clinique et confidentiel à Saint-Amand-les-Eaux.
          </p>
          <address>
            <strong>Adresse :</strong>
            <br />
            <Link className={styles.addressLink} href={mapsUrl}>
              13 Rue du 18 Juin 1940
              <br />
              59230 Saint-Amand-les-Eaux
            </Link>
          </address>
          <div className={styles.phoneContact}>
            <strong>Téléphone :</strong>
            <Link className={styles.phoneNumber} href={phoneUrl}>
              {phoneNumber}
            </Link>
          </div>
          <div className={styles.instagramRow}>
            <div className={styles.instagramLabel}>
              <InstagramIcon />
              <strong>Instagram :</strong>
            </div>
            <Link className={styles.instagramHandle} href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Compte Instagram @lapsydunord">
              @lapsydunord
            </Link>
          </div>
        </div>

        <nav className={styles.linkColumns} aria-label="Navigation du pied de page">
          <div>
            <h2>Découvrir</h2>
            <ul>
              {navigationLinks
                .filter(({label}) => label !== 'Tarifs' && label !== 'Consultations')
                .map(({label, to}) => (
                  <li key={label}><Link to={to}>{label}</Link></li>
                ))}
            </ul>
          </div>
          <div>
            <h2>Accompagnements</h2>
            <ul>
              {careLinks.map(({label, to}) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>En pratique</h2>
            <ul>
              {practicalLinks.map(({label, to}) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
        </nav>

        <div className={styles.appointment}>
          <p className={styles.appointmentLabel}>Prendre rendez-vous</p>
          <p>Consultez les disponibilités et choisissez votre créneau directement sur Doctolib.</p>
          <Link className="button button--primary" href={appointmentUrl}>
            Voir les disponibilités
          </Link>
          <small>Consultations au cabinet ou en téléconsultation, uniquement sur rendez-vous.</small>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Adeline Poirette</span>
        <span>Psychologue clinicienne · Saint-Amand-les-Eaux</span>
      </div>
    </footer>
  );
}
