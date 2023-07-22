import React, { useEffect, useState } from "react";
import "./style.scss";
import { Button, Input } from "antd";
import {
  BarsOutlined,
  ShoppingOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTER_APP } from "../../constant/Router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  getAllCategories,
} from "../../redux/feature/categorySlice";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top flex justify-between">
            <Link to={ROUTER_APP.HOME} className="navbar-brand">
              <span className="text-white">
                <ShoppingOutlined />
              </span>
              <span className="text-capitalize mx-2">ShopWatch</span>
            </Link>

            <form className="navbar-search flex ">
              <Input
                className="navbar-search-input"
                placeholder="Sreach here..."
              />
              <Button htmlType="submit" className="navbar-search-btn">
                <SearchOutlined />
              </Button>
            </form>

            <div className="navbar-btns fs-20">
              <Link to="" className="add-to-cart-btn flex">
                <span className="btn-icon">
                  <ShoppingCartOutlined />
                </span>
                <div className="btn-txt fw-5">
                  cart<span className="cart-count-value">0</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-bottom bg-light-orange">
          <div className="container flex justify-between">
            <ul
              className={`nav-links flex ${
                isSidebarOpen ? "show-nav-links" : ""
              }`}
            >
              <Button
                onClick={() => setIsSidebarOpen(false)}
                className="navbar-hide-btn"
              >
                <CloseOutlined />
              </Button>
              <li>
                <Link to={ROUTER_APP.NEW_PRODUCT}>
                  <h3 className="fs-15 text-uppercase">NewProducts</h3>
                </Link>
              </li>
            </ul>
            <Button
              onClick={() => setIsSidebarOpen(true)}
              className="navbar-shown-btn"
            >
              <BarsOutlined />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
