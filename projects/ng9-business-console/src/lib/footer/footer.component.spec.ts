import { render } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('should render the component', async () => {
    const { getByText } = await render(FooterComponent);
    expect(getByText('footer component works!'));
  });
});
