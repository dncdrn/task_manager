import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./page/Login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./page/Dashboard";
import NewTaskPage from "./page/NewTaskPage";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/new_task" component={NewTaskPage} />
      </Switch>
    </Router>
  );
}

export default App;
