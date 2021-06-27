import {
  Card,
  List,
  message,
  Modal,
  Typography,
  Input,
  Button,
  Skeleton,
  Empty,
} from "antd";
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { updateTask, deleteTask, getAllTasks } from "../../service/taskAPI";
const { Title } = Typography;

export default function TaskListCard({
  filteredTask,
  setFilteredTask,
  setReloadData,
}) {
  const [isEditingModalVisible, setIsEditingModalVisible] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [editingTaskData, setEditingTaskData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllTaskListData();
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
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
    setFilteredTask(taskListDataResult.tasks);
  }

  async function markTaskCompleted(taskItem) {
    const param = {
      name: taskItem.name,
      completed: true,
    };
    const updateResult = await updateTask(taskItem._id, param);
    message.success(updateResult.msg);
    getAllTaskListData();
    setReloadData(true);
  }

  async function markTaskDeleted(taskId) {
    const deleteResult = await deleteTask(taskId);
    message.success(deleteResult.msg);
    getAllTaskListData();
    setReloadData(true);
  }

  return (
    <Card>
      {isLoading ? (
        <Skeleton />
      ) : (
        <List>
          {filteredTask.length ? (
            filteredTask.map((taskItem) => {
              return (
                <TaskItem
                  key={taskItem.name}
                  taskItem={taskItem}
                  markTaskCompleted={markTaskCompleted}
                  markTaskDeleted={markTaskDeleted}
                  markTaskToUpdate={markTaskToUpdate}
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
