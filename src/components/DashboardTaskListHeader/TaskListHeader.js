import { Button, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import useTaskListStyle from "../TaskListStyle";

export default function TaskListHeader({
  searchText,
  handleSearch,
  setIsModalAddVisible,
}) {
  const taskListClasses = useTaskListStyle();
  return (
    <div className={taskListClasses.header}>
      <Title level={3}>Tasks</Title>
      <div className={taskListClasses.container}>
        <Input
          value={searchText}
          onChange={handleSearch}
          prefix={<SearchOutlined />}
          placeholder="Search task by name"
          className={taskListClasses.input}
        />
        <Button onClick={() => setIsModalAddVisible(true)}>+ New Task</Button>
      </div>
    </div>
  );
}
