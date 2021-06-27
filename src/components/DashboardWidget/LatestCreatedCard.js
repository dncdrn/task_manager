import { Card, Skeleton, Typography } from "antd";
import React, { useContext } from "react";
import { DashboardWidgetContext } from "../DashboardWidgetContext";

const { Text, Title } = Typography;

export default function LatestCreatedCard({ dashboardWidgetClasses }) {
  const { latestTasks, isLoading } = useContext(DashboardWidgetContext);

  return (
    <Card className={dashboardWidgetClasses.widgetCard}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Title level={3}>Latest Created Tasks</Title>
          <ul>
            {latestTasks && latestTasks.length !== 0 ? (
              latestTasks.map((task) => (
                <li key={task.name}>
                  <Text delete={task.completed}>{task.name}</Text>
                </li>
              ))
            ) : (
              <h5>no new task</h5>
            )}
          </ul>
        </>
      )}
    </Card>
  );
}
