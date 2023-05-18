import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() data!: any[];
  @Input() title: any = '';
  @Output() selectedValue = new EventEmitter();

  filter(event: any) {
    this.selectedValue.emit(event);
  }
}
