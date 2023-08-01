/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./style.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER_APP } from "../../constant/Router";
import { useDispatch } from "react-redux";
import {
  actLoginUser,
  loginFailure,
  loginSuccess,
} from "../../redux/feature/UserSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log(values);
    const { username, password } = values;
    dispatch(actLoginUser({ username, password }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
    dispatch(loginFailure(errorInfo));
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1 className="register-title">Đăng nhập tài khoản</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot my-4" href="#">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item className="flex flex-column">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to={ROUTER_APP.REGISTER_PAGE}>register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LoginForm;
