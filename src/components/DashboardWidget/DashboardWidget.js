import React from "react";
import ChartGraph from "./ChartGraph";
import LatestCreatedCard from "./LatestCreatedCard";
import TaskCompletedCard from "./TaskCompletedCard";

export default function DashboardWidget({
  isLoading,
  totalTasks,
  tasksCompleted,
  latestTasks,
}) {
  return (
    <div style={{ padding: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexFlow: "wrap",
        }}
      >
        <TaskCompletedCard
          isLoading={isLoading}
          totalTasks={totalTasks}
          tasksCompleted={tasksCompleted}
        />
        <LatestCreatedCard isLoading={isLoading} latestTasks={latestTasks} />
        <ChartGraph
          isLoading={isLoading}
          totalTasks={totalTasks}
          tasksCompleted={tasksCompleted}
        />
      </div>
    </div>
  );
}
