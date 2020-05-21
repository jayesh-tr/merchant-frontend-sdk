import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

import {
  DEFAULT_VIEWPORT,
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS
} from '@storybook/addon-viewport';

setCompodocJson(docJson);

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...DEFAULT_VIEWPORT,
      ...INITIAL_VIEWPORTS,
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    },
  },
  docs: {
    iframeHeight: 400
  }
});
