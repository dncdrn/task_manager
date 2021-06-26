import { Card, Skeleton } from "antd";
import React from "react";
import Chart from "react-google-charts";

export default function ChartGraph({ totalTasks, tasksCompleted, isLoading }) {
  return (
    <Card style={{ width: "400px" }}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Chart
          chartType="PieChart"
          // loader={<div>Loading Chart</div>}
          data={[
            ["TotalTasks", "TasksCompleted"],
            ["Number of Tasks", totalTasks],
            ["Completed Tasks", tasksCompleted],
          ]}
          rootProps={{ "data-testid": "1" }}
        />
      )}
    </Card>
  );
}
