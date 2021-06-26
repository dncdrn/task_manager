import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import ChartGraph from "../Components/ChartGraph";
import LatestCreatedCard from "../Components/LatestCreatedCard";
import NoTaskCard from "../Components/NoTaskCard";
import TaskCompletedCard from "../Components/TaskCompletedCard";
import TaskListCard from "../Components/TaskListCard";
import { getDashboardData } from "../Service/dashboardAPI";
import { Layout } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { domainURL } from "../Service/domainURL";
import { SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Header, Content } = Layout;
const accessToken = localStorage.getItem("user_token");

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
    setIsLoading(true);
    loadDashboardData();
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
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

  function DashboardView() {
    if (totalTasks === 0) {
      return <NoTaskCard setIsAddingNewTask={setIsAddingNewTask} />;
    }
  }

  if (totalTasks === 0) {
    return <NoTaskCard />;
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
        <div style={{ padding: "40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexFlow: "wrap",
            }}
          >
            <TaskCompletedCard
              isLoading={isLoading}
              totalTasks={totalTasks}
              tasksCompleted={tasksCompleted}
            />
            <LatestCreatedCard
              isLoading={isLoading}
              latestTasks={latestTasks}
            />
            <ChartGraph
              isLoading={isLoading}
              totalTasks={totalTasks}
              tasksCompleted={tasksCompleted}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <h2>Tasks</h2>
            <div style={{ display: "flex", alignSelf: "center" }}>
              <Input
                value={searchText}
                onChange={handleSearch}
                prefix={<SearchOutlined />}
                placeholder="Search task by name"
                style={{ marginRight: "10px" }}
              />
              <Button>+ New Task</Button>
            </div>
          </div>
          <TaskListCard
            filteredTask={filteredTask}
            setFilteredTask={setFilteredTask}
            setReloadData={setReloadData}
          />
        </div>
      </Content>
    </Layout>
  );
}
export default Dashboard;
