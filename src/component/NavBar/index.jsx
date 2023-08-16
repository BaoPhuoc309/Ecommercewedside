import React, { useState } from "react";
import "./style.scss";
import { Button, Input } from "antd";
import {
  BarsOutlined,
  ShoppingOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTER_APP } from "../../constant/Router";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchKey,
  fetchAllProduct,
  setNewPage,
} from "../../redux/feature/productSlice";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.carts);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { searchKey, pagination } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchKey = (event) => {
    event.preventDefault();
    dispatch(
      fetchAllProduct({
        _page: 1,
        _limit: pagination.limitPerPage,
        q: searchKey,
      })
    );
    dispatch(setNewPage(1));
    handleSearch();
  };

  const handleChangeInputSearch = (event) => {
    const value = event.target.value;
    dispatch(setSearchKey(value));
  };

  const handleSearch = () => {
    if (searchKey !== "") {
      navigate(`${ROUTER_APP.NEW_PRODUCT}?search=${searchKey}`);
    }
  };

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

            <form onSubmit={handleSearchKey} className="navbar-search flex ">
              <Input
                className="navbar-search-input"
                placeholder="Sreach here..."
                value={searchKey}
                onChange={handleChangeInputSearch}
              />
              <Button htmlType="submit" className="navbar-search-btn">
                <SearchOutlined />
              </Button>
            </form>

            <div className="navbar-btns fs-20">
              <Link to={ROUTER_APP.ADDCART} className="add-to-cart-btn flex">
                <span className="btn-icon">
                  <ShoppingCartOutlined />
                </span>
                <div className="btn-txt fw-5">
                  cart
                  <span className="cart-count-value">
                    {cartItems?.length || 0}
                  </span>
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
                <Link
                  className="nav-link fs-12 text-uppercase"
                  to={ROUTER_APP.NEW_PRODUCT}
                >
                  <h3>NewProducts</h3>
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
