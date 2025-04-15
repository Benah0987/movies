import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'; // Import your routes

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Set up routing with your routes
  exports: [RouterModule] // Export RouterModule so it can be used in other components
})
export class AppRoutingModule {}
