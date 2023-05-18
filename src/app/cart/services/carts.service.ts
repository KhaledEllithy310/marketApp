import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private cartProducts = new BehaviorSubject<any[]>([]);

  constructor() {}

  addtocart(productAdded: any) {
    //CHECK IF LOCAL STORAGE IS EMPTY OR NOT
    if ('cart' in localStorage) {
      //IF LOCAL STORAGE IS NOT EMPTY WE WILL STORE THE VALUE IN IT IN THE ARRAY OF CART {cartProducts}
      this.cartProducts.next(JSON.parse(localStorage.getItem('cart')!));
      //CHEACK IF USER ADD THE SAME PRODUCT MORE THAN ONE
      let exist = this.cartProducts.value.find(
        (item) => item.id == productAdded.id
      );
      if (exist) {
        alert('this product is already in your cart ');
      } else {
        this.cartProducts.next(this.cartProducts.value.concat(productAdded));
        localStorage.setItem('cart', JSON.stringify(this.cartProducts.value));
      }
      //IF LOCAL STORAGE IS EMPTY WE WILL STORE THE VALUE IN THE ARRAY OF CART {cartProducts}
      // AND AFTER THAT WE WIIL STORE IT IN LOCAL STORAGE
    } else {
      this.cartProducts.next(this.cartProducts.value.concat(productAdded));
      localStorage.setItem('cart', JSON.stringify(this.cartProducts.value));
    }
  }
}
