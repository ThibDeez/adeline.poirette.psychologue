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
    title: 'Périnatalité & Post-partum',
    emoji: '👶',
    description: (
      <>
        Accompagnement psychologique pendant la grossesse et après l'accouchement.
        Prise en charge de la dépression post-partum, des difficultés d'attachement,
        et du soutien à la parentalité. Psychologie du nourrisson.
      </>
    ),
  },
  {
    title: 'Accompagnement PMA',
    emoji: '🤰',
    description: (
      <>
        Soutien psychologique dans le parcours de Procréation Médicalement Assistée.
        Accompagnement des difficultés émotionnelles liées à l'infertilité, aux
        traitements et au vécu du parcours PMA.
      </>
    ),
  },
  {
    title: 'Accompagnement du deuil',
    emoji: '🕊️',
    description: (
      <>
        Accompagnement psychologique dans le processus de deuil : perte d'un proche,
        deuil périnatal, deuil traumatique. Soutien pour traverser les étapes du deuil
        et retrouver un équilibre de vie.
      </>
    ),
  },
  {
    title: 'Troubles dépressifs',
    emoji: '😔',
    description: (
      <>
        Prise en charge de la dépression sous toutes ses formes : dépression post-partum,
        dépression saisonnière, épisode dépressif majeur. Accompagnement pour retrouver
        goût à la vie et motivation.
      </>
    ),
  },
  {
    title: 'Troubles anxieux',
    emoji: '😰',
    description: (
      <>
        Accompagnement des troubles anxieux : anxiété généralisée, crises d'angoisse,
        anxiété liée à la grossesse ou à la parentalité, stress post-traumatique.
        Techniques pour apaiser l'anxiété.
      </>
    ),
  },
  {
    title: 'Guidance parentale',
    emoji: '👨‍👩‍👧',
    description: (
      <>
        Accompagnement et soutien à la parentalité. Aide pour gérer les difficultés
        éducatives, comprendre les besoins de son enfant, renforcer le lien parent-enfant
        et développer ses compétences parentales.
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
