import React from "react";
import { Card } from "antd";
import { loginAccount } from "../service/loginAPI";
import { Input, Form, Button } from "antd";
import { useHistory } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import dashboardStyle from "../components/DashboardStyle";
import Title from "antd/lib/typography/Title";
function LoginPage() {
  let history = useHistory();
  const dashboardClasses = dashboardStyle();

  async function onFormSubmit(values) {
    // adding api key to values
    values.apiKey = process.env.REACT_APP_API_KEY;
    const loginResult = await loginAccount(values);
    localStorage.setItem("user_token", loginResult.token.token);
    localStorage.setItem("user_image", loginResult.image);
    localStorage.setItem("user_name", loginResult.token.name);
    history.push("/dashboard");
  }

  return (
    <div className={dashboardClasses.loginContainer}>
      <Card
        title={<Title level={3}>Login</Title>}
        className={dashboardClasses.card}
      >
        <Form onFinish={onFormSubmit}>
          <Form.Item name="id">
            <Input placeholder="Id" data-testid="id-number" />
          </Form.Item>
          <Form.Item name="name">
            <Input
              prefix={<SearchOutlined />}
              placeholder="Name"
              data-testid="name"
            />
          </Form.Item>
          <Button
            className={dashboardClasses.button}
            type="primary"
            htmlType="submit"
            data-testid="login-button"
          >
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}
export default LoginPage;
