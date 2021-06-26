import { Card, List, message, Modal, Typography, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { updateTask, deleteTask, getAllTasks } from "../service/taskAPI";
const { Title } = Typography;

export default function TaskListCard() {
  const [taskList, setTaskList] = useState([]);
  const [isEditingModalVisible, setIsEditingModalVisible] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [editingTaskData, setEditingTaskData] = useState({});

  useEffect(() => {
    getAllTaskListData();
  }, []);

  function markTaskToUpdate(taskItem) {
    setIsEditingModalVisible(true);
    setTaskName(taskItem.name);
    setEditingTaskData(taskItem);
  }

  async function handleEditTask() {
    const updateTaskResult = await updateTask(editingTaskData._id, {
      name: taskName,
    });
    message.success(updateTaskResult.msg);
    setIsEditingModalVisible(false);
    getAllTaskListData();
  }

  async function getAllTaskListData() {
    const taskListDataResult = await getAllTasks();
    message.success(taskListDataResult.msg);
    setTaskList(taskListDataResult.tasks);
  }

  async function markTaskCompleted(taskItem) {
    const param = {
      name: taskItem.name,
      completed: true,
    };
    const updateResult = await updateTask(taskItem._id, param);
    message.success(updateResult.msg);
    getAllTaskListData();
  }

  async function markTaskDeleted(taskId) {
    const deleteResult = await deleteTask(taskId);
    message.success(deleteResult.msg);
    getAllTaskListData();
  }

  return (
    <Card>
      <List>
        {taskList.map((taskItem) => {
          return (
            <TaskItem
              taskItem={taskItem}
              markTaskCompleted={markTaskCompleted}
              markTaskDeleted={markTaskDeleted}
              markTaskToUpdate={markTaskToUpdate}
            />
          );
        })}
      </List>
      <Modal
        footer={null}
        visible={isEditingModalVisible}
        onCancel={() => setIsEditingModalVisible(false)}
      >
        <Title level={4}>+ New Task</Title>
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <Button
          style={{ marginTop: "5px", width: "100%" }}
          type="primary"
          onClick={handleEditTask}
        >
          + New Task
        </Button>
      </Modal>
    </Card>
  );
}
