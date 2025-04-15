import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],  // Ensure CommonModule is included here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tasks: string[] = [];
  task: string = '';         // For new task input
  editTask: string = '';     // For task edit input
  isEditing: boolean = false; // Flag to manage editing state
  editingIndex: number | null = null; // Track which task is being edited

  addTask() {
    if (this.task) {
      this.tasks.push(this.task);
      this.task = '';  // Reset the input field
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  updateTask(index: number) {
    this.editingIndex = index;          // Track the task being edited
    this.editTask = this.tasks[index];  // Set the task to be edited
    this.isEditing = true;              // Display the edit input field
  }

  saveTask() {
    if (this.editingIndex !== null && this.editTask) {
      this.tasks[this.editingIndex] = this.editTask; // Save the updated task
      this.cancelEdit(); // Reset editing mode
    }
  }

  cancelEdit() {
    this.isEditing = false;           // Hide edit input
    this.editTask = '';               // Reset the edit input field
    this.editingIndex = null;         // Clear the editing index
  }

  // This method handles input changes for the task input field
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.task = input.value;
  }

  // This method handles input changes for the edit task input field
  onEditInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.editTask = input.value;
  }
}
