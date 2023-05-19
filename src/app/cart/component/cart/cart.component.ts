import { ProductsService } from './../../../product/services/products.service';
import { CartsService } from 'src/app/cart/services/carts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  CartProducts!: any[];
  numProductInCart!: number;
  totalPrice: number = 0;
  constructor(
    private cartsService: CartsService,
    private productsService: ProductsService
  ) {}
  ngOnInit() {
    //GET PRODUCT THAT STORED IN CART
    this.cartsService
      .getCartProducts()
      .subscribe((res: any) => (this.CartProducts = res));
  }

  plusProduct(item: any) {
    this.cartsService.plusProduct(item);
    this.cartsService
      .getNumProductInCart()
      .subscribe((res) => (this.numProductInCart = res));
    // console.log('numProductInCart before plus', this.numProductInCart);
    this.cartsService.setNumProductInCart(++this.numProductInCart);
    // console.log('numProductInCart after plus', this.numProductInCart);
  }

  subProduct(item: any) {
    this.cartsService.subProduct(item);
    this.cartsService
      .getNumProductInCart()
      .subscribe((res) => (this.numProductInCart = res));
    // console.log('numProductInCart before sub', this.numProductInCart);
    this.cartsService.setNumProductInCart(--this.numProductInCart);
    // console.log('numProductInCart after sub', this.numProductInCart);
  }

  //CALCULATE TOTALPRICE FOR ONE PRODUCT
  totalPriceProduct(count: number, price: number) {
    return count * price;
  }

  //CALCULATE TOTALPRICE FOR ALL PRODUCT
  totalPriceAllProduct(CartProducts: any) {
    this.cartsService
      .getNumProductInCart()
      .subscribe((res) => (this.numProductInCart = res));
    this.totalPrice = 0;
    for (let i = 0; i < CartProducts.length; i++) {
      this.totalPrice +=
        this.CartProducts[i].price * this.CartProducts[i].count;
    }
    return this.totalPrice;
  }

  //REMOVE PRODUCT FROM THE CART
  removeProduct(item: any) {
    // let indexItem = this.CartProducts.findIndex((elm) => elm.id == item.id);
    // this.CartProducts.splice(indexItem, 1);
    // this.cartsService
    //   .getNumProductInCart()
    //   .subscribe((res) => (this.numProductInCart = res));

    this.cartsService.removeProduct(item);
  }
}
