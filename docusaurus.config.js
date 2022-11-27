// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const sidebars = require.resolve('./sidebars.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fabric Wiki',
  url: 'https://mineblock11.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FabricMC', // Usually your GitHub org/user name.
  projectName: 'fabric-wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          // @ts-ignore
          sidebarPath: sidebars.docsSidebar,
          editUrl:
            'https://github.com/mineblock11/fabric-wiki/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ], 
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        // @ts-ignore
        sidebarPath: sidebars.tutorialSidebar,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'player',
        path: 'player',
        routeBasePath: 'player',
        // @ts-ignore
        sidebarPath: sidebars.playerSidebar,
      },
    ]
  ],

  themes: [
    'fabric-fix-theme-github-codeblock'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fabric Wiki',
        logo: {
          alt: 'Fabric Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: 'tutorial', label: 'Tutorials', position: 'left'},
          {to: 'player', label: 'Player Guides', position: 'left'},
          {to: 'docs', label: 'Documentation', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/mineblock11/fabric-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
    }),
};

module.exports = config;
