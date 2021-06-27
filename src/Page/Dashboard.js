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

function Dashboard() {
  const [totalTasks, setTotalTasks] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [latestTasks, setLatestTasks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [filteredTask, setFilteredTask] = useState([]);

  const [reloadData, setReloadData] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);

  useEffect(() => {
    getDashboardWidgetData();
    if (totalTasks === 0) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
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
  }

  async function getAllTaskListData() {
    const taskListDataResult = await getAllTasks();
    setFilteredTask(taskListDataResult.tasks);
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
    const filteredTaskArr = latestTasks.filter((task) =>
      task.name.includes(e.target.value)
    );
    setFilteredTask(filteredTaskArr);
  }

  return (
    <DashboardLayout>
      {totalTasks !== 0 ? (
        <>
          <DashboardWidget
            isLoading={isLoading}
            totalTasks={totalTasks}
            tasksCompleted={tasksCompleted}
            latestTasks={latestTasks}
          />
          <br />
          <TaskListHeader
            setSearchText={searchText}
            handleSearch={handleSearch}
            setIsModalAddVisible={setIsModalAddVisible}
          />
          <br />
          <TaskListCard
            filteredTask={filteredTask}
            setFilteredTask={setFilteredTask}
            setReloadData={setReloadData}
            getAllTaskListData={getAllTaskListData}
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
