import React from "react";
import "./style.scss";
import { ROUTER_APP } from "../../constant/Router";
import { Link } from "react-router-dom";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import Navbar from "../NavBar";

const HeaderComponent = () => {
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
              <ul className="top-links fs-13 flex align-center">
                <li className="top-links-itm-txt">
                  <Link to={ROUTER_APP.REGISTER_PAGE}>Đăng Ký</Link>
                </li>
                <li className="vert-line"></li>
                <li className="top-links-itm-txt">
                  <Link to={ROUTER_APP.LOGIN_PAGE}>Đăng Nhập</Link>
                </li>
              </ul>
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
