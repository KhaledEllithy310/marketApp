import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  targetProduct!: any;
  products!: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.productsService
      .getProductById(this.activatedRoute.snapshot.params['id'])
      .subscribe((product: any) => (this.targetProduct = product));
    // console.log(this.targetProduct);
  }
}
