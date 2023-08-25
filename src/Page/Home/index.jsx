import React, { useEffect } from "react";
import CarouselComponent from "../../component/CarouselComponent";
import "./style.scss";
import Feature from "../../component/Feature";
import { useDispatch, useSelector } from "react-redux";
import Content1 from "../../component/Content1";
import { Spin } from "antd";
import { fetchAllBrands } from "../../redux/feature/brandSlice";
import { fetchAllProduct } from "../../redux/feature/productSlice";
import Content2 from "../../component/Content2";
import Content3 from "../../component/Content3";
import Content4 from "../../component/Content4";
import { actAddToCart } from "../../redux/feature/cartSlice";
import Content5 from "../../component/Content5";
import Content6 from "../../component/Content6";
import Content7 from "../../component/Content7";
import Works from "../../component/Work";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  const { brands } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(fetchAllProduct()); // Dispatch the action to fetch all products
    dispatch(fetchAllBrands()); // Dispatch the action to fetch all brands
  }, []);

  const handleAddToCart = (product) => {
    dispatch(actAddToCart({ ...product, quantity: 1 }));
  };

  return (
    <>
      <div className="container-fluid">
        <CarouselComponent />
      </div>
      <div className="container">
        <Feature />
      </div>
      <div className="container">
        {isLoading && <Spin />}
        <Content1 />
        <Content2 />
        {products.length === 0 ? (
          <div>No Task</div>
        ) : (
          <>
            <Content3 handleAddToCart={handleAddToCart} products={products} />
            <Content4 handleAddToCart={handleAddToCart} products={products} />
          </>
        )}
        <Content5 />
        {products.length === 0 ? (
          <div>No Task</div>
        ) : (
          <>
            <Content6 handleAddToCart={handleAddToCart} products={products} />
          </>
        )}
        <Works />
        <Content7 />
      </div>
    </>
  );
};

export default Home;
