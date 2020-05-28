import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Product Service', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ProductService],
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    expect(ProductService).toBeTruthy();
  });
});
