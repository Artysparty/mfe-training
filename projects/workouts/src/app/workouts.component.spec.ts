import { TestBed } from '@angular/core/testing';
import { WorkoutsComponent } from './workouts.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WorkoutsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
