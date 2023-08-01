import React from "react";
import { Card, Form, Input, Button } from "antd";
import "./style.scss";

const ChangePassword = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="change-password-container py-4">
      <h1 className="change-password-title">Thay đổi mật khẩu</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Mật khẩu cũ"
          name="oldPassword"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu cũ!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu mới!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Xác nhận mật khẩu mới"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Vui lòng xác nhận mật khẩu mới!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Lưu thay đổi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;
