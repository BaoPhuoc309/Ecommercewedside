import React, { useState } from "react";
import { Card, Form, Input, Button, Modal } from "antd";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  actUpdatePasswordUserById,
  actUpdateUserById,
} from "../../redux/feature/userSlice";

const ChangePassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userInfor } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { newPassword, confirmPassword } = values;
    if (newPassword === confirmPassword) {
      dispatch(
        actUpdatePasswordUserById({
          id: userInfor.id,
          updatedUser: {
            password: newPassword,
          },
        })
      );
    }
    form.resetFields();
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="change-password-container py-4">
      <h1 className="change-password-title">Thay đổi mật khẩu</h1>
      <Button className="edit-profile__btn" type="primary" onClick={showModal}>
        Mở cửa sổ thay đổi thông tin
      </Button>
      <Modal
        title="Thay đổi thông tin cá nhân"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="save" type="primary" onClick={form.submit}>
            Lưu
          </Button>,
        ]}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
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
        </Form>
      </Modal>
    </div>
  );
};

export default ChangePassword;
