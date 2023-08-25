import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_APP } from "../../constant/Router";
import { HomeOutlined } from "@ant-design/icons";
import ShoppingCart from "../../Page/shoppingCart";

const BreadcumbComponent = () => {
  return (
    <Breadcrumb
      className="fs-17 py-4"
      items={[
        {
          title: (
            <>
              <Link to={ROUTER_APP.HOME}>
                <HomeOutlined />
              </Link>
            </>
          ),
        },
        {
          href: <Link to={ROUTER_APP.NEW_PRODUCT}></Link>,
          title: "New Product",
        },
        {
          href: (
            <Link to={ROUTER_APP.ADDCART}>
              <ShoppingCart />
            </Link>
          ),
          title: "Shopping Cart",
        },
      ]}
    />
  );
};

export default BreadcumbComponent;
