import { config } from './config';
import { object } from '@storybook/addon-knobs';
import MockProductData from './mock-data';
import * as withDataNotes from './with-data.notes.md';
import { ProductComponent } from '../../../projects/ng9-business-console/src/lib/components/product/product.component';

export default config;

export const withProductData = () => ({
  component: ProductComponent,
  props: {
    products: MockProductData.map((data, index) => {
      return object(`Data Index ${index}`, data);
    }),
    displayedColumns: [
      'status',
      'productName',
      'totalEarnings',
      'activeCustomers',
      'numOfBilling',
      'ropstenNetworkOn',
      'creationTimestamp',
      'columnClicked',
    ],
  },
});

withProductData.story = {
  name: 'with products data',
  parameters: { notes: withDataNotes },
};
