// src/components/TaskList.tsx
import React from 'react';
import { Task } from '../models/Task';
import TaskItem from './TaskItem';
import { AnimatePresence, motion } from 'framer-motion';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  updatePriority: (id: string, priority: 'High' | 'Medium' | 'Low') => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  deleteTask,
  toggleComplete,
  updatePriority,
}) => {
  return (
    <ul>
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <TaskItem
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              updatePriority={updatePriority}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TaskList;
