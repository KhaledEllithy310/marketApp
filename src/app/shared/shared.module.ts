import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './component/select/select.component';
@NgModule({
  declarations: [NavbarComponent, SelectComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, SelectComponent],
  exports: [NavbarComponent],
})
export class SharedModule {}
