import { config } from './config';

import MockProductData from './mock-data';
import * as emptyTableNotes from './empty-table.notes.md';
import { ProductTableComponent } from '../../../projects/ng9-business-console/src/lib/components/product-table/product-table.component';

export default config;

export const withEmptyData = () => ({
  component: ProductTableComponent,
  props: {
    products: [],
    displayedColumns: [],
  },
});

withEmptyData.story = {
  name: 'with empty data',
  parameters: { notes: emptyTableNotes },
};
