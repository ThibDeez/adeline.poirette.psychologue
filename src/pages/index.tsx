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
        <p className="hero__subtitle">Psychologue à Saint-Amand-les-Eaux</p>
        <p className="hero__subtitle" style={{fontSize: '1.2rem', marginTop: '1rem'}}>
          Accompagnement psychologique personnalisé pour enfants, adolescents et adultes
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
                Bienvenue sur mon site. Je suis <strong>Adeline Poirette</strong>, psychologue diplômée
                et installée à <strong>Saint-Amand-les-Eaux</strong>.
              </p>
              <p>
                Mon cabinet accueille <strong>enfants, adolescents et adultes</strong> dans un cadre
                bienveillant et confidentiel. Mon approche se veut humaine et personnalisée,
                adaptée aux besoins spécifiques de chaque personne.
              </p>
              <p>
                Que vous traversiez une période difficile, que vous souhaitiez faire le point sur
                votre vie, ou que vous ayez besoin d'un accompagnement pour votre enfant,
                je suis là pour vous écouter et vous accompagner dans votre démarche.
              </p>
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
                <li>Chèque</li>
                <li>Espèces</li>
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
                Saint-Amand-les-Eaux<br />
                59230, France
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
                Les horaires de consultation sont flexibles et s'adaptent à vos disponibilités.
              </p>
              <p>
                Consultez les créneaux disponibles directement sur Doctolib pour trouver
                le rendez-vous qui vous convient le mieux.
              </p>
              <h3 style={{marginTop: '2rem'}}>ℹ️ Bon à savoir</h3>
              <ul>
                <li>Consultations sur rendez-vous uniquement</li>
                <li>Cabinet accessible</li>
                <li>Espace confidentiel et sécurisé</li>
              </ul>
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
      description="Adeline Poirette, psychologue à Saint-Amand-les-Eaux. Accompagnement psychologique pour enfants, adolescents et adultes. Consultations sur rendez-vous.">
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
