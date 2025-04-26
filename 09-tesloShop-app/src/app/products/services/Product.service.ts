import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Product, ProductsResponse } from '../interfaces/product.interface';
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

  private productsCache = new Map<String, ProductsResponse>();
  private productCache = new Map<String, Product>();
  private http = inject(HttpClient);

  getProducts(options: Options): Observable<ProductsResponse> {
    const { limit = 9, offset = 9, gender = '' } = options;
    const key = `${limit}-${offset}-${gender}`;
    if ( this.productsCache.has(key)) {
      return of(this.productsCache.get(key)!);
    }
    return this.http.get<ProductsResponse>(`${BASE_URL}/products`, {
      params: {
        limit: limit,
        offset: offset,
        gender: gender,
      }
    }).pipe(
      tap((resp) => console.log(resp)),
      tap((resp) => this.productsCache.set(key, resp))
    );
  }

  getProductsByIdSlug(idSlug: string): Observable<Product> {
    if (this.productCache.has(idSlug)) {
      return of(this.productCache.get(idSlug)!);
    }
    return this.http.get<Product>(`${BASE_URL}/products/${idSlug}`).pipe(
      tap((resp) => console.log(resp)),
      tap((resp) => this.productCache.set(idSlug, resp))
    );
  }

  getProductsById(id: string): Observable<Product> {
    if (this.productCache.has(id)) {
      return of(this.productCache.get(id)!);
    }
    return this.http.get<Product>(`${BASE_URL}/products/${id}`).pipe(
      tap((resp) => console.log(resp)),
      tap((resp) => this.productCache.set(id, resp))
    );
  }

  updateProduct(id: string, productLike: Partial<Product>):Observable<Product> {
    return this.http.patch<Product>(`${BASE_URL}/products/${id}`, productLike).pipe(
      tap((product) => this.updateProductCache(product))
    )
  }

  updateProductCache(product: Product) {
    const productId = product.id;
    this.productCache.set(productId, product);

    this.productsCache.forEach( productResponse => {
      productResponse.products = productResponse.products.map((currentProduct) => {
        return currentProduct.id === productId ? product : currentProduct;
      })
    })
  }

  constructor() { }

}
