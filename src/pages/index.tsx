import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  appointmentUrl,
  mapsUrl,
  phoneNumber,
  phoneUrl,
} from '@site/src/data/navigation';
import styles from './index.module.css';

const services = [
  ['Adultes', 'Traverser une période difficile', 'Anxiété, mal-être, épuisement, deuil ou période de transition : un accompagnement pour élaborer ce que vous traversez et mobiliser vos ressources.', '/consultations'],
  ['Périnatalité', 'Être accompagné autour de la naissance', 'Désir d’enfant, parcours de PMA, grossesse et post-partum : un suivi adapté aux enjeux psychiques de la période périnatale.', '/perinatalite'],
  ['Parentalité', 'Soutenir l’exercice de la parentalité', 'Épuisement parental, difficultés éducatives ou de coparentalité : un cadre pour comprendre la situation et identifier des repères adaptés.', '/parentalite'],
  ['Deuil périnatal', 'Traverser l’épreuve de la perte', 'Un accompagnement clinique respectueux de votre histoire, de votre vécu et du temps nécessaire au processus de deuil.', '/perinatalite'],
];

const frequentlyAskedQuestions = [
  {
    question: 'Comment se déroule une première consultation ?',
    answer: 'La première séance dure une heure. Elle permet d’exposer le motif de votre consultation, de préciser vos attentes et d’évaluer le cadre d’accompagnement le plus approprié. Elle ne vous engage pas à poursuivre un suivi.',
  },
  {
    question: 'Faut-il une ordonnance pour Mon soutien psy ?',
    answer: 'Non. Vous pouvez prendre rendez-vous directement, sans prescription préalable. L’entretien initial permet de vérifier que le dispositif correspond à votre situation et à vos besoins.',
  },
  {
    question: 'Puis-je venir avec mon bébé, en couple ou en famille ?',
    answer: 'Oui, selon le motif de consultation. Je reçois les adultes en individuel, en couple ou en famille, ainsi que les parents avec leur bébé dans le cadre de consultations parent-enfant.',
  },
  {
    question: 'Recevez-vous les enfants et les adolescents ?',
    answer: 'Je ne propose pas de suivi psychologique individuel pour les enfants et les adolescents. Je peux cependant recevoir les parents, avec ou sans leur enfant, dans le cadre d’un accompagnement à la parentalité.',
  },
  {
    question: 'Les échanges sont-ils confidentiels ?',
    answer: 'Oui. Les consultations se déroulent dans le respect du secret professionnel et du Code de déontologie des psychologues.',
  },
  {
    question: 'Comment prendre ou déplacer un rendez-vous ?',
    answer: 'Les rendez-vous se prennent et se gèrent sur Doctolib. En cas d’empêchement, merci de prévenir au moins 48 heures à l’avance.',
  },
];

export default function Home(): ReactNode {
  return <Layout title="Psychologue à Saint-Amand-les-Eaux" description="Adeline Poirette, psychologue clinicienne à Saint-Amand-les-Eaux. Consultations adultes, périnatalité, parentalité et Mon soutien psy, sur rendez-vous au cabinet.">
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Psychologue clinicienne · Saint-Amand-les-Eaux</p>
          <h1>Psychologue clinicienne<br /><em>à Saint-Amand-les-Eaux.</em></h1>
          <p className={styles.intro}>J’accompagne les adultes, les futurs parents et les parents confrontés à une difficulté psychique, une période de transition ou des questionnements liés à la périnatalité et à la parentalité.</p>
          <div className={styles.actions}><Link className="button button--primary" href={appointmentUrl}>Prendre rendez-vous</Link><Link className={styles.textLink} to="#apropos">Découvrir mon approche <span aria-hidden="true">↗</span></Link></div>
          <p className={styles.heroNote}>Au cabinet · En individuel, en couple ou en famille</p>
        </div>
        <div className={styles.art} aria-hidden="true"><div className={styles.arch}><div className={styles.sun} /><div className={styles.hillOne} /><div className={styles.hillTwo} /><div className={styles.line} /></div><span>Écouter. Comprendre. Accompagner.</span></div>
      </section>
      <div className={styles.facts}><span>Adultes & parentalité</span><span>Séance de 1 heure</span><span>50 € la consultation</span><span>Dispositif Mon soutien psy</span></div>
      <section className={styles.section}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>À propos</p><Heading as="h2" id="apropos">Une approche clinique,<br /><em>attentive à chaque parcours.</em></Heading></div>
        <div className={styles.prose}><p>Psychologue clinicienne spécialisée en périnatalité et en accompagnement à la parentalité, je vous reçois dans mon cabinet à Saint-Amand-les-Eaux.</p><p>Ma pratique repose sur une écoute clinique, bienveillante et respectueuse du rythme de chacun. Le travail thérapeutique permet d’examiner les difficultés rencontrées, d’en comprendre les enjeux et de soutenir les ressources propres à chaque personne.</p><p>Les consultations peuvent se dérouler en individuel, en couple, avec votre bébé ou en famille. Les consultations avec un bébé portent sur la relation parent-enfant ; je ne propose pas de suivi psychologique individuel aux enfants ni aux adolescents.</p><Link className={styles.textLink} to="/consultations">Découvrir le cadre des consultations <span aria-hidden="true">→</span></Link></div>
      </section>
      <section className={styles.services}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Les accompagnements</p><Heading as="h2" id="specialites">Des consultations adaptées<br /><em>à votre situation.</em></Heading></div>
        <div className={styles.serviceGrid}>{services.map(([label, title, description, href], index) => <article className={styles.service} key={label}><span className={styles.number}>0{index + 1}</span><p className={styles.serviceLabel}>{label}</p><h3>{title}</h3><p>{description}</p><Link className={styles.serviceLink} to={href}>En savoir plus <span aria-hidden="true">→</span></Link></article>)}</div>
        <Link className={styles.textLink} to="/consultations">En savoir plus sur les consultations <span aria-hidden="true">→</span></Link>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>En pratique</p><Heading as="h2" id="tarifs">Un cadre clair,<br /><em>dès le premier rendez-vous.</em></Heading></div>
        <div className={styles.pricing}><div className={styles.price}><strong>50 €</strong><span>la séance · 1 heure</span></div><p>Règlement par carte bancaire ou en espèces.</p><p>Je participe au dispositif <strong>Mon soutien psy</strong>. Pour les adultes éligibles, jusqu’à 12 séances par année civile peuvent être prises en charge : 60 % par l’Assurance Maladie et, le cas échéant, 40 % par votre complémentaire santé.</p><Link className={styles.textLink} to="/mon-soutien-psy">Comprendre le remboursement et le tiers payant <span aria-hidden="true">→</span></Link><p className={styles.small}>En cas d’empêchement, merci de prévenir au moins 48 heures à l’avance.</p></div>
      </section>
      <section className={styles.faq} aria-labelledby="questions-frequentes">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Questions fréquentes</p>
          <Heading as="h2" id="questions-frequentes">Avant votre première consultation.</Heading>
        </div>
        <div className={styles.faqList}>
          {frequentlyAskedQuestions.map(({question, answer}) => (
            <details className={styles.faqItem} key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className={styles.contact}>
        <div><p className={styles.eyebrow}>Le cabinet</p><Heading as="h2" id="contact">Nous rencontrer<br /><em>à Saint-Amand-les-Eaux.</em></Heading><p>13 Rue du 18 Juin 1940<br />59230 Saint-Amand-les-Eaux</p><p><Link className={styles.textLink} href={phoneUrl}>Téléphone : {phoneNumber}</Link></p><p className={styles.small}>Parking gratuit · Entrée accessible aux personnes à mobilité réduite</p><Link className={styles.textLink} href={mapsUrl}>Voir l’itinéraire sur Google Maps <span aria-hidden="true">↗</span></Link></div>
        <div className={styles.appointment}><h3>Prendre rendez-vous</h3><p>Consultez les disponibilités du cabinet et choisissez votre créneau directement sur Doctolib.</p><Link className="button button--primary" href={appointmentUrl}>Accéder à Doctolib</Link><p className={styles.small}>Consultations au cabinet, uniquement sur rendez-vous.</p></div>
      </section>
      <section className={styles.localSeo} aria-labelledby="zone-consultation">
        <Heading as="h2" id="zone-consultation">Psychologue dans le secteur de Saint-Amand-les-Eaux</Heading>
        <p>Le cabinet reçoit à Saint-Amand-les-Eaux, dans le Nord, à proximité de Valenciennes, Raismes, Orchies, Wallers, Vieux-Condé, Condé-sur-l’Escaut et des communes de la Porte du Hainaut. Les consultations s’adressent aux adultes, futurs parents, jeunes parents et parents qui souhaitent un accompagnement psychologique dans un cadre confidentiel.</p>
      </section>
    </main>
  </Layout>;
}
