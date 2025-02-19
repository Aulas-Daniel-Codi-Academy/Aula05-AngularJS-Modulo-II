import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { provideHttpClient } from '@angular/common/http';
import { serverRoutes } from './app.routes.server';

export const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    provideHttpClient(),
  ],
};
