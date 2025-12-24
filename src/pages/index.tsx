import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Adeline Poirette
        </Heading>
        <p className="hero__subtitle">Psychologue clinicienne à Saint-Amand-les-Eaux</p>
        <p className="hero__subtitle" style={{fontSize: '1.2rem', marginTop: '1rem'}}>
          Spécialisée en périnatalité, accompagnement du deuil et troubles anxio-dépressifs
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://www.doctolib.fr/psychologue/saint-amand-les-eaux/adeline-poirette"
            target="_blank"
            rel="noopener noreferrer">
            📅 Prendre rendez-vous sur Doctolib
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section id="apropos" className={styles.aboutSection}>
      <div className="container">
        <div className="row" style={{alignItems: 'center'}}>
          <div className="col col--12">
            <Heading as="h2" style={{textAlign: 'center', marginBottom: '2rem'}}>
              À propos
            </Heading>
            <div style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem'}}>
              <p>
                Bienvenue sur mon site. Je suis <strong>Adeline Poirette</strong>, psychologue clinicienne
                spécialisée en <strong>périnatalité</strong> et installée à <strong>Saint-Amand-les-Eaux</strong>.
              </p>
              <p>
                Je propose des <strong>accompagnements psychologiques pour adultes</strong> traversant un mal-être,
                des difficultés émotionnelles, de l'anxiété, ou vivant des périodes de transition.
                Mon expertise particulière concerne la <strong>période périnatale</strong> : grossesse, post-partum,
                parcours PMA, deuil périnatal, et accompagnement à la parentalité.
              </p>
              <p>
                Je peux vous recevoir <strong>en individuel, en couple, avec votre bébé ou en famille</strong>.
                Mon approche est clinique, empathique et respectueuse de votre rythme, visant à soutenir vos
                ressources psychiques et redonner du sens à votre expérience.
              </p>
              <div style={{marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0f8ff', borderLeft: '4px solid var(--ifm-color-primary)', borderRadius: '4px'}}>
                <p style={{margin: 0, fontSize: '0.95rem'}}>
                  ⚠️ <strong>Important</strong> : Je ne propose pas de suivis psychologiques pour les enfants et adolescents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="tarifs" className={styles.pricingSection}>
      <div className="container">
        <Heading as="h2" style={{textAlign: 'center', marginBottom: '2rem'}}>
          Tarifs & Remboursements
        </Heading>
        <div className="row">
          <div className="col col--12">
            <div className="card" style={{padding: '2rem', maxWidth: '600px', margin: '0 auto'}}>
              <h3>💰 Consultation</h3>
              <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>
                50€ la séance
              </p>
              <p style={{marginTop: '1rem'}}>
                <strong>Moyens de paiement acceptés :</strong>
              </p>
              <ul>
                <li>Espèces</li>
                <li>Carte bancaire</li>
              </ul>
              <div style={{marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--ifm-color-primary-lightest)', borderRadius: '8px'}}>
                <p><strong>ℹ️ Information importante :</strong></p>
                <p>
                  Les consultations chez un psychologue libéral ne sont généralement pas remboursées
                  par la Sécurité Sociale. Cependant, certaines mutuelles proposent une prise en charge
                  partielle ou totale. N'hésitez pas à vous renseigner auprès de votre mutuelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <Heading as="h2" style={{textAlign: 'center', marginBottom: '2rem'}}>
          Contact & Accès
        </Heading>
        <div className="row">
          <div className="col col--6">
            <div className="card" style={{padding: '2rem', height: '100%'}}>
              <h3>📍 Adresse</h3>
              <p>
                <strong>Cabinet de Psychologie</strong><br />
                13 Rue du 18 Juin 1940<br />
                59230 Saint-Amand-les-Eaux
              </p>
              <p style={{fontSize: '0.9rem', color: '#666', marginTop: '0.5rem'}}>
                🅿️ Parking gratuit disponible<br />
                ♿ Entrée accessible
              </p>
              <h3 style={{marginTop: '2rem'}}>📞 Contact</h3>
              <p>
                Pour prendre rendez-vous, merci d'utiliser la plateforme Doctolib.
              </p>
              <Link
                className="button button--primary button--block"
                href="https://www.doctolib.fr/psychologue/saint-amand-les-eaux/adeline-poirette"
                target="_blank"
                rel="noopener noreferrer"
                style={{marginTop: '1rem'}}>
                Réserver sur Doctolib
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className="card" style={{padding: '2rem', height: '100%'}}>
              <h3>🕐 Horaires</h3>
              <p>
                Consultez les créneaux disponibles directement sur Doctolib.
              </p>
              <p style={{fontSize: '0.9rem'}}>
                <strong>Exemple d'horaires :</strong><br />
                Lundi au vendredi : 09h00 - 12h30 et après-midi
              </p>
              <h3 style={{marginTop: '2rem'}}>ℹ️ Bon à savoir</h3>
              <ul>
                <li>Consultations sur rendez-vous uniquement</li>
                <li>Reçoit en individuel, couple ou famille</li>
                <li>Consultations avec bébé possibles</li>
                <li>Cadre chaleureux et bienveillant</li>
              </ul>
              <p style={{marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic'}}>
                ⚠️ Pas de suivi pour enfants et adolescents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Accueil"
      description="Adeline Poirette, psychologue clinicienne spécialisée en périnatalité à Saint-Amand-les-Eaux. Accompagnement des adultes, futurs parents et jeunes parents : dépression post-partum, PMA, deuil périnatal, guidance parentale.">
      <HomepageHeader />
      <main>
        <AboutSection />
        <HomepageFeatures />
        <PricingSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
