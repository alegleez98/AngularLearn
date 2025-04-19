import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductsResponse } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlBack = 'http://localhost:3000';

  private http = inject(HttpClient);

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${this.urlBack}/api/products`).pipe(tap((resp) => console.log(resp)));
  }

  constructor() { }

}
