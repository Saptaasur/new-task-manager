// src/utils/localStorage.ts
import { Task } from '../models/Task';

const TASKS_STORAGE_KEY = 'tasks';

export const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};
