import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function NotFoundContent({
  className,
}: {
  className?: string;
}): ReactNode {
  return (
    <main className={clsx(styles.page, className)}>
      <div className={styles.code} aria-hidden="true">404</div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Page introuvable</p>
        <Heading as="h1">Cette page n’existe plus ou a été déplacée.</Heading>
        <p>
          Vous pouvez revenir à l’accueil, découvrir les accompagnements
          proposés ou prendre directement rendez-vous.
        </p>
        <div className={styles.actions}>
          <Link className="button button--primary" to="/">Retour à l’accueil</Link>
          <Link className={styles.secondaryLink} to="/consultations">Voir les consultations</Link>
        </div>
      </div>
    </main>
  );
}
