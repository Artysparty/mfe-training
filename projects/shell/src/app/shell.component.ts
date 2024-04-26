import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsocketService } from '@shared-lib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  title = 'shell';

  private readonly _destroy$ = new Subject<void>();

  constructor(private wsService: WebsocketService) {}

  ngOnInit(): void {
    this.listenToWebSocketEvents();
    this.emitWebSocketEventAfterDelay();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private listenToWebSocketEvents(): void {
    this.wsService
      .listen('workouts')
      .pipe(takeUntil(this._destroy$))
      .subscribe((data) => {
        console.log(data);
      });

    this.wsService
      .listen('connected')
      .pipe(takeUntil(this._destroy$))
      .subscribe((data) => {
        console.log(data);
      });
  }

  private emitWebSocketEventAfterDelay(): void {
    setTimeout(() => {
      this.wsService.emit('workouts', 'asdasd');
    }, 5000);
  }
}
