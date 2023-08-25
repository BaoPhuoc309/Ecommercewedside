import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./style.scss";
import catelory2 from "../../assets/bg-works.88149694.jpg";

const Works = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="embedded-content">
      <div className="discount-text">
        20% OFF
        <br />
        SURFACE PRO
      </div>
      <Button className="shop-now-button">SHOP NOW</Button>
    </div>
  );
};

export default Works;
