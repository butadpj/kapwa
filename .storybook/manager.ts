import { addons } from 'storybook/manager-api';
import kapwaTheme from './kapwaTheme';

addons.setConfig({
  enableShortcuts: false,
  showToolbar: false,
  theme: kapwaTheme,
});
