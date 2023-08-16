import React, { useState } from "react";
import { Input, Button, DatePicker, Radio, Form, Modal } from "antd";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import {
  actUpdateUserById,
  updateUserSuccess,
} from "../../redux/feature/userSlice";
const dateFormat = "DD-MM-YYYY";

const ChangeInfo = () => {
  const dispatch = useDispatch();
  const { userInfor } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    dispatch(actUpdateUserById({ id: userInfor.id, userUpdate: values }));
    setIsModalOpen(false);
  };

  const init = {
    dateOfBirth: dayjs(new Date()),
  };

  return (
    <div className="edit-profile flex flex-column">
      <h1 className="edit-profile__title text-center">
        Thay đổi thông tin cá nhân
      </h1>
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
          <Button key="save" type="primary" onClick={onFinish}>
            Lưu
          </Button>,
        ]}
      >
        <Form
          className="edit-profile__form"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            username: userInfor.username,
            email: userInfor.email,
            gender: userInfor.gender,
            init: init,
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="edit-profile__input" />
          </Form.Item>
          <Form.Item
            name="age"
            label="Tuổi"
            rules={[{ required: true, message: "Vui lòng nhập tuổi" }]}
          >
            <Input className="edit-profile__input" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập địa chỉ email" },
              { type: "email", message: "Địa chỉ email không hợp lệ" },
            ]}
          >
            <Input className="edit-profile__input" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Giới tính"
            rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}
          >
            <Radio.Group>
              <Radio value="male">Nam</Radio>
              <Radio value="female">Nữ</Radio>
              <Radio value="other">Khác</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="dob"
            label="Ngày sinh"
            rules={[{ required: true, message: "Vui lòng chọn ngày sinh" }]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ChangeInfo;
