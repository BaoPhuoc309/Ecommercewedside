import React, { useState } from "react";
import "./style.scss";
import { Button, Card, Col, Rate, Row } from "antd";
import category1 from "../../assets/category-1.jpeg";
import category2 from "../../assets/category-2.jpeg";
import category3 from "../../assets/category-3.jpeg";
import category4 from "../../assets/category-4.jpeg";
import category5 from "../../assets/category-5.jpeg";
import category6 from "../../assets/category-6.jpeg";
import category7 from "../../assets/category-7.jpeg";
import category8 from "../../assets/category-8.jpeg";
import category9 from "../../assets/category-9.jpeg";
import category10 from "../../assets/category-10.jpeg";
import category11 from "../../assets/category-11.jpeg";
import category12 from "../../assets/img-1.jpeg";
import category13 from "../../assets/category-13.jpeg";
import category14 from "../../assets/category-14.jpeg";
import category15 from "../../assets/category-15.jpeg";
import category16 from "../../assets/category-16.jpeg";
import category17 from "../../assets/category-17.jpeg";
import category18 from "../../assets/category-18.jpeg";
import category19 from "../../assets/category-19.jpeg";
import category20 from "../../assets/category-20.jpeg";
import category21 from "../../assets/category-21.jpeg";
import banner1 from "../../assets/banner-2.jpeg";
import banner2 from "../../assets/banner-3.jpeg";
import banner3 from "../../assets/banner-4.jpeg";
import banner4 from "../../assets/banner-5.jpeg";
import banner5 from "../../assets/banner-6.jpeg";
import banner6 from "../../assets/banner-7.jpeg";
import banner7 from "../../assets/banner-8.jpeg";
import banner8 from "../../assets/banner-9.jpeg";
import banner9 from "../../assets/banner-10.jpeg";
import banner10 from "../../assets/banner-11.png";
import Meta from "antd/es/card/Meta";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductTab from "../ProductTab";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Category = () => {
  const [value, setValue] = useState(3);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <section className="category-trending py-4 ">
        <h1 className="category__title text-uppercase text-center my-4 fs-30">
          Trending Categories
        </h1>
        <p className="category__content text-center fw-1">
          The best way to buy the products you love. Take a look at what`s new,
          right now.
        </p>
        <Slider className="slider flex flex-wrap" {...settings}>
          <div className="card">
            <div className="card-top">
              <img src={category1} alt="Laptop" />
              <h3 className="text-center fs-16 fw-6">Laptop</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={category2} alt="Laptop" />
              <h3 className="text-center fs-16 fw-6">Laptop</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={category3} alt="Laptop" />
              <h3 className="text-center fs-16 fw-6">Laptop</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={category4} alt="Laptop" />
              <h3 className="text-center fs-16 fw-6">Laptop</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={category5} alt="Laptop" />
              <h3 className="text-center fs-16 fw-6">Laptop</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={category6} alt="Laptop" />
              <h3 className="text-center fs-16 fw-6">Laptop</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={category7} alt="Laptop" />
              <h3 className="text-center fs-16 fw-6">Laptop</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={category8} alt="Laptop" />
              <h3 className="text-center fs-16 fw-6">Laptop</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={category9} alt="Laptop" />
              <h3 className="text-center fs-16 fw-6">Laptop</h3>
            </div>
          </div>
        </Slider>
      </section>

      <section className="category-banner my-4">
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
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
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
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
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
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
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
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
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
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
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
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
      </section>

      <section className="category-deal py-4">
        <h1 className="category__title text-uppercase text-center my-4 fs-30">
          Deal Of The Week
        </h1>
        <p className="category__content text-center fw-1">
          Our weekly sale products with best discount and special gift vouchers.
        </p>
        <Slider className="slider flex flex-wrap" {...settings}>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category7} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category8} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category9} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category10} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category11} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category12} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category13} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
        </Slider>
      </section>

      <section className="category-trending py-4">
        <h1 className="category__title text-uppercase text-center my-4 fs-30">
          Trending Products
        </h1>
        <p className="category__content text-center fw-1">
          Our weekly top trending products with category wise feature, latest
          and top sellings.
        </p>
        <Slider className="slider flex flex-wrap" {...settings}>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category14} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category15} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category16} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category17} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category18} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category19} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <Card cover={<img src={category20} alt="Laptop" />}>
                <Meta title="Laptop"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </div>
          </div>
        </Slider>
      </section>

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

      <section className="category-bestseller py-4 ">
        <h1 className="category-bestseller text-uppercase text-center my-4 fs-30">
          Bestsellers
        </h1>
        <section className="category-bestseller px-4">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
              <div className="category-bestseller__banner">
                <img src={banner10} alt="" />
              </div>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
              <Card
                className="category-bestseller__card"
                hoverable
                cover={<img src={category18} alt="Laptop" />}
              >
                <Meta title="iPad Pro M2 12.9 inch 2022"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
              <Card
                className="category-bestseller__card"
                hoverable
                cover={<img src={category19} alt="Laptop" />}
              >
                <Meta title="iPad Pro M2 12.9 inch 2022"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
              <Card
                className="category-bestseller__card"
                hoverable
                cover={<img src={category20} alt="Laptop" />}
              >
                <Meta title="iPad Pro M2 12.9 inch 2022"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
              <Card
                className="category-bestseller__card"
                hoverable
                cover={<img src={category21} alt="Laptop" />}
              >
                <Meta title="iPad Pro M2 12.9 inch 2022"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
              <Card
                className="category-bestseller__card"
                hoverable
                cover={<img src={category13} alt="Laptop" />}
              >
                <Meta title="iPad Pro M2 12.9 inch 2022"></Meta>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <h3>$670.00</h3>
                <Button type="primary">
                  <ShoppingCartOutlined />
                </Button>
              </Card>
            </Col>
          </Row>
        </section>
      </section>

      <section className="product-tab py-4">
        <ProductTab />
      </section>
    </div>
  );
};

export default Category;
