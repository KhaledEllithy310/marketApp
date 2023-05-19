import { CartsService } from './../../../cart/services/carts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  numberProductInCart: number = 0;

  constructor(private cartsService: CartsService) {}

  ngOnInit() {
    this.cartsService
      .getNumProductInCart()
      .subscribe((res) => (this.numberProductInCart = res));
  }

  // plusProduct(item: any) {
  //   this.cartsService.plusProduct(item);
  //   this.cartsService
  //     .getNumProductInCart()
  //     .subscribe((res) => (this.numberProductInCart = res));
  //   this.cartsService.setNumProductInCart(this.numberProductInCart++);
  // }

  // subProduct(item: any) {
  //   this.cartsService.subProduct(item);
  //   this.cartsService
  //   .getNumProductInCart()
  //   .subscribe((res) => (this.numberProductInCart = res));
  // this.cartsService.setNumProductInCart(this.numberProductInCart--);
  // }
}


