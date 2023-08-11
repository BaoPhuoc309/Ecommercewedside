import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./style.scss";
import { Button } from "antd";
import { ROUTER_APP } from "../../constant/Router";
import { useSelector } from "react-redux";

const SuccessPage = () => {
  const { orders, customInfor } = useSelector((state) => state.order);

  console.log(orders);

  return (
    <div className="success-page">
      <p className="fs-30 fw-7">Thank You</p>
      <div className="success-icon">
        <CheckCircleOutlined className="icon" />
      </div>
      <p className="success-title">Đặt hàng thành công!</p>
      <p className="success-message">
        Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi. Đơn hàng của bạn đã
        được ghi nhận.
      </p>
      <p className="order-quantity">
        Số lượng đơn hàng: {customInfor.cartItems.length}
      </p>
      <Button type="primary" className="back-to-shop">
        <Link to={ROUTER_APP.HOME}>Quay lại mua hàng</Link>
      </Button>
    </div>
  );
};

export default SuccessPage;
