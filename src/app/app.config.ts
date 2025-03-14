import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { STATUS_COLOR_PROVIDER } from './shareds/tokens/statusColor-token-provider';

export const appConfig: ApplicationConfig = {
  providers: [
    STATUS_COLOR_PROVIDER,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
