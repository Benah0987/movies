import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is a standalone component
  imports: [RouterModule], // Add RouterModule here
  template: `
    <router-outlet></router-outlet> <!-- This is where routed components will be displayed -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
