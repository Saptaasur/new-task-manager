// src/models/Task.ts
export interface Task {
    id: string;
    title: string;
    completed: boolean;
    priority: 'High' | 'Medium' | 'Low';
  }
  