import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newTask: string = '';
  tasks: string[] = [];
  editingIndex: number | null = null;
  editedTask: string = '';  // Add this property for editing a task
  isEditing: boolean = false;  // Track if editing is active

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(index: number) {
    this.editingIndex = index;
    this.editedTask = this.tasks[index];  // Populate editedTask with the task content
    this.isEditing = true;  // Enable the editing mode
  }

  saveTask() {
    if (this.editedTask.trim()) {
      this.tasks[this.editingIndex!] = this.editedTask.trim();  // Update the task
      this.cancelEdit();  // Close the editing modal
    }
  }

  cancelEdit() {
    this.isEditing = false;  // Disable editing mode
    this.editedTask = '';  // Clear the editedTask field
  }
}
