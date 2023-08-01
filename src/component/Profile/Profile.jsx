import React from "react";
import { Card, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./style.scss";
import { ROUTER_APP } from "../../constant/Router";

const Profile = () => {
  return (
    <div className="container ">
      <div className="profile-wrapper">
        <Card className="profile-card">
          <Avatar
            size={64}
            icon={<UserOutlined />}
            className="profile-avatar"
          />
          <h1 className="profile-title">John Doe</h1>
          <p className="profile-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            justo eu purus mattis facilisis id eu lectus.
          </p>
          <Link to={ROUTER_APP.CHANGEINFO}>
            <Button type="primary">Thay đổi thông tin cá nhân</Button>
          </Link>
          <Link to={ROUTER_APP.CHANGEPASSWORD}>
            <Button type="primary">Thay đổi mật khẩu</Button>
          </Link>
          <Link to={ROUTER_APP.HISTORY}>
            <Button type="primary">Xem lịch sử đơn hàng</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
