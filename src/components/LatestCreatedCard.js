import { Card, Skeleton, Typography } from "antd";
import React from "react";
const { Text, Title } = Typography;

export default function LatestCreatedCard({ latestTasks, isLoading }) {
  return (
    <Card style={{ width: "400px" }}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Title level={3}>Latest Created Tasks</Title>
          <ul>
            {latestTasks.length !== 0 ? (
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
