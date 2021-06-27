import { Card, Button } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import dashboardStyle from "./DashboardStyle";

export default function NoTaskCard({ setIsModalAddVisible }) {
  const dashboardClasses = dashboardStyle();
  return (
    <div className={dashboardClasses.noTaskCardContainer}>
      <Card className={dashboardClasses.card}>
        <Title level={3}>No Task</Title>
        <Button
          className={dashboardClasses.button}
          type="primary"
          onClick={() => setIsModalAddVisible(true)}
        >
          + Add Task
        </Button>
      </Card>
    </div>
  );
}
