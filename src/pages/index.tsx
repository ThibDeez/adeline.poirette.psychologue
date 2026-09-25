import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const appointment = 'https://www.doctolib.fr/psychologue/saint-amand-les-eaux/adeline-poirette';
const services = [
  ['Clinique adulte', 'Traverser une période difficile', 'Anxiété, mal-être, épuisement, deuil ou besoin de prendre du recul : un espace pour mettre des mots sur ce que vous vivez.'],
  ['Périnatalité', 'Devenir parent, à votre rythme', 'Désir d’enfant, parcours de PMA, grossesse et post-partum : un accompagnement dans les changements et les questionnements de cette période.'],
  ['Parentalité', 'Trouver votre place de parent', 'Épuisement parental, difficultés éducatives ou de coparentalité : prendre le temps de comprendre vos réactions et de soutenir vos ressources.'],
  ['Deuil périnatal', 'Être accompagné dans la perte', 'Un espace d’écoute pour accueillir votre vécu et votre souffrance, dans le respect de votre histoire et de votre rythme.'],
];

export default function Home(): ReactNode {
  return <Layout title="Psychologue à Saint-Amand-les-Eaux" description="Adeline Poirette, psychologue clinicienne à Saint-Amand-les-Eaux. Accompagnement des adultes, périnatalité et parentalité. Consultations sur rendez-vous.">
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Psychologue clinicienne · Saint-Amand-les-Eaux</p>
          <h1>Un espace pour vous,<br /><em>à chaque étape de vie.</em></h1>
          <p className={styles.intro}>Je suis Adeline Poirette. J’accompagne les adultes, les parents et les futurs parents dans les moments de questionnement, de changement ou de difficulté.</p>
          <div className={styles.actions}><Link className="button button--primary" href={appointment}>Prendre rendez-vous</Link><Link className={styles.textLink} to="#apropos">Découvrir mon approche <span aria-hidden="true">↗</span></Link></div>
          <p className={styles.heroNote}>Au cabinet · En individuel, en couple ou en famille</p>
        </div>
        <div className={styles.art} aria-hidden="true"><div className={styles.arch}><div className={styles.sun} /><div className={styles.hillOne} /><div className={styles.hillTwo} /><div className={styles.line} /></div><span>Écouter. Comprendre. Avancer.</span></div>
      </section>
      <div className={styles.facts}><span>Adultes & parentalité</span><span>Séance de 1 heure</span><span>50 € la consultation</span><span>Dispositif Mon soutien psy</span></div>
      <section className={styles.section}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>À propos</p><Heading as="h2" id="apropos">Une écoute attentive,<br /><em>un accompagnement singulier.</em></Heading></div>
        <div className={styles.prose}><p>Psychologue clinicienne spécialisée en périnatalité et en accompagnement à la parentalité, je vous reçois dans mon cabinet à Saint-Amand-les-Eaux.</p><p>Mon approche est clinique, empathique et respectueuse du rythme de chacun. Ensemble, nous prenons le temps d’explorer ce que vous traversez, de soutenir vos ressources et de donner du sens à votre expérience.</p><p>Vous pouvez venir seul, en couple, avec votre bébé ou en famille. Les consultations avec bébé concernent la relation parent-enfant ; je ne propose pas de suivi individuel pour les enfants et les adolescents.</p><Link className={styles.textLink} to="/consultations">Comment se déroule une consultation <span aria-hidden="true">→</span></Link></div>
      </section>
      <section className={styles.services}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Les accompagnements</p><Heading as="h2" id="specialites">Ce qui vous amène,<br /><em>ce que nous pouvons explorer.</em></Heading></div>
        <div className={styles.serviceGrid}>{services.map(([label, title, description], index) => <article className={styles.service} key={label}><span className={styles.number}>0{index + 1}</span><p className={styles.serviceLabel}>{label}</p><h3>{title}</h3><p>{description}</p></article>)}</div>
        <Link className={styles.textLink} to="/consultations">En savoir plus sur les consultations <span aria-hidden="true">→</span></Link>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>En pratique</p><Heading as="h2" id="tarifs">Un cadre clair,<br /><em>dès le premier rendez-vous.</em></Heading></div>
        <div className={styles.pricing}><div className={styles.price}><strong>50 €</strong><span>la séance · 1 heure</span></div><p>Règlement par carte bancaire ou en espèces.</p><p>Je participe au dispositif <strong>Mon soutien psy</strong>. Pour les adultes éligibles, jusqu’à 12 séances par année civile peuvent être prises en charge : 60 % par l’Assurance Maladie et, le cas échéant, 40 % par votre complémentaire santé.</p><Link className={styles.textLink} to="/consultations#mon-soutien-psy">Comprendre le remboursement et le tiers payant <span aria-hidden="true">→</span></Link><p className={styles.small}>En cas d’empêchement, merci de prévenir au moins 48 heures à l’avance.</p></div>
      </section>
      <section className={styles.contact}>
        <div><p className={styles.eyebrow}>Le cabinet</p><Heading as="h2" id="contact">Nous rencontrer<br /><em>à Saint-Amand-les-Eaux.</em></Heading><p>13 Rue du 18 Juin 1940<br />59230 Saint-Amand-les-Eaux</p><p className={styles.small}>Parking gratuit · Entrée accessible aux personnes à mobilité réduite</p><Link className={styles.textLink} href="https://www.google.com/maps/search/?api=1&query=13+Rue+du+18+Juin+1940+Saint-Amand-les-Eaux">Voir l’itinéraire sur Google Maps <span aria-hidden="true">↗</span></Link></div>
        <div className={styles.appointment}><h3>Faire le premier pas</h3><p>Les disponibilités et la prise de rendez-vous sont accessibles directement sur Doctolib.</p><Link className="button button--primary" href={appointment}>Prendre rendez-vous sur Doctolib</Link><p className={styles.small}>Consultations au cabinet, sur rendez-vous uniquement.</p></div>
      </section>
    </main>
  </Layout>;
}
