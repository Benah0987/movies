import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { RegisterComponent } from './components/register/register.component';  // Import RegisterComponent
import { AuthGuard } from './guards/auth.guard'; // Assume you have an AuthGuard

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent),
  },
  
  {
    path: 'register',  // Add register path here
    loadComponent: () =>
      import('./components/register/register.component').then(m => m.RegisterComponent),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent),
    canActivate: [AuthGuard], // Protect home route with AuthGuard
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard], // Protect dashboard route with AuthGuard
  },

  {
    path: 'second-page',
    loadComponent: () =>
      import('./components/second-page/second-page.component').then(m => m.SecondPageComponent),
  }
];
