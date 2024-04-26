import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainCardComponent } from '@shared-lib';

@Component({
  selector: 'homepage',
  standalone: true,
  imports: [RouterOutlet, MainCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private router: Router) {}

  navigate(url: string): void {
    this.router.navigateByUrl(`/${url}`);
  }
}
