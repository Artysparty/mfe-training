import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workout } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'workout-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-dialog.component.html',
  styleUrl: './workout-dialog.component.scss',
})
export class WorkoutDialogComponent {
  @Input() workout: Workout | null = null;
  @Output() closeModalEvent = new EventEmitter();

  get headerBtnText(): string {
    return !this.isTraining ? 'Начать тренировку' : 'Тренировка идет: ';
  }

  displayTime: string = this.workout?.duration || '10:00';
  timer: any;
  isTraining: boolean = false;

  closeModal() {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  startTimer() {
    !this.isTraining ? this.startTraining() : this.stopTraining();
  }

  startTraining() {
    this.isTraining = true;
    const durationInSeconds = this.getDurationInSeconds();
    let timer = durationInSeconds;

    this.timer = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      this.displayTime = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;

      if (--timer < 0) {
        this.stopTraining();
      }
    }, 1000);
  }

  stopTraining() {
    this.isTraining = false;
    clearInterval(this.timer);
    this.displayTime = this.workout?.duration || '10:00';
  }

  getDurationInSeconds(): number {
    const [minutes, seconds] = this.displayTime.split(':').map(Number);
    return minutes * 60 + seconds;
  }
}
