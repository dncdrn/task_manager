import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Page/Login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./Page/Dashboard";
import NewTaskPage from "./Page/NewTaskPage";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { domainURL } from "./service/domainURL";
const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Layout className="layout">
          <Header>
            <div className="logo"></div>
            <Menu theme="dark" mode="horizontal">
              <Avatar
                size={61}
                src={domainURL + localStorage.getItem("user_image")}
              />
              {/* <Menu.Item key={1}>Task Manager</Menu.Item> */}
            </Menu>
          </Header>
          <Content>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/new_task" component={NewTaskPage} />
          </Content>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
