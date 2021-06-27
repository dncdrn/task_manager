import React from "react";
import { Typography, Card, Skeleton } from "antd";
import useTaskListStyle from "../TaskListStyle";

const { Title } = Typography;

export default function TaskCompletedCard({
  totalTasks,
  tasksCompleted,
  isLoading,
  dashboardWidgetClasses,
}) {
  const taskListClasses = useTaskListStyle();

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
