import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ tasks }) => {
  const data = {
    labels: ["Total Tasks", "Completed Tasks"],
    datasets: [
      {
        label: "Task Stats",
        data: [tasks.length, tasks.filter((task) => task.completed).length],
        backgroundColor: ["#4caf50", "#2196f3"],
      },
    ],
  };

  return <Bar data={data} />;
};

export default Chart;
