import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private cartProducts = new BehaviorSubject<any[]>([]);
  private numberProductInCart = new BehaviorSubject(0);
  // private count: number = 0;
  constructor() {}

  addtocart(productAdded: any) {
    // console.log(productAdded);
    if (productAdded.count > 0) {
      productAdded.count++;
      // console.log('productAdded.count++:', productAdded.count);
      return;
    } else {
      productAdded.count = 1;
    }
    // console.log(productAdded.count);
    // console.log(productAdded);
    this.cartProducts.next(this.cartProducts.value.concat(productAdded));
    console.log(this.cartProducts.value);

    //CHECK IF LOCAL STORAGE IS EMPTY OR NOT
    // if ('cart' in localStorage) {
    //   //IF LOCAL STORAGE IS NOT EMPTY WE WILL STORE THE VALUE IN IT IN THE ARRAY OF CART {cartProducts}
    //   this.cartProducts.next(JSON.parse(localStorage.getItem('cart')!));
    //   //CHEACK IF USER ADD THE SAME PRODUCT MORE THAN ONE
    //   let exist = this.cartProducts.value.find(
    //     (item) => item.id == productAdded.id
    //   );
    //   if (exist) {
    //     console.log('this product is already in your cart ');
    //     exist = productAdded;
    //     localStorage.setItem('cart', JSON.stringify(this.cartProducts.value));
    //     // if (exist.count) {
    //     //   exist.count = productAdded.count;
    //     //   console.log(' exist.count if exist ', exist.count);
    //     // } else {
    //     //   exist.count = productAdded.count;
    //     //   console.log(' exist.count if not exist ', exist.count);
    //     // }
    //   } else {
    //     this.cartProducts.next(this.cartProducts.value.concat(productAdded));
    //     localStorage.setItem('cart', JSON.stringify(this.cartProducts.value));
    //   }
    //   //IF LOCAL STORAGE IS EMPTY WE WILL STORE THE VALUE IN THE ARRAY OF CART {cartProducts}
    //   // AND AFTER THAT WE WIIL STORE IT IN LOCAL STORAGE
    // } else {
    //   this.cartProducts.next(this.cartProducts.value.concat(productAdded));
    //   localStorage.setItem('cart', JSON.stringify(this.cartProducts.value));
    //   console.log(this.cartProducts);
    // }
  }

  getNumProductInCart() {
    return this.numberProductInCart.asObservable();
  }

  setNumProductInCart(newVal: any) {
    this.numberProductInCart.next(newVal);
  }

  getCartProducts() {
    return this.cartProducts.asObservable();
  }

  plusProduct(item: any) {
    if (item.count < item.stock && item.count >= 0) {
      item.count++;
    } else {
      alert('tne stock is empty');
    }
  }

  subProduct(item: any) {
    if (item.count > 0) {
      item.count--;
    } else {
      alert('tne stock is empty');
    }
  }


}
