import React from "react";
import ChartGraph from "./ChartGraph";
import LatestCreatedCard from "./LatestCreatedCard";
import TaskCompletedCard from "./TaskCompletedCard";
import useDashboardWidgetStyle from "./DashboardWidgetStyle";

export default function DashboardWidget({
  isLoading,
  totalTasks,
  tasksCompleted,
  latestTasks,
}) {
  const dashboardWidgetClasses = useDashboardWidgetStyle();
  return (
    <div className={dashboardWidgetClasses.container}>
      <TaskCompletedCard
        dashboardWidgetClasses={dashboardWidgetClasses}
        isLoading={isLoading}
        totalTasks={totalTasks}
        tasksCompleted={tasksCompleted}
      />
      <LatestCreatedCard
        dashboardWidgetClasses={dashboardWidgetClasses}
        isLoading={isLoading}
        latestTasks={latestTasks}
      />
      <ChartGraph
        dashboardWidgetClasses={dashboardWidgetClasses}
        isLoading={isLoading}
        totalTasks={totalTasks}
        tasksCompleted={tasksCompleted}
      />
    </div>
  );
}
