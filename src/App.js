import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Page/Login/LoginPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Page/Dashboard";
import NewTaskPage from "./Page/NewTaskPage";
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
