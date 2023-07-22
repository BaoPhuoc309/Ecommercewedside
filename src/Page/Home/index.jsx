import React from "react";
import CarouselComponent from "../../component/CarouselComponent";
import "./style.scss";
import Feature from "../../component/Feature";
import Category from "../../component/Category";

const Home = () => {
  return (
    <main>
      <CarouselComponent />
      <Feature />
      <Category />
    </main>
  );
};

export default Home;
