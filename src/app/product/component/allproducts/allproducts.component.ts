import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent {
  Products!: any[];
  Categories!: any[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getAllProducts();
    this.getAllcategories();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(
      (res: any) => (this.Products = res),
      (error) => alert(error.message)
    );
  }

  getAllcategories() {
    this.productsService.getAllCategories().subscribe(
      (res: any) => (this.Categories = res),
      (error) => alert(error.message)
    );
  }

  getAllProductsCategories(Categories: string) {
    this.productsService.getAllProductsCategories(Categories).subscribe(
      (res: any) => (this.Products = res),
      (error) => alert(error.message)
    );
  }

  filterCategory(event: any) {
    console.log(event.target.value);

    if (event.target.value == 'all') {
      this.getAllProducts();
    } else {
      this.getAllProductsCategories(event.target.value);
    }
  }
}
