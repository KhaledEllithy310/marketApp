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
  //STORE ITEM IN ARRAY OF CART {cartProducts}
  addtocart(productAdded: any) {
    // console.log(productAdded);
    if (productAdded.count > 0) {
      productAdded.count++;
      return;
    } else {
      productAdded.count = 1;
    }
    //CHECK IF USER CLICK ON (CHOOSE) THE SAME PRODUCT MORE THAN ONE
    let exist = this.cartProducts.value.find(
      (item) => item.id == productAdded.id
    );
    if (exist) {
      alert('this product is already in your cart ');
      return;
    } else {
      this.cartProducts.next(this.cartProducts.value.concat(productAdded));
    }
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

  removeProduct(item: any) {
    let indexItem = this.cartProducts.value.findIndex(
      (elm) => elm.id == item.id
    );
    this.cartProducts.value.splice(indexItem, 1);
    let newNumber = this.numberProductInCart.value - item.count;
    this.numberProductInCart.next(newNumber);
  }
}
