import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Props = {
  current: string;
};

export default function Breadcrumbs({current}: Props): ReactNode {
  return (
    <nav className={styles.breadcrumbs} aria-label="Fil d’Ariane">
      <ol>
        <li><Link to="/">Accueil</Link></li>
        <li><span aria-hidden="true">/</span><Link to="/consultations">Consultations</Link></li>
        <li aria-current="page"><span aria-hidden="true">/</span>{current}</li>
      </ol>
    </nav>
  );
}
