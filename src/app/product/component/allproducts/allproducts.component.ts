import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartsService } from 'src/app/cart/services/carts.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent {
  Products!: any[];
  Categories!: any[];
  cartProducts!: any[];
  constructor(
    private productsService: ProductsService,
    private cartsService: CartsService
  ) {}

  ngOnInit() {
    this.getAllProducts();
    // this.getAllcategories();

    // this.cartsService
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(
      (res: any) => (this.Products = res.products),
      (error) => alert(error.message)
    );
  }

  // getAllcategories() {
  //   this.productsService.getAllCategories().subscribe(
  //     (res: any) => (this.Categories = res),
  //     (error) => alert(error.message)
  //   );
  // }

  // getAllProductsCategories(Categories: string) {
  //   this.productsService.getAllProductsCategories(Categories).subscribe(
  //     (res: any) => (this.Products = res),
  //     (error) => alert(error.message)
  //   );
  // }

  // filter(event: any) {
  //   console.log(event.target.value);

  //   if (event.target.value == 'all') {
  //     this.getAllProducts();
  //   } else {
  //     this.getAllProductsCategories(event.target.value);
  //   }
  // }

  addToCart(event: any) {
    // if ('cart' in localStorage) {
    //   console.log(this.cartProducts);
    //   this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    //   this.cartProducts.push(event);
    //   console.log(this.cartProducts);

    //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    // } else {
    //   this.cartProducts.push(event);
    //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    // }
    this.cartsService.addtocart(event);
  }
}
