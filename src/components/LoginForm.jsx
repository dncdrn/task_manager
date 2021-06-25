import { Input, Form, Button } from "antd";
import React from "react";

export default function LoginForm() {
  return (
    <Form>
      <Form.Item>
        <Input placeholder="Id" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Name" />
      </Form.Item>
      <Button type="primary">Login</Button>
    </Form>
  );
}
