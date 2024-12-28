import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    username: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description && task.username) {
      task.date = new Date().toLocaleString(); 
      addTask(task);
      setTask({ title: "", description: "", username: "", date: "" });
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Task Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
        <textarea
          placeholder="Task Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="form-control"
          rows="4"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Your Name"
          value={task.username}
          onChange={(e) => setTask({ ...task, username: e.target.value })}
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
        <button type="submit" className="btn-submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
