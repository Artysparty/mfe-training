import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {
  title = 'shell';
  selectedTab = 'workouts'

  constructor(
    private router: Router,
  ) {

  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigateByUrl(`/${tab}`);
  }
}
