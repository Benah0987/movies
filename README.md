# 📝 Task Manager App

A simple and clean Task Manager built with **Angular**, designed to help users manage their to-dos with ease. It allows adding, editing, and deleting tasks with a consistent UI/UX and responsive design.

## 🔗 Live Demo

[👉 Click here to view the live app](<https://to-do-list-uhvr.vercel.app/)

---

## 🚀 Features

- ✅ Add tasks
- ✏️ Edit tasks via modal
- ❌ Delete tasks
- 🎨 Consistent color theme
- 📱 Responsive layout

---

## 📸 Screenshots

### Login Screen
![Login Screen](Screenshot%202025-04-15%20231459.png)


![Dashboard](dashboard.png)

### Home View
![Home View](Home.png)

## 🧰 Tech Stack

- **Framework:** Angular
- **Styling:** SCSS
- **Package Manager:** npm

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git https://github.com/Benah0987/to-do-list
cd frontend


### 2. Install Dependencies
  npm install

### 3. Run the App Locally

  ng serve
Open your browser and go to:
http://localhost:4200/

### 4. Build for Production

    ng build --prod
    The production-ready files will be in the dist/ folder.

### 4. 🗂️ Project Structure
arduino

src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   ├── home.component.ts        // Task logic
│   │   │   ├── home.component.html      // UI template
│   │   │   └── home.component.scss      // Component styles
│   └── app.module.ts                    // Angular module setup
├── assets/                              // Static assets
├── environments/                        // Environment configs
├── styles.scss                          // Global styles + variables
└── main.ts                              // Entry point


### 🎨 SCSS Color Palette
The color scheme is defined using SCSS variables in styles.scss:

scss

    /* Color Palette */
    $primary-color: #4caf50;           // Green for buttons
    $secondary-color: #f44336;         // Red for delete button
    $hover-color: #45a049;             // Hover state
    $modal-background: rgba(0, 0, 0, 0.5);  // Modal background
    $input-border-color: #ccc;
    $input-bg-color: #f9f9f9;

### 🧱 UI Components

    📥 Task Input Field – Centered input for new tasks

    ➕ Add Task Button – Triggers task creation

    📋 Task List – Displays all current tasks

    ✏️ Edit Task Modal – Modal popup for editing tasks

    🧠 Angular Concepts Used
    [(ngModel)] – Two-way binding for input fields

    *ngFor – Looping through tasks

    *ngIf – Conditionally rendering the edit modal

### 🤝 Contributing
Got improvements? Contributions are welcome!

### Fork the repo

### Create your branch:

    git checkout -b feature/awesome-feature

### Commit your changes:


    git commit -m "Added a cool feature"
## Push to your branch:


git push origin feature/awesome-feature
Create a pull request 🚀

### 📄 License
This project is licensed under the MIT License.

🙌 Special Thanks
Thanks for checking this out, and feel free to give feedback or suggestions!