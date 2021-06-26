import { Button, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import ChartGraph from "../components/ChartGraph";
import LatestCreatedCard from "../components/LatestCreatedCard";
// import NewTaskCard from "../components/NewTaskCard";
import NoTaskCard from "../components/NoTaskCard";
import TaskCompletedCard from "../components/TaskCompletedCard";
import TaskListCard from "../components/TaskListCard";
import { getDashboardData } from "../service/dashboardAPI";
import { updateTask } from "../service/taskAPI";

function Dashboard() {
  const [totalTasks, setTotalTasks] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);
  const [taskList, setTaskList] = useState([]);

  async function GetDashboardData() {
    const dashboardResult = await getDashboardData();
    setTotalTasks(dashboardResult.totalTasks);

    setTasksCompleted(dashboardResult.tasksCompleted);
    setTaskList(dashboardResult.latestTasks);
  }
  useEffect(() => {
    GetDashboardData();
  }, []);

  function DashboardView() {
    if (totalTasks === 0) {
      return <NoTaskCard setIsAddingNewTask={setIsAddingNewTask} />;
    }
  }

  return (
    <div style={{ height: "100vh", padding: "40px" }}>
      {/* {totalTasks === 0 && !isAddingNewTask ? (
        <NoTaskCard setIsAddingNewTask={setIsAddingNewTask} />
      ) : ( */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexFlow: "wrap",
        }}
      >
        <TaskCompletedCard
          totalTasks={totalTasks}
          tasksCompleted={tasksCompleted}
          taskList={taskList}
        />
        <LatestCreatedCard taskList={taskList} />
        <ChartGraph totalTasks={totalTasks} tasksCompleted={tasksCompleted} />
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
          <Input placeholder="Search task by name" />
          <Button>+ New Task</Button>
        </div>
      </div>
      <TaskListCard taskList={taskList} getDashboardData={GetDashboardData} />
      {/* )} */}
    </div>
  );
}
export default Dashboard;
