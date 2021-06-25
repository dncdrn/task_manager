import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes/index";
import Login from "./Page/Login/Login";
import "antd/dist/antd.css";
import { StyledDiv } from "./AppStyle";
function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <StyledDiv>
      <Router>
        {routes.map(({ title, component: Component, url, exact }) => {
          return (
            <Route
              key={url}
              path={url}
              exact={exact}
              render={(compProps) => <Component {...compProps} title={title} />}
            />
          );
        })}
      </Router>
    </StyledDiv>
  );
}

export default App;
