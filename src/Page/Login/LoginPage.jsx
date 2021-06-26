import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { StyledDiv } from "./LoginStyle";
import { loginAccount } from "../../Service/loginAPI";
import { Input, Form, Button, message } from "antd";
import { useHistory } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

function LoginPage() {
  let history = useHistory();

  async function onFormSubmit(values) {
    // adding api key to values
    values.apiKey = process.env.REACT_APP_API_KEY;
    const loginResult = await loginAccount(values);
    message.success(loginResult.msg);
    localStorage.setItem("user_token", loginResult.token.token);
    localStorage.setItem("user_image", loginResult.image);
    localStorage.setItem("user_name", loginResult.token.name);
    history.push("/dashboard");
  }

  return (
    <StyledDiv>
      <Card title="Login" style={{ width: 300 }}>
        <Form onFinish={onFormSubmit}>
          <Form.Item name="id">
            <Input placeholder="Id" />
          </Form.Item>
          <Form.Item name="name">
            <Input prefix={<SearchOutlined />} placeholder="Name" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </Card>
    </StyledDiv>
  );
}
export default LoginPage;
