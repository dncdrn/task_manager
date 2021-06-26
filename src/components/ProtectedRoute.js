import React, { useState, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authed = localStorage.getItem("user_token");

  return (
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
  );
};

export default ProtectedRoute;
