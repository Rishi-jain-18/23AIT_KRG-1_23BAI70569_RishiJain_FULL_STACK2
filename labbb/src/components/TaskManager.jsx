import React, { useState } from 'react';
import useForm from '../hooks/useForm';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const { formData, handleChange, resetForm } = useForm({
    title: '',
    priority: 'Low',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      setTasks([...tasks, { ...formData, id: Date.now() }]);
      resetForm();
    }
  };

  return (
    <div className="task-manager">
      <h2>Task Tracker</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Task Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
      </form>
      <div className="task-list">
        <h3>Tasks</h3>
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title} | {task.priority}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskManager;