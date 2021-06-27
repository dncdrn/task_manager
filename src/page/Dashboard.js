import { message } from "antd";
import React, { useEffect, useState } from "react";
import NoTaskCard from "../components/NoTaskCard";
import TaskListCard from "../components/DashboardTaskList/TaskListCard";
import { getDashboardData } from "../service/dashboardAPI";
import DashboardWidget from "../components/DashboardWidget/DashboardWidget";
import TaskListHeader from "../components/DashboardTaskListHeader/TaskListHeader";
import AddTaskModal from "../components/AddTaskModal";
import { addTask, getAllTasks } from "../service/taskAPI";
import DashboardLayout from "../components/DashboardLayout";
import { DashboardWidgetContext } from "../components/DashboardWidgetContext";

function Dashboard() {
  const [totalTasks, setTotalTasks] = useState();
  const [tasksCompleted, setTasksCompleted] = useState();
  const [latestTasks, setLatestTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [taskList, setTaskList] = useState();
  const [filteredTaskList, setFilteredTaskList] = useState();
  const [reloadData, setReloadData] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);

  useEffect(() => {
    getDashboardWidgetData();
    getAllTaskListData();
  }, []);

  useEffect(() => {
    if (reloadData) {
      getDashboardWidgetData();
      getAllTaskListData();
      setReloadData(false);
    }
  }, [reloadData]);

  async function getDashboardWidgetData() {
    const dashboardResult = await getDashboardData();
    setTotalTasks(dashboardResult.totalTasks);
    setTasksCompleted(dashboardResult.tasksCompleted);
    setLatestTasks(dashboardResult.latestTasks);
    setIsLoading(false);
  }

  async function getAllTaskListData() {
    const taskListDataResult = await getAllTasks();
    const sortedByCompletedTask = taskListDataResult.tasks.sort(
      (a, b) => a.completed - b.completed
    );
    setTaskList(sortedByCompletedTask);
    setFilteredTaskList(sortedByCompletedTask);
    setIsLoading(false);
  }

  async function handleAddTask() {
    const addTaskResult = await addTask({ name: taskName });
    message.success(addTaskResult.msg);
    setTaskName("");
    setIsModalAddVisible(false);
    setReloadData(true);
  }

  function handleSearch(e) {
    setSearchText(e.target.value);
    const taskListArr = taskList.filter((task) =>
      task.name.includes(e.target.value)
    );
    setFilteredTaskList(taskListArr);
  }

  return (
    <DashboardLayout>
      {totalTasks !== 0 ? (
        <>
          <DashboardWidgetContext.Provider
            value={{ isLoading, totalTasks, tasksCompleted, latestTasks }}
          >
            <DashboardWidget />
          </DashboardWidgetContext.Provider>
          <br />
          <TaskListHeader
            setSearchText={searchText}
            handleSearch={handleSearch}
            setIsModalAddVisible={setIsModalAddVisible}
          />
          <br />

          <TaskListCard
            setTaskList={setTaskList}
            setReloadData={setReloadData}
            isLoading={isLoading}
            filteredTaskList={filteredTaskList}
          />
        </>
      ) : (
        <NoTaskCard setIsModalAddVisible={setIsModalAddVisible} />
      )}
      <AddTaskModal
        isModalAddVisible={isModalAddVisible}
        setIsModalAddVisible={setIsModalAddVisible}
        taskName={taskName}
        setTaskName={setTaskName}
        handleAddTask={handleAddTask}
      />
    </DashboardLayout>
  );
}
export default Dashboard;
