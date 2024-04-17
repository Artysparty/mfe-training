import { TestBed } from '@angular/core/testing';
import { HistoryComponent } from './history.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
