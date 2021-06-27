import React from "react";
import ChartGraph from "./ChartGraph";
import LatestCreatedCard from "./LatestCreatedCard";
import TaskCompletedCard from "./TaskCompletedCard";
import useDashboardWidgetStyle from "./DashboardWidgetStyle";

export default function DashboardWidget() {
  const dashboardWidgetClasses = useDashboardWidgetStyle();

  return (
    <div className={dashboardWidgetClasses.container}>
      <TaskCompletedCard dashboardWidgetClasses={dashboardWidgetClasses} />
      <LatestCreatedCard dashboardWidgetClasses={dashboardWidgetClasses} />
      <ChartGraph dashboardWidgetClasses={dashboardWidgetClasses} />
    </div>
  );
}
