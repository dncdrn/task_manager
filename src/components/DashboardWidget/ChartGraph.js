import { Card, Skeleton } from "antd";
import React from "react";
import Chart from "react-google-charts";

export default function ChartGraph({
  totalTasks,
  tasksCompleted,
  isLoading,
  dashboardWidgetClasses,
}) {
  return (
    <Card className={dashboardWidgetClasses.widgetCard}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Chart
          chartType="PieChart"
          width={"100%"}
          height={"150px"}
          loader={<Skeleton />}
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
