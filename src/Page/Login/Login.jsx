import React from "react";
import { Card } from "antd";
import { StyledDiv } from "./LoginStyle";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <StyledDiv>
      <Card title="Login" style={{ width: 300 }}>
        <LoginForm />
      </Card>
    </StyledDiv>
  );
}
