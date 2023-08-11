import React, { useState } from "react";
import product1 from "../../assets/product-1.jpeg";
import product2 from "../../assets/product-2.jpeg";
import product3 from "../../assets/product-3.jpeg";
import product4 from "../../assets/product-4.jpeg";
import product5 from "../../assets/product-5.jpeg";
import product6 from "../../assets/product-6.jpeg";
import product7 from "../../assets/product-7.jpeg";
import product8 from "../../assets/product-8.jpeg";
import product9 from "../../assets/product-9.jpeg";
import product10 from "../../assets/product-10.jpeg";
import product11 from "../../assets/product-11.jpeg";
import product12 from "../../assets/product-12.jpeg";
import product13 from "../../assets/product-13.jpeg";
import product14 from "../../assets/product-14.jpeg";
import product15 from "../../assets/product-15.jpeg";
import product16 from "../../assets/product-16.jpeg";
import product17 from "../../assets/w3nop-demo.jpg";
import { Button, Card, Col, Rate, Row } from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const ProductTab = () => {
  const [value, setValue] = useState(3);

  return (
    <div className="container">
      <div className="product-tab">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6} lg={6} xl={6}>
            <div className="product-tab__title">
              <h3 className="fw-7 fs-20 text-uppercase">Trending items</h3>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product17} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product1} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product2} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product3} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product4} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} xl={6}>
            <div className="product-tab__title">
              <h3 className="fw-7 fs-20 text-uppercase">Trending Products</h3>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product17} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product5} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product6} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product7} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product8} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6} lg={6} xl={6}>
            <div className="product-tab__title">
              <h3 className="fw-7 fs-20 text-uppercase">Recently added</h3>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product17} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product9} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product14} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product11} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product12} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6} lg={6} xl={6}>
            <div className="product-tab__title">
              <h3 className="fw-7 fs-20 text-uppercase">Top Rated</h3>
            </div>
            <div className="product-tab__item ">
              <Card className="flex" cover={<img src={product17} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item">
              <Card className="flex" cover={<img src={product13} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item ">
              <Card className="flex" cover={<img src={product14} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item ">
              <Card className="flex" cover={<img src={product15} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
            <div className="product-tab__item ">
              <Card className="flex" cover={<img src={product16} alt="" />}>
                <Meta title="Dell 27" />
                {/* <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span> */}
                <Button className="flex flex-wrap py-2" type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductTab;
