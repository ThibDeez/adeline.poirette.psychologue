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
  url: 'https://www.adelinepoirette-psychologue.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thibdeez', // Usually your GitHub org/user name.
  projectName: 'adeline.poirette.psychologue', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn', // Les ancres de la page d'accueil sont valides

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
        content: 'psychologue, Saint-Amand-les-Eaux, Lille, Valenciennes, Douai, Orchies, Raismes, Condé-sur-l\'Escaut, Denain, Nord, périnatalité, dépression post-partum, PMA, procréation médicalement assistée, deuil périnatal, accompagnement deuil, troubles anxieux, troubles dépressifs, guidance parentale, psychologie du nourrisson, psychologue clinicienne, parentalité, consultation psychologique, soutien psychologique, psychologue périnatalité Nord',
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
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Adeline Poirette, psychologue clinicienne spécialisée en périnatalité. Cabinet à Saint-Amand-les-Eaux, proche de Lille, Valenciennes, Douai. Accompagnement périnatal, parentalité, dépression post-partum, PMA, deuil périnatal.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: 'Psychologue spécialisée en périnatalité et parentalité. Cabinet à Saint-Amand-les-Eaux (Nord), accessible depuis Lille, Valenciennes, Douai et environs.',
      },
    },
    // Favicons pour différents appareils et tailles
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/img/favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicon.svg',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#7B68B6',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msapplication-TileColor',
        content: '#7B68B6',
      },
    },
  ],

  presets: [
    [
      'classic',
        {
        docs: false,
        blog: {
          blogSidebarTitle: 'Tous les articles',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-J8Y62DT7N6',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/search'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [ require.resolve('docusaurus-lunr-search'), {
      languages: ['fr']
    }]
  ],

  themeConfig: {
    // Image pour les réseaux sociaux (OpenGraph)
    image: 'img/og-image.jpg',
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
          to: '/consultations/',
          label: 'Consultations',
          position: 'left',
        },
        {
          to: '/blog/',
          label: 'Blog',
          position: 'left'},
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
              label: 'Consultations',
              to: '/consultations/',
            },
            {
              label: 'Spécialités',
              to: '/#specialites',
            },
            {
              label: 'Tarifs',
              to: '/#tarifs',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Prendre rendez-vous',
              href: 'https://www.doctolib.fr/psychologue/saint-amand-les-eaux/adeline-poirette',
            },
            {
              label: '📍 Saint-Amand-les-Eaux',
              to: '/#contact',
            },
            {
              label: 'Google Maps',
              href: 'https://www.google.com/maps/search/?api=1&query=13+Rue+du+18+Juin+1940+Saint-Amand-les-Eaux',
            },
          ],
        },
        {
          title: 'Informations',
          items: [
            {
              label: 'Blog',
              to: '/blog/',
            },
            {
              label: 'Mentions légales',
              to: '/mentions-legales/',
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
