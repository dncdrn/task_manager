import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Page/Login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./Page/Dashboard";
import "antd/dist/antd.css";

const authed = localStorage.getItem("user_token");

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          authed={authed}
        />
      </Switch>
    </Router>
  );
}

export default App;
