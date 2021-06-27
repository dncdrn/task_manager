import { Avatar, Layout } from "antd";
import React from "react";
import { domainURL } from "../service/domainURL";
import { useHistory } from "react-router-dom";
import dashboardStyle from "./DashboardStyle";
const { Header, Content } = Layout;

export default function DashboardLayout({ children }) {
  const history = useHistory();
  const dashboardClasses = dashboardStyle();

  function handleLogout() {
    window.localStorage.clear();
    history.push("/");
  }

  return (
    <Layout className="layout">
      <Header theme="light">
        <div className="logo"></div>
        <Avatar
          size={61}
          src={domainURL + localStorage.getItem("user_image")}
        />
        <a className={dashboardClasses.logoutLabel} onClick={handleLogout}>
          Logout
        </a>
      </Header>
      <Content className={dashboardClasses.container}>{children}</Content>
    </Layout>
  );
}
