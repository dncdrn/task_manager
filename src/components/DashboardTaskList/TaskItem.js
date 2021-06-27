import { Checkbox, Typography, List } from "antd";
import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function TaskItem({
  taskItem,
  markTaskCompleted,
  markTaskDeleted,
  markTaskToUpdated,
}) {
  return (
    <List.Item
      key={taskItem._id}
      actions={[
        <Title
          level={4}
          key="list-loadmore-edit"
          onClick={() => markTaskToUpdated(taskItem)}
        >
          <EditOutlined />
        </Title>,
        <Title
          level={4}
          key="list-loadmore-more"
          onClick={() => markTaskDeleted(taskItem._id)}
        >
          <DeleteOutlined />
        </Title>,
      ]}
    >
      <Checkbox
        checked={taskItem.completed}
        onChange={() => markTaskCompleted(taskItem)}
      >
        <Title level={5} delete={taskItem.completed}>
          {taskItem.name}
        </Title>
      </Checkbox>
    </List.Item>
  );
}
