import { Button, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import dashboardStyle from "./DashboardStyle";

export default function AddTaskModal({
  isModalAddVisible,
  setIsModalAddVisible,
  taskName,
  setTaskName,
  handleAddTask,
}) {
  const dashboardClasses = dashboardStyle();

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
        className={dashboardClasses.modalButton}
        type="primary"
        onClick={handleAddTask}
      >
        + New Task
      </Button>
    </Modal>
  );
}
