import { defineConfig, loadEnv } from 'vitepress';

const env = loadEnv('', process.cwd());
const isDev = process.env.NODE_ENV !== 'production';
const storybookPath = '/storybook/';
const storybookUrl = isDev
  ? env.VITE_STORYBOOK_HOST || 'http://localhost:6006'
  : storybookPath;

export default defineConfig({
  title: 'Kapwa',
  head: [
    ['link', { rel: 'icon', href: '/manifest/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest/site.webmanifest' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/manifest/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/manifest/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/manifest/favicon-16x16.png',
      },
    ],
  ],
  description: 'Kapwa design system documentation',
  outDir: '../site',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['VITE_DUAL_BUILD_SETUP.md'],
  ignoreDeadLinks: [
    /^\/storybook\/?$/,
    /^\.?\.?\/\.\.\/src\//,
    /^\.?\.?\/\.\.\/README(?:\.md)?$/,
    /^\.?\.?\/\.\.\/CONTRIBUTING(?:\.md)?$/,
    /^\.?\.?\/\.\.\/netlify\.toml$/,
    /^\.\/PRs(?:\.md)?$/,
  ],
  vite: {
    // Keep static assets in the repo-standard root /public directory.
    publicDir: '../public',
    plugins: isDev
      ? [
          {
            name: 'kapwa-storybook-dev-redirect',
            configureServer(server) {
              server.middlewares.use((req, res, next) => {
                if (req.url === '/storybook' || req.url === '/storybook/') {
                  res.statusCode = 302;
                  res.setHeader(
                    'Location',
                    env.VITE_STORYBOOK_HOST || 'http://localhost:6006'
                  );
                  res.end();
                  return;
                }

                next();
              });
            },
          },
        ]
      : [],
  },
  themeConfig: {
    logo: '/logos/svg/BetterGov_Icon-Primary.svg',
    nav: [
      { text: 'Guides', link: '/guides/' },
      { text: 'Design Decisions', link: '/decisions/' },
      { text: 'Journey', link: '/journey/' },
      { text: 'About', link: '/about/' },
      {
        text: 'Component Reference',
        link: storybookUrl,
        target: '_blank',
        rel: 'noreferrer',
      },
    ],
    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Overview', link: '/guides/' },
            { text: 'Migration', link: '/guides/migration' },
            { text: 'Using Storybook', link: '/guides/using-storybook' },
          ],
        },
      ],
      '/decisions/': [
        {
          text: 'Design Decisions',
          items: [
            { text: 'Overview', link: '/decisions/' },
            { text: 'Why Kapwa', link: '/decisions/why-kapwa' },
            {
              text: 'Token Architecture',
              link: '/decisions/token-architecture',
            },
          ],
        },
      ],
    },
    footer: {
      message: 'Kapwa documentation for BetterGov design system work.',
      copyright: 'BetterGov',
    },
    search: {
      provider: 'local',
    },
    outline: {
      level: [2, 3],
      label: 'On this page',
    },
    storybookUrl,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bettergovph/kapwa' },
    ],
  },
});
