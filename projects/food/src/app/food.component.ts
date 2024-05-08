import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemCardComponent } from '@shared-lib';
import { FoodMock } from './mocks/food-mock';
import { FoodDialogComponent } from './components/food-dialog/food-dialog.component';
import { NgFor, NgIf } from '@angular/common';
import { Food } from './types/food.type';

@Component({
  selector: 'wr-food',
  standalone: true,
  imports: [RouterOutlet, ItemCardComponent, FoodDialogComponent, NgIf, NgFor],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent {
  foods = FoodMock;
  selectedFood!: Food;
  isModalOpen = false;

  closeModal() {
    this.isModalOpen = false;
  }

  selectFood(food: Food): void {
    this.selectedFood = food;
    this.isModalOpen = true;
  }
}
