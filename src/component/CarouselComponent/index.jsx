import React from "react";
import { Carousel } from "antd";
import logo1 from "../../assets/banner.jpeg";
import logo2 from "../../assets/banner1.jpeg";
import "./style.scss";

const CarouselComponent = () => {
  return (
    <div className="hero-slider">
      <Carousel className="hero-slider-carousel" autoplay>
        <div className="hero-slider-item">
          <img src={logo1} alt="#" />
        </div>

        <div className="hero-slider-item">
          <img src={logo2} alt="#" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
