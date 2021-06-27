import { Button, Card, Input, message, Typography } from "antd";
import React, { useState } from "react";
import { addTask } from "../service/taskAPI";
import { StyledDiv } from "./Login/LoginStyle";
import { useHistory } from "react-router-dom";
const { Title } = Typography;

export default function NewTaskPage() {
  const history = useHistory();
  const [taskName, setTaskName] = useState("");

  async function handleAddTask() {
    const addTaskResult = await addTask({ name: taskName });
    message.success(addTaskResult.msg);
    setTaskName("");
    history.push("/dashboard");
  }
  return (
    <StyledDiv>
      <Card style={{ width: "300px" }}>
        <Title level={4}>+ New Task</Title>
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <Button
          style={{ marginTop: "5px", width: "100%" }}
          type="primary"
          onClick={handleAddTask}
        >
          + New Task
        </Button>
      </Card>
    </StyledDiv>
  );
}
