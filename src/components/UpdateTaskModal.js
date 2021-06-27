import { Button, Input, Modal } from "antd";
import React from "react";

export default function UpdateTaskModal({
  isEditingModalVisible,
  setIsEditingModalVisible,
  setTaskName,
  taskName,
  handleEditTask,
  taskListClasses,
}) {
  return (
    <Modal
      title="Update Task"
      footer={null}
      visible={isEditingModalVisible}
      onCancel={() => setIsEditingModalVisible(false)}
    >
      <Input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <Button
        className={taskListClasses.modalButton}
        type="primary"
        onClick={handleEditTask}
      >
        Update Task
      </Button>
    </Modal>
  );
}
