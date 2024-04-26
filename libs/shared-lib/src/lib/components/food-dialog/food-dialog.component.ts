import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'food-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-dialog.component.html',
  styleUrl: './food-dialog.component.scss',
})
export class FoodDialogComponent {
  @Input() data: Food | null = null;
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
