import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './product/component/allproducts/allproducts.component';
import { ProductDetailsComponent } from './product/component/product-details/product-details.component';
import { CartComponent } from './cart/component/cart/cart.component';

const routes: Routes = [
  {
    path: 'allproducts',
    component: AllproductsComponent,
  },
  {
    path: 'productsDetails',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
