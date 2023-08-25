import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTER_APP } from "../../constant/Router";
import "./style.scss"; // Import file SCSS

const Content4 = ({ products, handleAddToCart }) => {
  const navigate = useNavigate();

  const handleChangeProductDetails = (id) => {
    navigate(generatePath(ROUTER_APP.DETAIL, { id: id }));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div>
      <section className="category-trending py-4">
        <h1 className="category__title text-uppercase text-center my-4 fs-30">
          Trending Products
        </h1>
        <p className="category__content text-center fs-17 fw-1">
          Our weekly top trending products with category wise feature, latest
          and top sellings.
        </p>
        <Slider className="slider" {...settings}>
          {products.slice(7, 12).map((product) => (
            <div key={product.id} className="card">
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
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Content4;
