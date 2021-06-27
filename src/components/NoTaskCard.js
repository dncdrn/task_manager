import { Card, Button } from "antd";
import React from "react";
import { StyledDiv } from "../page/Login/LoginStyle";
import { useHistory } from "react-router-dom";

export default function NoTaskCard() {
  const history = useHistory();
  function handleAdd() {
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
