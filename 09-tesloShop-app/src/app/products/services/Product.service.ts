import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductsResponse } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.baseUrl

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private http = inject(HttpClient);

  getProducts(options: Options): Observable<ProductsResponse> {
    const { limit = 9, offset = 9, gender = '' } = options;
    console.log(limit);
    return this.http.get<ProductsResponse>(`${BASE_URL}/products`, {
      params: {
        limit: limit,
        offset: offset,
        gender: gender,
      }
    }).pipe(tap((resp) => console.log(resp)));
  }

  constructor() { }

}
