import { Avatar, Layout } from "antd";
import React from "react";
import { domainURL } from "../service/domainURL";
import { useHistory } from "react-router-dom";

const { Header, Content } = Layout;

export default function DashboardLayout({ children }) {
  const history = useHistory();

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
      <Content>{children}</Content>
    </Layout>
  );
}
