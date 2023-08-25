import { Button, Card, Col, Rate, Row } from "antd";
import React from "react";
import banner10 from "../../assets/banner-11.png";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTER_APP } from "../../constant/Router";
import Meta from "antd/es/card/Meta";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./style.scss"; // Import file SCSS

const Content6 = ({ products, handleAddToCart }) => {
  const navigate = useNavigate();

  const handleChangeProductDetails = (id) => {
    navigate(generatePath(ROUTER_APP.DETAIL, { id: id }));
  };

  return (
    <div>
      <section className="category-bestseller py-4 ">
        <h1 className="category-bestseller text-uppercase text-center my-4 fs-30">
          Bestsellers
        </h1>
        <section className="category-bestseller">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
              <div className="category-bestseller__banner">
                <img src={banner10} alt="" />
              </div>
            </Col>
            {products.slice(12, 16).map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={5}>
                <div className="card-top">
                  <Card
                    cover={<img src={product.imgURL} alt={product.name} />}
                    onClick={() => handleChangeProductDetails(product.id)}
                  >
                    <Meta title={product.name}></Meta>
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
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </section>
    </div>
  );
};

export default Content6;
