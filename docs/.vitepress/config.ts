import { defineConfig, loadEnv } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

const env = loadEnv('', process.cwd());
const isDev = process.env.NODE_ENV !== 'production';
const storybookPath = '/storybook/';
const storybookUrl = isDev
  ? env.VITE_STORYBOOK_HOST || 'http://localhost:6006'
  : storybookPath;

export default withMermaid(
  defineConfig({
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
                  if (req.url?.startsWith('/storybook')) {
                    const storybookHost =
                      env.VITE_STORYBOOK_HOST || 'http://localhost:6006';
                    const targetUrl = new URL(storybookHost);
                    const queryStart = req.url.indexOf('?');

                    if (queryStart >= 0) {
                      targetUrl.search = req.url.slice(queryStart);
                    }

                    res.statusCode = 302;
                    res.setHeader('Location', targetUrl.toString());
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
        { text: 'Design Principles', link: '/principles/' },
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
              { text: 'Why Kapwa', link: '/guides/why-kapwa' },
              { text: 'Adoption', link: '/guides/adoption' },
              { text: 'Installation', link: '/guides/installation' },
              { text: 'Using Storybook', link: '/guides/using-storybook' },
              { text: 'Contributing', link: '/guides/contributing' },
              { text: 'Architecture', link: '/guides/architecture' },
            ],
          },
        ],
        '/principles/': [
          {
            text: 'Design Principles',
            items: [
              { text: 'Overview', link: '/principles/' },
              {
                text: 'Token Architecture',
                link: '/principles/token-architecture',
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
  })
);
