import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './component/allproducts/allproducts.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductItemComponent } from './component/product-item/product-item.component';

@NgModule({
  declarations: [AllproductsComponent, ProductDetailsComponent, ProductItemComponent],
  imports: [CommonModule],
  exports: [ProductDetailsComponent],
})
export class ProductsModule {}
