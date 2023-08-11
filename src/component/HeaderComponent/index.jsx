import React from "react";
import "./style.scss";
import { ROUTER_APP } from "../../constant/Router";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Navbar from "../NavBar";
import { Button, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/feature/UserSlice";

const HeaderComponent = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, useuserInfor } = useSelector((state) => state.user);

  const items = [
    {
      key: "1",
      label: <Link to={ROUTER_APP.LOGIN_PAGE}>Login</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <Link to={ROUTER_APP.REGISTER_PAGE}>Register</Link>,
    },
  ];

  const itemsLoginSuccess = [
    {
      key: "1",
      label: <Link to={ROUTER_APP.PROFILE}>My Profile</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <Button
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </Button>
      ),
    },
  ];

  return (
    <header className="header text-white">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-top fs-23 py-2 flex align-center justify-between">
            <div className="header-cnt-top-l">
              <ul className="flex top-links fs-13 align-center">
                <li>
                  <Link>Kênh Người Bán</Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link>Trở Thành Người Bán Watch</Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link>Tải Ứng Dụng</Link>
                </li>
                <li className="vert-line"></li>
                <li className="flex align-center">
                  <span>Kết Nối</span>
                  <ul className="social-link flex align-item">
                    <li className="mx-2">
                      <Link className="fs-15">
                        <FacebookOutlined />
                      </Link>
                    </li>
                    <li className="mx-2">
                      <Link className="fs-15">
                        <InstagramOutlined />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-cnt-top-r">
              {!isLoggedIn && (
                <div className="header-top__loginRegisterGrp">
                  <div className="header-top__icon">
                    <Dropdown menu={{ items }} placement="bottomLeft">
                      <UserOutlined />
                    </Dropdown>
                  </div>
                </div>
              )}

              {isLoggedIn && (
                <div className="header-top__loginRegisterGrp">
                  <div className="header-top__icon">
                    <Dropdown
                      menu={{ items: itemsLoginSuccess }}
                      trigger={"click"}
                      placement="bottomLeft"
                    >
                      <UserOutlined />
                    </Dropdown>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* header bottom */}
          <div className="header-cnt-bottom">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
