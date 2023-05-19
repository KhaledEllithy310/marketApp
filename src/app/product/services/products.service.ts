import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //Define Instance From HttpClient
  constructor(private http: HttpClient) {}

  //Function to Get All Products From API
  // getAllProducts() {
  //   return this.http.get('https://fakestoreapi.com/products');
  // }
  getAllProducts() {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductById(id: number) {
    return this.http.get('https://dummyjson.com/products/' + id);
  }

  // getAllCategories() {
  //   return this.http.get('https://fakestoreapi.com/products/categories');
  // }

  // getAllProductsCategories(Categories: string) {
  //   return this.http.get(
  //     'https://fakestoreapi.com/products/category/' + Categories
  //   );
  // }
}
