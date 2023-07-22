import { Col, Row } from "antd";
import React from "react";
import "./style.scss";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";

const Feature = () => {
  return (
    <section className="feature py-4">
      <div className="container-fluid mx-7 px-2">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <div className="feature__item flex">
              <div className="feature__item-icon mx-2 my-2">
                <img src={icon1} alt="Icon" />
              </div>
              <div className="feature__item-content flex flex-column">
                <h3 className="feature__title fs-13">Trade-in</h3>
                <p className="feature__description fs-13 ">
                  Trade in your current phone for an instant discount.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <div className="feature__item flex">
              <div className="feature__item-icon mx-2 my-2">
                <img src={icon2} alt="Icon" />
              </div>
              <div className="feature__item-content flex flex-column">
                <h3 className="feature__title fs-13">Free Returns</h3>
                <p className="feature__description fs-13  ">
                  Don't love it? Return it for free within 28 days.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <div className="feature__item flex">
              <div className="feature__item-icon mx-2 my-2">
                <img src={icon3} alt="Icon" />
              </div>
              <div className="feature__item-content flex flex-column">
                <h3 className="feature__title fs-13">Finance Available</h3>
                <p className="feature__description fs-13  ">
                  Pay on your terms and from 6 to 48 months.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <div className="feature__item flex">
              <div className="feature__item-icon mx-2">
                <img src={icon4} alt="Icon" />
              </div>
              <div className="feature__item-content flex flex-column">
                <h3 className="feature__title fs-13">Free Delivery</h3>
                <p className="feature__description fs-13  ">
                  Order by 8pm and get it the next day. 24/7 tracking.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Feature;
