import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';

import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth.interceptor';

export function tokenGetter() {
  return localStorage.getItem('token');
}

// Configure JWT options
export function jwtOptionsFactory() {
  return {
    tokenGetter,
    allowedDomains: ['localhost:3000'],
    disallowedRoutes: ['http://localhost:3000/login', 'http://localhost:3000/register']
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    JwtHelperService,
    {
      provide: JWT_OPTIONS,
      useFactory: jwtOptionsFactory
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
};
