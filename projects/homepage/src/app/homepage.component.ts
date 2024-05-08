import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ItemCardComponent } from '@shared-lib';

@Component({
  selector: 'wr-homepage',
  standalone: true,
  imports: [RouterOutlet, ItemCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private router: Router) {}

  navigate(url: string): void {
    this.router.navigateByUrl(`/${url}`);
  }
}
