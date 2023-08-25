import { Button, Card, Col, Rate, Row } from "antd";

import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./style.scss";
import { ROUTER_APP } from "../../constant/Router";
import { useDispatch } from "react-redux";
import { actAddToCart } from "../../redux/feature/cartSlice";

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangeProductDetails = (id) => {
    navigate(generatePath(ROUTER_APP.DETAIL, { id: id }));
  };
  const handleAddToCart = (product) => {
    dispatch(actAddToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="product__container">
      <div className="product__wrappper">
        <h1 className="product__title text-uppercase fs-34">MoniTors</h1>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                onClick={() => handleChangeProductDetails(product.id)}
                className="product__item-card"
                hoverable
                cover={<img src={product.imgURL} alt="" />}
              >
                <Meta title={product.name} />
                <Rate disabled />
                <h3>${product.price}</h3>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  type="primary"
                >
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Product;
