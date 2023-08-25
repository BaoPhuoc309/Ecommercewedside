import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import category1 from "../../assets/category-1.jpeg";
import category2 from "../../assets/category-2.jpeg";
import category3 from "../../assets/category-3.jpeg";
import category4 from "../../assets/category-4.jpeg";
import category5 from "../../assets/category-5.jpeg";
import category6 from "../../assets/category-6.jpeg";
import category7 from "../../assets/category-7.jpeg";
import category8 from "../../assets/category-8.jpeg";
import category9 from "../../assets/category-9.jpeg";
import "./style.scss";

const Content1 = () => {
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
      <section className="category-trending py-4 ">
        <h1 className="category__title text-uppercase text-center my-4 fs-30">
          Trending Categories
        </h1>
        <p className="category__content text-center fs-17 fw-1">
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
    </div>
  );
};

export default Content1;
