import React, { useState, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { Layout, Avatar } from "antd";
import { domainURL } from "../service/domainURL";

const { Header, Content } = Layout;
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authed = localStorage.getItem("user_token");
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
      <Content>
        <Route
          {...rest}
          render={(props) =>
            authed ? (
              <div>
                <Component {...props} />
              </div>
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />
      </Content>
    </Layout>
  );
};

export default ProtectedRoute;
