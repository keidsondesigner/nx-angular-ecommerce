import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  readonly baseUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

  constructor(private http: HttpClient) {}

  searchProductByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`, {
      params: {
        name,
      },
    });
  }
}
