import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';

import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductTableComponent } from '../../../projects/ng9-business-console/src/lib/components/product-table/product-table.component';

export const config = {
  title: 'Product table',
  component: ProductTableComponent,
  decorators: [
    withKnobs,
    withA11y,
    moduleMetadata({
      imports: [CdkTableModule, CommonModule, MatTableModule],
    }),
  ],
};
