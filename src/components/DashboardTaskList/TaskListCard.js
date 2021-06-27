import {
  Card,
  List,
  message,
  Modal,
  Input,
  Button,
  Skeleton,
  Empty,
} from "antd";
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { updateTask, deleteTask } from "../../service/taskAPI";
import useTaskListStyle from "../TaskListStyle";

export default function TaskListCard({
  setReloadData,
  isLoading,
  filteredTaskList,
}) {
  const taskListClasses = useTaskListStyle();

  const [isEditingModalVisible, setIsEditingModalVisible] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [editingTaskData, setEditingTaskData] = useState({});

  function markTaskToUpdated(taskItem) {
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
    setReloadData(true);
  }

  async function markTaskCompleted(taskItem) {
    const param = {
      name: taskItem.name,
      completed: true,
    };
    const updateResult = await updateTask(taskItem._id, param);
    message.success(updateResult.msg);
    setReloadData(true);
  }

  async function markTaskDeleted(taskId) {
    const deleteResult = await deleteTask(taskId);
    message.success(deleteResult.msg);
    setReloadData(true);
  }

  return (
    <Card className={taskListClasses.taskContainer}>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <List>
          {filteredTaskList && filteredTaskList.length !== 0 ? (
            filteredTaskList.map((taskItem) => {
              return (
                <TaskItem
                  key={taskItem.name}
                  taskItem={taskItem}
                  markTaskCompleted={markTaskCompleted}
                  markTaskDeleted={markTaskDeleted}
                  markTaskToUpdated={markTaskToUpdated}
                />
              );
            })
          ) : (
            <Empty description={<b>No task found</b>} />
          )}
        </List>
      )}
      <Modal
        title="+ New Task"
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
          + New Task
        </Button>
      </Modal>
    </Card>
  );
}
