import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() data: any = {};
  @Output() item: any = new EventEmitter();

  add(data: any) {
    this.item.emit(data);
  }
}
