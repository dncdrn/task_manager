import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes/index";
import { loginAccount } from "./service/loginAPI";
import { getDashboardData } from "./service/dashboardAPI";
import {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
} from "./service/taskAPI";

function App() {
  useEffect(() => {
    (async function () {
      const x = await loginAccount({
        name: "Danica Durana",
        apiKey: process.env.REACT_APP_API_KEY,
      });
    })();
    (async function () {
      const x = await getDashboardData();
      console.log("getDashboardData", x);
    })();
    // (async function () {
    //   const x = await deleteTask("60d57b9db67e24277b6f00d6");
    //   console.log("deleteTask", x);
    // })();
    // (async function () {
    //   const x = await addTask({ name: "Create login" });
    //   console.log("addTask", x);
    // })();
    // (async function () {
    //   const x = await updateTask("60d57b9db67e24277b6f00d6", {
    //     name: "Create Login Component",
    //   });
    //   console.log("updateTask", x);
    // })();
  }, []);
  return <h1>heloo</h1>;
}

export default App;
