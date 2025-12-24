import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Enfants & Adolescents',
    emoji: '👶',
    description: (
      <>
        Accompagnement des enfants et adolescents pour les difficultés scolaires,
        troubles du comportement, anxiété, troubles de l'attention, estime de soi,
        relations familiales et sociales.
      </>
    ),
  },
  {
    title: 'Adultes',
    emoji: '🧑',
    description: (
      <>
        Soutien psychologique pour les adultes traversant des périodes difficiles :
        stress, anxiété, dépression, burn-out, difficultés relationnelles,
        transitions de vie, deuil.
      </>
    ),
  },
  {
    title: 'Troubles anxieux',
    emoji: '😰',
    description: (
      <>
        Prise en charge des troubles anxieux, crises d'angoisse, phobies,
        troubles obsessionnels compulsifs (TOC), anxiété généralisée et
        troubles du stress post-traumatique.
      </>
    ),
  },
  {
    title: 'Dépression',
    emoji: '😔',
    description: (
      <>
        Accompagnement dans la gestion de la dépression, troubles de l'humeur,
        perte de motivation, tristesse persistante, et difficultés à retrouver
        du sens dans sa vie.
      </>
    ),
  },
  {
    title: 'Estime de soi',
    emoji: '💪',
    description: (
      <>
        Travail sur la confiance en soi, l'affirmation de soi, la gestion
        des émotions, et le développement personnel pour mieux se connaître
        et s'épanouir.
      </>
    ),
  },
  {
    title: 'Relations & Famille',
    emoji: '👨‍👩‍👧',
    description: (
      <>
        Aide pour les difficultés relationnelles, conflits familiaux,
        séparations, problèmes de couple, communication, et dynamiques
        familiales complexes.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card" style={{padding: '1.5rem', height: '100%', margin: '1rem 0'}}>
        <div className="text--center">
          <span style={{fontSize: '4rem'}} role="img" aria-label={title}>
            {emoji}
          </span>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section id="specialites" className={styles.features}>
      <div className="container">
        <Heading as="h2" style={{textAlign: 'center', marginBottom: '3rem'}}>
          Spécialités & Accompagnements
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
