# Task Manager Application

## Overview
The **Task Manager Application** is a lightweight, interactive web app designed to help users manage their daily tasks effectively. It includes functionality to:
- Add tasks with priorities.
- Mark tasks as completed.
- Delete tasks.
- Filter tasks using a search bar.

The app features an engaging UI with animations and a responsive design, making it visually appealing and user-friendly.

## Features
1. **Add Tasks**: Quickly create tasks with a default priority.
2. **Search Functionality**: Filter tasks based on a search query.
3. **Task Management**: Mark tasks as completed, update priority, or delete them.
4. **Persistent Storage**: Tasks are stored locally in the browser and persist across sessions.

## Setup and Launch
### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your system.
- A modern browser like Chrome, Firefox, or Edge.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task-manager
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the app.
Build for Production
To build a production-ready version of the app, run:

bash
Copy code
npm run build
Assumptions
Priority Levels: Each task has a priority (High, Medium, Low) with Medium as the default.
Local Storage: The app uses browser local storage for saving tasks, assuming a single-user setup.
Unique Task IDs: Task IDs are generated using timestamps (Date.now()), assuming no two tasks are added simultaneously.
Technology Stack
Frontend: React with TypeScript
Styling: CSS with animations
Local Storage: For persistent task management
Contribution
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.