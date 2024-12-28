import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "./TaskList.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", name: "", description: "" });
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.title && newTask.name && newTask.description) {
      const task = {
        ...newTask,
        date: new Date().toLocaleString(),
        completed: false, 
      };
      setTasks([...tasks, task]);
      setNewTask({ title: "", name: "", description: "" });
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const chartData = {
    labels: ["Total Tasks", "Completed Tasks"],
    datasets: [
      {
        label: "Task Performance",
        data: [tasks.length, tasks.filter((task) => task.completed).length],
        backgroundColor: ["#007bff", "#28a745"],
      },
    ],
  };

  return (
    <div className="task-list-container">
      <div className="task-form-container">
        <h3 className="task-form-title">Add New Task</h3>
        <input
          type="text"
          className="task-input"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          className="task-input"
          placeholder="Name"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <textarea
          className="task-textarea"
          placeholder="Description"
          rows="3"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        ></textarea>
        <button className="task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div className="task-list">
        <h3 className="task-list-title">Task List</h3>
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks available. Add a task to get started.</p>
        ) : (
          <ul className="task-items">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                <div className="task-details">
                  <h5 className="task-title">{task.title}</h5>
                  <p className="task-description">{task.description}</p>
                  <small className="task-date">
                    By {task.name} on {task.date}
                  </small>
                </div>
                <div className="task-actions">
                  <button
                    className={`task-status-button ${
                      task.completed ? "completed" : "pending"
                    }`}
                    onClick={() => handleToggleComplete(index)}
                  >
                    {task.completed ? "Completed" : "Mark as Completed"}
                  </button>
                  <button
                    className="task-delete-button"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="chart-toggle-container">
        <button
          className="chart-toggle-button"
          onClick={() => setShowChart(!showChart)}
        >
          {showChart ? "Hide Chart" : "Show Chart"}
        </button>
      </div>
      {showChart && (
        <div className="chart-container">
          <h3 className="chart-title">Task Performance</h3>
          <Bar data={chartData} />
        </div>
      )}
    </div>
  );
};

export default TaskList;
