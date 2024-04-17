import { Routes } from '@angular/router';
import { WorkoutsComponent } from '../../../workouts/src/app/workouts.component';

import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
    pathMatch: 'full',
  },
  {
    path: 'workouts',
    loadComponent: () =>
      loadRemoteModule('workouts', './Component').then(
        (m) => m.WorkoutsComponent
      ),
  },
  {
    path: 'history',
    loadComponent: () =>
      loadRemoteModule('history', './Component').then(
        (m) => m.HistoryComponent
      ),
  },

  {
    path: '**',
    component: WorkoutsComponent,
  },
];
