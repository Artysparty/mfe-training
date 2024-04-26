import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-card',
  standalone: true,
  imports: [ CommonModule ],
  providers: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
  @Input() name: string | null = '';
  @Input() calories: number | null  = null;
  @Input() duration: string | null  = '';
  @Input() imageUrl!: string;
  @Input() fullWidth = false;
  @Input() bottomName = false;
}
