import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsMock } from './mocks/workouts-mock';

import { DialogComponent, Workout } from '@shared-lib';
import { MainCardComponent } from '@shared-lib';

@Component({
  selector: 'workouts',
  standalone: true,
  imports: [ MainCardComponent, DialogComponent, CommonModule ],
  providers: [],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss'
})
export class WorkoutsComponent {
  workouts = WorkoutsMock;
  selectedWorkout: Workout | null = null;

  public isModalOpen = false;

  closeModal() {
    this.isModalOpen = false;
  }

  selectWorkout(workout: Workout): void {
    this.selectedWorkout = workout;
    this.isModalOpen = true;
  }
}
