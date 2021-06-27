import React from "react";
import { Typography, Card, Skeleton } from "antd";
const { Title } = Typography;

export default function TaskCompletedCard({
  totalTasks,
  tasksCompleted,
  isLoading,
}) {
  return (
    <Card style={{ width: "400px" }}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Title level={3}>Tasks Completed</Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title style={{ paddingBottom: "15px", fontSize: "61px" }}>
              {tasksCompleted}
            </Title>{" "}
            <Title level={4}>/{totalTasks}</Title>
          </div>
        </>
      )}
    </Card>
  );
}
