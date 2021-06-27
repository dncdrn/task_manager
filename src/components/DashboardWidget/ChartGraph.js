import { Card, Skeleton } from "antd";
import React, { useContext } from "react";
import Chart from "react-google-charts";
import { DashboardWidgetContext } from "../DashboardWidgetContext";

export default function ChartGraph({ dashboardWidgetClasses }) {
  const { totalTasks, tasksCompleted, isLoading } = useContext(
    DashboardWidgetContext
  );
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
