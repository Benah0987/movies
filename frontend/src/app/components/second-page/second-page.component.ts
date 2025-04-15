import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-second-page',
  standalone: true,  // Ensure this is a standalone component
  imports: [CommonModule],  // Add CommonModule here
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {
  cards = [
    { title: 'Card 1', content: 'Content of Card 1' },
    { title: 'Card 2', content: 'Content of Card 2' },
    { title: 'Card 3', content: 'Content of Card 3' }, // Add more cards here if needed
  ];

  onCardClick(card: any): void {
    console.log(`Clicked: ${card.title}`);
    // You can add navigation, modals, or logic here
  }
}
