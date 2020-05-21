import { Welcome } from '@storybook/angular/demo';
import { FooterComponent } from '../../projects/ng9-business-console/src/lib/footer/footer.component'

export default {
  title: 'Welcome',
  component: FooterComponent,
};

export const ToStorybook = () => ({
  component: FooterComponent,
  props: {},
});

ToStorybook.story = {
  name: 'Footer Component is rendered',
};
