import { bootstrapApplication } from '@angular/platform-browser';
import { historyConfig } from './app/history.config';
import { HistoryComponent } from './app/history.component';

bootstrapApplication(HistoryComponent, historyConfig)
  .catch((err) => console.error(err));
