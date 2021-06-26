import { Card, Button } from "antd";
import React from "react";
import { StyledDiv } from "../Page/Login/LoginStyle";
import { useHistory } from "react-router-dom";
export default function NoTaskCard({ setIsAddingNewTask }) {
  const history = useHistory();
  function handleAdd() {
    setIsAddingNewTask(true);
    history.push("/new_task");
  }
  return (
    <StyledDiv>
      <Card style={{ width: "300px" }}>
        <h2>No Task</h2>
        <Button type="primary" onClick={handleAdd}>
          + Add Task
        </Button>
      </Card>
    </StyledDiv>
  );
}
