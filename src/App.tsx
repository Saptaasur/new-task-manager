import React, { useState, useEffect } from 'react';
import { Task } from './models/Task';
import { loadTasks, saveTasks } from './utils/localStorage';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      priority: 'Medium',
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updatePriority = (id: string, priority: 'High' | 'Medium' | 'Low') => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, priority } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="title-container">
        <h1>Task Manager</h1>
      </div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        updatePriority={updatePriority}
      />
      <footer>
        Made  by Saptarshi Nandy
      </footer>
    </div>
  );
};

export default App;
