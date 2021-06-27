import React, { useContext } from "react";
import { Typography, Card, Skeleton } from "antd";
import useTaskListStyle from "../TaskListStyle";
import { DashboardWidgetContext } from "../DashboardWidgetContext";

const { Title } = Typography;

export default function TaskCompletedCard({ dashboardWidgetClasses }) {
  const taskListClasses = useTaskListStyle();
  const { totalTasks, tasksCompleted, isLoading } = useContext(
    DashboardWidgetContext
  );
  return (
    <Card className={dashboardWidgetClasses.widgetCard}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Title level={3}>Tasks Completed</Title>
          <div className={taskListClasses.completedContainer}>
            <Title className={taskListClasses.completedTitle}>
              {tasksCompleted}
            </Title>{" "}
            <Title level={4}>/{totalTasks}</Title>
          </div>
        </>
      )}
    </Card>
  );
}
