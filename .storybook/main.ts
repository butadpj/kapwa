import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  stories: ['../src/lib/kapwa/**/*.stories.tsx'],
  staticDirs: [
    { from: '../public/logos/svg', to: '/logos/svg' },
    { from: '../public/manifest', to: '/manifest' },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config-storybook.ts',
      },
    },
  },
  addons: [
    './manager-preset.cjs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async config => {
    // Ensure Vite can resolve workspace dependencies
    config.resolve = config.resolve || {};
    return config;
  },
};

export default config;
