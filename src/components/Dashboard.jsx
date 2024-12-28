import React from "react";
import Chart from "./Chart";

const Dashboard = ({ tasks = [] }) => {
  if (tasks.length === 0) {
    return <div className="p-6 text-center text-gray-600">No tasks available</div>;
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Tasks</h3>
          <p className="text-3xl font-bold text-indigo-600">{totalTasks}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Completed Tasks</h3>
          <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Pending Tasks</h3>
          <p className="text-3xl font-bold text-red-600">{pendingTasks}</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Tasks Overview</h3>
        <Chart tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
