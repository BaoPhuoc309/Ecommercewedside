import { Button, Card, Col, Rate, Row } from "antd";
import React, { useEffect } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTER_APP } from "../../constant/Router";
import Meta from "antd/es/card/Meta";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { actAddToCart } from "../../redux/feature/cartSlice";
import { fetchAllProduct } from "../../redux/feature/productSlice";

const Content7 = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(actAddToCart({ ...product, quantity: 1 }));
  };

  const handleChangeProductDetails = (id) => {
    navigate(generatePath(ROUTER_APP.DETAIL, { id: id }));
  };

  useEffect(() => {
    dispatch(fetchAllProduct()); // Dispatch the action to fetch all products
  }, []);

  return (
    <div className="product-tab py-4">
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <div className="product-tab__title">
            <h3 className="fw-7 fs-20 text-uppercase">Trending items</h3>
          </div>
          <div className="product-tab__item">
            <Row gutter={[16, 16]}>
              {products.slice(0, 4).map((product) => (
                <Col key={product.id} xs={24} sm={12} md={6} lg={6} xl={6}>
                  <Card
                    cover={<img src={product.imgURL} alt={product.name} />}
                    onClick={() => handleChangeProductDetails(product.id)}
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
        </Col>
        <Col xs={24}>
          <div className="product-tab__title">
            <h3 className="fw-7 fs-20 text-uppercase">Trending Products</h3>
          </div>
          <div className="product-tab__item">
            <Row gutter={[16, 16]}>
              {products.slice(4, 8).map((product) => (
                <Col key={product.id} xs={24} sm={12} md={6} lg={6} xl={6}>
                  <Card
                    cover={<img src={product.imgURL} alt={product.name} />}
                    onClick={() => handleChangeProductDetails(product.id)}
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
        </Col>
        <Col xs={24}>
          <div className="product-tab__title">
            <h3 className="fw-7 fs-20 text-uppercase">Recently added</h3>
          </div>
          <div className="product-tab__item">
            <Row gutter={[16, 16]}>
              {products.slice(8, 12).map((product) => (
                <Col key={product.id} xs={24} sm={12} md={6} lg={6} xl={6}>
                  <Card
                    cover={<img src={product.imgURL} alt={product.name} />}
                    onClick={() => handleChangeProductDetails(product.id)}
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
        </Col>
        <Col xs={24}>
          <div className="product-tab__title">
            <h3 className="fw-7 fs-20 text-uppercase">Top Rated</h3>
          </div>
          <div className="product-tab__item">
            <Row gutter={[16, 16]}>
              {products.slice(12, 16).map((product) => (
                <Col key={product.id} xs={24} sm={12} md={6} lg={6} xl={6}>
                  <Card
                    cover={<img src={product.imgURL} alt={product.name} />}
                    onClick={() => handleChangeProductDetails(product.id)}
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
        </Col>
      </Row>
    </div>
  );
};

export default Content7;
