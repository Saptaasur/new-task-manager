// src/components/TaskItem.tsx
import React from 'react';
import { Task } from '../models/Task';
import { motion } from 'framer-motion';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

interface TaskItemProps {
  task: Task;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  updatePriority: (id: string, priority: 'High' | 'Medium' | 'Low') => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  deleteTask,
  toggleComplete,
  updatePriority,
}) => {
  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updatePriority(task.id, e.target.value as 'High' | 'Medium' | 'Low');
  };

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textDecoration: task.completed ? 'line-through' : 'none',
        backgroundColor: task.completed ? '#d4edda' : '#f8d7da',
        borderRadius: '8px',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <motion.button
          onClick={() => toggleComplete(task.id)}
          whileTap={{ scale: 1.2 }}
          title="Mark as Complete"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <FaCheck color={task.completed ? 'green' : 'grey'} size={20} />
        </motion.button>
        <span>{task.title}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <motion.select
          value={task.priority}
          onChange={handlePriorityChange}
          whileFocus={{ scale: 1.05 }}
          style={{
            background: 'transparent',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '4px',
          }}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </motion.select>

        <motion.button
          onClick={() => deleteTask(task.id)}
          whileTap={{ rotate: 90, scale: 1.2 }}
          title="Delete Task"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <FaTrashAlt color="red" size={20} />
        </motion.button>
      </div>
    </motion.li>
  );
};

export default TaskItem;
