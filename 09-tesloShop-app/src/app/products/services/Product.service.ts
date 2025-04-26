import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, tap, switchMap } from 'rxjs';
import { Gender, Product, ProductsResponse } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { User } from '@auth/interfaces/user.interface';

const BASE_URL = environment.baseUrl

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

const emptyProduct: Product = {
  id: 'new',
  title: '',
  price: 0,
  description: '',
  slug: '',
  stock: 0,
  sizes: [],
  gender: Gender.Unisex,
  tags: [],
  images: [],
  user: {} as User
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
    if (this.productsCache.has(key)) {
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
    if (id === 'new') {
      return of(emptyProduct);
    }
    if (this.productCache.has(id)) {
      return of(this.productCache.get(id)!);
    }
    return this.http.get<Product>(`${BASE_URL}/products/${id}`).pipe(
      tap((resp) => console.log(resp)),
      tap((resp) => this.productCache.set(id, resp))
    );
  }

  updateProduct(id: string, productLike: Partial<Product>, imageFileList: FileList | undefined): Observable<Product> {

    const currentImages = productLike.images ?? []

    return this.uploadImages(imageFileList).pipe(
      map(imagesNames => ({
        ...productLike,
        images: [...currentImages, ...imagesNames]
      })),
      switchMap((updateProduct) => {
        return this.http.patch<Product>(`${BASE_URL}/products/${id}`, updateProduct)
      }),
      tap((product) => this.updateProductCache(product))
    );
  }

  updateProductCache(product: Product) {
    const productId = product.id;
    this.productCache.set(productId, product);

    this.productsCache.forEach(productResponse => {
      productResponse.products = productResponse.products.map((currentProduct) => {
        return currentProduct.id === productId ? product : currentProduct;
      })
    })
  }

  createProduct(productLike: Partial<Product>, imageFileList: FileList | undefined): Observable<Product> {

    const currentImages = productLike.images ?? []

    return this.uploadImages(imageFileList).pipe(
      map(imagesNames => ({
        ...productLike,
        images: [...currentImages, ...imagesNames]
      })),
      switchMap((updateProduct) => {
        return this.http.post<Product>(`${BASE_URL}/products`, updateProduct)
      }),
      tap((product) => this.updateProductCache(product))
    );
  }

  uploadImages(images?: FileList): Observable<string[]> {
    if (!images) return of([]);

    const uploadObservables = Array.from(images).map(imageFile => this.uploadImage(imageFile));

    return forkJoin(uploadObservables);
  }

  uploadImage(imageFile: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', imageFile);
    return this.http.post<{ fileName: string }>(`${BASE_URL}/files/product`, formData).pipe(
      map(resp => resp.fileName)
    );
  }

  constructor() { }

}
