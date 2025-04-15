import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { appRoutes } from './app.routes'; // ✅ Correct import

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes), // ✅ Use appRoutes instead of routes
    provideClientHydration(withEventReplay()),
    importProvidersFrom(ReactiveFormsModule)
  ]
};
