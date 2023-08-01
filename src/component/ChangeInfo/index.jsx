import React, { useState } from "react";
import { Input, Button, DatePicker, Radio, Form } from "antd";
import "./style.scss";

const ChangeInfo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(null);

  const handleSaveProfile = () => {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("Gender:", gender);
    console.log("Date of Birth:", dob);
  };

  return (
    <div className="edit-profile flex flex-column">
      <h1 className="edit-profile__title text-center">
        Thay đổi thông tin cá nhân
      </h1>
      <Form className="edit-profile__form">
        <Input
          className="edit-profile__input"
          placeholder="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="edit-profile__input"
          placeholder="Tuổi"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          className="edit-profile__input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="edit-profile__gender-section">
          <span>Giới tính:</span>
          <Radio.Group
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <Radio value="male">Nam</Radio>
            <Radio value="female">Nữ</Radio>
            <Radio value="other">Khác</Radio>
          </Radio.Group>
        </div>
        <div className="edit-profile__dob-section">
          <span>Ngày sinh:</span>
          <DatePicker
            format="DD/MM/YYYY"
            value={dob}
            onChange={(date) => setDob(date)}
          />
        </div>
        <Button
          className="edit-profile__btn"
          type="primary"
          onClick={handleSaveProfile}
        >
          Lưu thông tin
        </Button>
      </Form>
    </div>
  );
};

export default ChangeInfo;
