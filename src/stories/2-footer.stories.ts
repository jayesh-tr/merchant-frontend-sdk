import { Welcome } from '@storybook/angular/demo';
import { withA11y } from '@storybook/addon-a11y';
import { FooterComponent } from '../../projects/ng9-business-console/src/lib/footer/footer.component'

export default {
  title: 'Welcome',
  component: FooterComponent,
  decorators: [withA11y]
};

export const ToStorybook = () => ({
  component: FooterComponent,
  props: {},
});

ToStorybook.story = {
  name: 'Footer Component is rendered',
};