import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Shared labels, destinations and order for both navigation areas.
const navigationLinks = [
  {label: 'À propos', to: '/#apropos'},
  {label: 'Spécialités', to: '/#specialites'},
  {label: 'Tarifs', to: '/#tarifs'},
  {label: 'Le cabinet', to: '/#contact'},
  {label: 'Consultations', to: '/consultations'},
  {label: 'Blog', to: '/blog'},
];

const appointmentLink = {
  label: 'Prendre rendez-vous',
  href: 'https://www.doctolib.fr/psychologue/saint-amand-les-eaux/adeline-poirette',
};

const careLinks = [
  {label: 'Périnatalité', to: '/perinatalite'},
  {label: 'Parentalité', to: '/parentalite'},
  {label: 'Mon soutien psy', to: '/mon-soutien-psy'},
];

const config: Config = {
  title: 'Adeline Poirette',
  tagline: 'Psychologue clinicienne spécialisée en périnatalité et accompagnement à la parentalité',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
    experimental_vcs: false, // Publication dates are explicit; no Git history needed.
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
        content: '#42634f',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msapplication-TileColor',
        content: '#42634f',
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '/search',
            '/blog/archive',
            '/blog/authors',
            '/blog/authors/**',
            '/blog/tags',
            '/blog/tags/**',
          ],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
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
        ...navigationLinks.map((link) => ({...link, position: 'left' as const})),
        {
          ...appointmentLink,
          position: 'right',
          className: 'button button--primary',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: navigationLinks,
        },
        {
          title: 'Accompagnements',
          items: careLinks,
        },
        {
          title: 'Rendez-vous & accès',
          items: [
            appointmentLink,
            {
              label: 'Itinéraire sur Google Maps',
              href: 'https://www.google.com/maps/search/?api=1&query=13+Rue+du+18+Juin+1940+Saint-Amand-les-Eaux',
            },
          ],
        },
        {
          title: 'Informations',
          items: [
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
