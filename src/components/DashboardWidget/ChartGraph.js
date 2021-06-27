import { Card, Skeleton } from "antd";
import React, { useContext } from "react";
import Chart from "react-google-charts";
import { DashboardWidgetContext } from "../DashboardWidgetContext";

export default function ChartGraph({ dashboardWidgetClasses }) {
  const { totalTasks, tasksCompleted, isLoading } = useContext(
    DashboardWidgetContext
  );
  const taskToComplete = totalTasks - tasksCompleted;
  return (
    <div className={dashboardWidgetClasses.widgetCard}>
      {isLoading ? (
        <Skeleton active className={dashboardWidgetClasses.chartSkeleton} />
      ) : (
        <Chart
          chartType="PieChart"
          width={"100%"}
          height={"190px"}
          data={[
            ["TasksCompleted", "TotalTasks"],
            ["Completed Tasks", tasksCompleted],
            ["Task to Complete", taskToComplete],
          ]}
          rootProps={{ "data-testid": "1" }}
        />
      )}
    </div>
  );
}
