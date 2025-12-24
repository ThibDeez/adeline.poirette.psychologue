import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Adeline Poirette - Psychologue à Saint-Amand-les-Eaux',
  tagline: 'Psychologue clinicienne spécialisée en périnatalité et accompagnement à la parentalité',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://thibdeez.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/adeline.poirette.psychologue/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thibdeez', // Usually your GitHub org/user name.
  projectName: 'adeline.poirette.psychologue', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  // SEO metadata
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'psychologue, Saint-Amand-les-Eaux, périnatalité, dépression post-partum, PMA, procréation médicalement assistée, deuil, accompagnement deuil, troubles anxieux, troubles dépressifs, guidance parentale, psychologie du nourrisson, psychologue clinicienne',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'geo.region',
        content: 'FR-59',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'geo.placename',
        content: 'Saint-Amand-les-Eaux',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'infos',
        },
        blog: false, // Désactiver le blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Adeline Poirette',
      logo: {
        alt: 'Adeline Poirette Psychologue',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/#apropos',
          label: 'À propos',
          position: 'left',
        },
        {
          to: '/#specialites',
          label: 'Spécialités',
          position: 'left',
        },
        {
          to: '/#tarifs',
          label: 'Tarifs',
          position: 'left',
        },
        {
          to: '/infos/intro',
          label: 'Informations pratiques',
          position: 'left',
        },
        {
          href: 'https://www.doctolib.fr/psychologue/saint-amand-les-eaux/adeline-poirette',
          label: 'Prendre rendez-vous',
          position: 'right',
          className: 'button button--primary',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Cabinet',
          items: [
            {
              label: 'À propos',
              to: '/#apropos',
            },
            {
              label: 'Spécialités',
              to: '/#specialites',
            },
            {
              label: 'Tarifs & Remboursements',
              to: '/#tarifs',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Prendre rendez-vous sur Doctolib',
              href: 'https://www.doctolib.fr/psychologue/saint-amand-les-eaux/adeline-poirette',
            },
            {
              label: '📍 Saint-Amand-les-Eaux',
              to: '/#contact',
            },
            {
              label: 'Informations pratiques',
              to: '/infos/intro',
            },
          ],
        },
        {
          title: 'Ressources',
          items: [
            {
              label: 'Quand consulter un psychologue ?',
              to: '/infos/intro',
            },
            {
              label: 'Déroulement d\'une séance',
              to: '/infos/intro',
            },
            {
              label: 'Mentions légales',
              to: '/mentions-legales',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Adeline Poirette - Psychologue. Tous droits réservés.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
