import { Button, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";

export default function AddTaskModal({
  isModalAddVisible,
  setIsModalAddVisible,
  taskName,
  setTaskName,
  handleAddTask,
}) {
  return (
    <Modal
      onCancel={() => setIsModalAddVisible(false)}
      footer={null}
      visible={isModalAddVisible}
      title="+ New Task"
    >
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
    </Modal>
  );
}
