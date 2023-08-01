import React from "react";
import CarouselComponent from "../../component/CarouselComponent";
import "./style.scss";
import Feature from "../../component/Feature";
import Category from "../../component/Category";
import BreadcumbComponent from "../../component/BreadcumbComponent";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <CarouselComponent />
      </div>
      <div className="container">
        <Feature />
      </div>
      <div className="container">
        <Category />
      </div>
    </>
  );
};

export default Home;
