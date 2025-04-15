import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add FormsModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  newTask: string = '';
  tasks: string[] = [];
  editedTask: string = '';
  isEditing: boolean = false;

  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = ''; // Reset input after adding task
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Remove task from the list
  }

  editTask(index: number) {
    this.isEditing = true;
    this.editedTask = this.tasks[index];
    this.tasks.splice(index, 1); // Remove task from the list to allow editing
  }

  saveTask() {
    if (this.editedTask) {
      this.tasks.push(this.editedTask);  // Add edited task back to list
      this.editedTask = ''; // Reset input after saving task
      this.isEditing = false; // Close the edit modal
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.editedTask = ''; // Reset input if edit is cancelled
  }

  // Define the onTaskInput method (if needed)
  onTaskInput() {
    // Example functionality: You can perform any logic here when the input changes
    console.log("Input value changed:", this.newTask);
  }
}
