import { create } from 'storybook/theming';

export default create({
  base: 'light',

  brandTitle: 'Kapwa',
  brandUrl: '/',
  brandImage: '/logos/svg/BetterGov_Icon-Primary.svg',
  brandTarget: '_self',

  fontBase: '"Inter", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace',

  colorPrimary: '#062365',
  colorSecondary: '#005df5',
  textMutedColor: '#596570',

  appBg: '#f0f8ff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#d8dbdf',
  appBorderRadius: 8,

  textColor: '#1e2124',
  textInverseColor: '#ffffff',

  barTextColor: '#596570',
  barSelectedColor: '#005df5',
  barHoverColor: '#062365',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#c6ccd2',
  inputTextColor: '#1e2124',
  inputBorderRadius: 8,
});
