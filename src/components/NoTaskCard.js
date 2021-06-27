import { Card, Button } from "antd";
import React from "react";
import { StyledDiv } from "../page/Login/LoginStyle";

export default function NoTaskCard({ setIsModalAddVisible }) {
  return (
    <StyledDiv>
      <Card style={{ width: "300px" }}>
        <h2>No Task</h2>
        <Button type="primary" onClick={() => setIsModalAddVisible(true)}>
          + Add Task
        </Button>
      </Card>
    </StyledDiv>
  );
}
