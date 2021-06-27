import { Button, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

export default function TaskListHeader({
  searchText,
  handleSearch,
  setIsModalAddVisible,
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Title level={3}>Tasks</Title>
      <div style={{ display: "flex", alignSelf: "center" }}>
        <Input
          value={searchText}
          onChange={handleSearch}
          prefix={<SearchOutlined />}
          placeholder="Search task by name"
          style={{ marginRight: "10px" }}
        />
        <Button onClick={() => setIsModalAddVisible(true)}>+ New Task</Button>
      </div>
    </div>
  );
}
