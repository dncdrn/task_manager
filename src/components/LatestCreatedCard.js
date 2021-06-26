import { Card, Typography } from "antd";
import React from "react";
const { Text, Title } = Typography;

export default function LatestCreatedCard({ taskList }) {
  return (
    <Card style={{ width: "400px" }}>
      <Title level={3}>Latest Created Tasks</Title>
      <ul>
        {taskList.length !== 0 ? (
          taskList.map((task) => (
            <li key={task.name}>
              <Text delete={task.completed && true}>{task.name}</Text>
            </li>
          ))
        ) : (
          <h5>no new task</h5>
        )}
      </ul>
    </Card>
  );
}
