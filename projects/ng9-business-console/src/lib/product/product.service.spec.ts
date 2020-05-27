import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    productService = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(productService).toMatchSnapshot();
  });
});
