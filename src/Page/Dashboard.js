import { Button, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import NoTaskCard from "../components/NoTaskCard";
import TaskListCard from "../components/DashboardTaskList/TaskListCard";
import { getDashboardData } from "../service/dashboardAPI";
import { Layout } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { domainURL } from "../service/domainURL";
import { useHistory } from "react-router-dom";
import DashboardWidget from "../components/DashboardWidget/DashboardWidget";
import TaskListHeader from "../components/DashboardTaskListHeader/TaskListHeader";
import AddTaskModal from "../components/AddTaskModal";
import { addTask } from "../service/taskAPI";

const { Header, Content } = Layout;

function Dashboard() {
  const history = useHistory();
  const [totalTasks, setTotalTasks] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);
  const [latestTasks, setLatestTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredTask, setFilteredTask] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);

  async function handleAddTask() {
    const addTaskResult = await addTask({ name: taskName });
    message.success(addTaskResult.msg);
    setTaskName("");
    setIsModalAddVisible(false);
    setReloadData(true);
  }
  async function loadDashboardData() {
    const dashboardResult = await getDashboardData();
    setTotalTasks(dashboardResult.totalTasks);
    setTasksCompleted(dashboardResult.tasksCompleted);
    setLatestTasks(dashboardResult.latestTasks);
  }

  useEffect(() => {
    if (reloadData) {
      loadDashboardData();
    }
  }, [reloadData]);

  useEffect(() => {
    loadDashboardData();
    if (totalTasks === 0) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleSearch(e) {
    setSearchText(e.target.value);
    const filteredTaskArr = latestTasks.filter((task) =>
      task.name.includes(e.target.value)
    );
    setFilteredTask(filteredTaskArr);
  }

  function handleLogout() {
    window.localStorage.clear();
    history.push("/");
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo"></div>
        <Avatar
          size={61}
          src={domainURL + localStorage.getItem("user_image")}
        />
        <a onClick={handleLogout}>Logout</a>
      </Header>
      <Content>
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
      </Content>
    </Layout>
  );
}
export default Dashboard;
