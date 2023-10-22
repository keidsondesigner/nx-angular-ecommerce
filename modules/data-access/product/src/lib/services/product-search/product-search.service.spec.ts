import { mockProducts } from './../../mocks/product.mock';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProductSearchService } from './product-search.service';
import { Product } from '../../models/product.model';

describe('ProductSearchService', () => {
  let service: ProductSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products correctly', () => {
    // ARRANGE
    const mockName = 'notebook';
    const url = `${service.baseUrl}/products?name=${mockName}`;
    let result: Product[] = [];

    // ACT
    service
      .searchProductByName(mockName)
      .subscribe((products) => (result = products));

    // ASSERT
    const request = httpMock.expectOne(url); // faz uma chamada http pasando uma url;
    request.flush(mockProducts); // flush retorna a response da requisição http;
    expect(request.request.method).toBe('GET'); // método da requisição;
    expect(result).toEqual(mockProducts); // não usamos o "toBe" pois só o "toEqual", aceita valores do tipo Objetos e Arrays;
  });
});
