import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsMock } from './mocks/workouts-mock';

import { WorkoutDialogComponent, Workout, MainCardComponent } from '@shared-lib';
import { Subject } from 'rxjs';

@Component({
  selector: 'workouts',
  standalone: true,
  imports: [
    MainCardComponent,
    WorkoutDialogComponent,
    CommonModule,
  ],
  providers: [],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss',
})
export class WorkoutsComponent implements OnDestroy {
  workouts = WorkoutsMock;
  selectedWorkout: Workout | null = null;

  public isModalOpen = false;

  private readonly _destroy$ = new Subject<void>();

  constructor() {}

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  closeModal() {
    this.isModalOpen = false;
  }

  selectWorkout(workout: Workout): void {
    this.selectedWorkout = workout;
    this.isModalOpen = true;
  }
}
