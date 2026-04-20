import type { Preview } from '@storybook/react';
import kapwaTheme from './kapwaTheme';
import '../src/styles/index.css'; // Import global styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: kapwaTheme,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
        {
          name: 'gray',
          value: '#f5f5f5',
        },
      ],
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [Story => <Story />],
};

export default preview;
