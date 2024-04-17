import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTES } from './shell.routes';

export const shellConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES)]
};
