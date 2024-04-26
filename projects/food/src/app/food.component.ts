import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodDialogComponent, Food, MainCardComponent } from '@shared-lib';
import { FoodMock } from './mocks/food-mock';

@Component({
  selector: 'food',
  standalone: true,
  imports: [RouterOutlet, MainCardComponent, FoodDialogComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  foods = FoodMock;
  selectedFood: Food | null = null;
  isModalOpen = false;

  closeModal() {
    this.isModalOpen = false;
  }

  selectFood(food: Food): void {
    this.selectedFood = food;
    this.isModalOpen = true;
  }
}
