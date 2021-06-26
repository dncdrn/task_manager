import React from "react";
import Chart from "react-google-charts";

export default function ChartGraph({ totalTasks, tasksCompleted }) {
  return (
    <Chart
      width={"400px"}
      height={"200px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["TotalTasks", "TasksCompleted"],
        ["Number of Tasks", totalTasks],
        ["Completed Tasks", tasksCompleted],
      ]}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
