import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './component/allproducts/allproducts.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

@NgModule({
  declarations: [AllproductsComponent, ProductDetailsComponent],
  imports: [CommonModule],
})
export class ProductsModule {}
