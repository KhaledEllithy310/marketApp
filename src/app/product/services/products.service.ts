import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //Define Instance From HttpClient
  constructor(private http: HttpClient) {}

  //Function to Get All Products From API
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getAllProductsCategories(Categories: string) {
    return this.http.get(
      'https://fakestoreapi.com/products/category/' + Categories
    );
  }
}
