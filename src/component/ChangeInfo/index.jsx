import React from "react";
import { Card, Form, Input, Button } from "antd";

const ChangeInfo = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="change-info-container">
      <Card className="change-info-card">
        <h1 className="change-info-title">Thay đổi thông tin cá nhân</h1>
        <Form onFinish={onFinish}>
          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu thay đổi
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ChangeInfo;
