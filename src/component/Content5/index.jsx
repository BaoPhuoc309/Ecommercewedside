import React from "react";
import banner7 from "../../assets/banner-8.jpeg";
import banner8 from "../../assets/banner-9.jpeg";
import banner9 from "../../assets/banner-10.jpeg";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

const Content5 = () => {
  return (
    <div>
      <section className="category-banner py-4">
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="category-banner__card"
              bordered={false}
              cover={<img src={banner7} alt="" />}
            >
              <h3>Seller</h3>
              <Meta
                className="fs-15 fw-7"
                title=" Galaxy S13 Lite Love The Price."
                description="From $429.00"
              ></Meta>
              <Button type="primary my-4">Buy Now</Button>
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="category-banner__card"
              bordered={false}
              cover={<img src={banner8} alt="" />}
            >
              <h3>Seller</h3>
              <Meta
                className="fs-15 fw-7"
                title=" Galaxy S13 Lite Love The Price."
                description="From $429.00"
              ></Meta>
              <Button type="primary my-4">Buy Now</Button>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="category-banner__card"
              bordered={false}
              cover={<img src={banner9} alt="" />}
            >
              <h3>Seller</h3>
              <Meta
                className="fs-15 fw-7"
                title=" Galaxy S13 Lite Love The Price."
                description="From $429.00"
              ></Meta>
              <Button type="primary my-4">Buy Now</Button>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Content5;
