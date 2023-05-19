import { CartsService } from 'src/app/cart/services/carts.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() data: any = {};
  @Output() item: any = new EventEmitter();
  numberProductsInCart: number = 0;

  constructor(private cartsService: CartsService, private Router: Router) {}

  //ADD ITEM PRODUCT TO PARENT {ALLPRODUCT}
  add(data: any) {
    this.item.emit(data);
  }

  ngOnInit() {}

  redirectDetails(id: number) {
    this.Router.navigate(['/ProductDetails', id]);
  }
  addNumProductCart() {
    this.cartsService
      .getNumProductInCart()
      .subscribe((res) => (this.numberProductsInCart = res));
    this.cartsService.setNumProductInCart(++this.numberProductsInCart);
  }
}
