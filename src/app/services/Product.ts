import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product-list';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  apiURL = 'http://localhost:2202/api/v1/products';

  constructor() {}
  // getAllProduct
  getAllProducts() {
    return this.http.get<Product[]>(this.apiURL);
  }

  getProductById(id: string | number) {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  create(data: Product) {
    return this.http.post<Product>(this.apiURL + '/', data);
  }

  deleteProductById(id: string | number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  updateProductById(id: string | number, data: any) {
    return this.http.put(`${this.apiURL}/${id}`, data);
  }
  getCategories(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:2202/api/v1/categories');
  }
}
