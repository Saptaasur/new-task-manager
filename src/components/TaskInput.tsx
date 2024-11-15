// src/components/TaskInput.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TaskInputProps {
  addTask: (title: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <motion.form
      onSubmit={handleAddTask}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{ marginBottom: '20px' }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
      />
      <button type="submit">Add Task</button>
    </motion.form>
  );
};

export default TaskInput;
