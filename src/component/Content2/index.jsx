import React from "react";
import banner1 from "../../assets/banner-2.jpeg";
import banner2 from "../../assets/banner-3.jpeg";
import banner3 from "../../assets/banner-4.jpeg";
import banner4 from "../../assets/banner-5.jpeg";
import banner5 from "../../assets/banner-6.jpeg";
import banner6 from "../../assets/banner-7.jpeg";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss";

const Content2 = () => {
  return (
    <div>
      <section className="category-banner my-4">
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={8}>
            <Card
              className="category-banner__card"
              bordered={false}
              cover={<img src={banner1} alt="" />}
            >
              <Meta
                className="fs-15 fw-7"
                title=" Galaxy S13 Lite Love The Price."
                description="From $429.00"
              />
              <Button className="my-4" type="primary">
                Buy Now
              </Button>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={8}>
            <Card
              className="category-banner__card"
              bordered={false}
              cover={<img src={banner2} alt="" />}
            >
              <Meta
                className="fs-15 fw-7"
                title=" Galaxy S13 Lite Love The Price."
                description="From $429.00"
              />
              <Button className="my-4" type="primary">
                Buy Now
              </Button>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={8}>
            <Card
              className="category-banner__card"
              bordered={false}
              cover={<img src={banner3} alt="" />}
            >
              <Meta
                className="fs-15 fw-7"
                title=" Galaxy S13 Lite Love The Price."
                description="From $429.00"
              />
              <Button className="my-4" type="primary">
                Buy Now
              </Button>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={8}>
            <Card
              className="category-banner__card"
              bordered={false}
              cover={<img src={banner4} alt="" />}
            >
              <Meta
                className="fs-15 fw-7"
                title=" Galaxy S13 Lite Love The Price."
                description="From $429.00"
              />
              <Button className="my-4" type="primary">
                Buy Now
              </Button>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={8}>
            <Card
              className="category-banner__card"
              bordered={false}
              cover={<img src={banner5} alt="" />}
            >
              <Meta
                className="fs-15 fw-7"
                title=" Galaxy S13 Lite Love The Price."
                description="From $429.00"
              />
              <Button className="my-4" type="primary">
                Buy Now
              </Button>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={8}>
            <Card
              className="category-banner__card"
              bordered={false}
              cover={<img src={banner6} alt="" />}
            >
              <Meta
                className="fs-15 fw-7"
                title=" Galaxy S13 Lite Love The Price."
                description="From $429.00"
              />
              <Button className="my-4" type="primary">
                Buy Now
              </Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}></Row>
      </section>
    </div>
  );
};

export default Content2;
