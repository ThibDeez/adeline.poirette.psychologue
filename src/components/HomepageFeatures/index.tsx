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
    title: 'Périnatalité',
    emoji: '🤰',
    description: (
      <>
        Grossesse (déni, anxiété, préparation psychique), post-partum (accouchement difficile,
        baby blues, dépression, interactions précoces, allaitement), toute petite enfance
        (1000 premiers jours, 0-2 ans) et ses défis.
      </>
    ),
  },
  {
    title: 'Conception & PMA',
    emoji: '👶',
    description: (
      <>
        Conception, désir d'enfant, accompagnement Procréation Médicalement Assistée (PMA),
        adoption. Soutien durant le parcours et les difficultés émotionnelles liées
        au projet d'enfant.
      </>
    ),
  },
  {
    title: 'Deuil périnatal',
    emoji: '🕊️',
    description: (
      <>
        Accompagnement psychologique du deuil périnatal et des autres situations de deuil.
        Soutien dans le processus de deuil et l'apaisement de la souffrance.
      </>
    ),
  },
  {
    title: 'Clinique adulte',
    emoji: '🧠',
    description: (
      <>
        Anxiété, dépression, burn-out, deuil, mal-être, difficultés émotionnelles,
        besoin de prise de recul ou d'introspection, périodes de transition,
        démarche de connaissance de soi.
      </>
    ),
  },
  {
    title: 'Parentalité',
    emoji: '👨‍👩‍👧',
    description: (
      <>
        Accompagnement et guidance parentale, épuisement parental, difficultés éducatives,
        anxiété dans son rôle parental, soutien dans vos compétences, difficultés de
        coparentalité, relation parents-enfant et attachement.
      </>
    ),
  },
  {
    title: 'Troubles anxieux & dépressifs',
    emoji: '😔',
    description: (
      <>
        Prise en charge des troubles anxieux et troubles dépressifs dans une approche
        clinique empathique et respectueuse de votre rythme.
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
