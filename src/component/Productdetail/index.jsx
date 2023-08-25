import React, { useState } from "react";
import { Button, Card, InputNumber, Rate } from "antd";
import {
  ShoppingCartOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { actAddToCart } from "../../redux/feature/cartSlice";
import "./style.scss";
import { calculateAverageRating } from "../../utility/helper";

const ProductDetail = ({ currentProduct, comments }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(actAddToCart({ ...currentProduct, quantity: quantity }));
  };

  const averageRating = calculateAverageRating(comments);

  return (
    <div className="product-detail__container py-4 ">
      <div className="product-detail__wrapper flex">
        {currentProduct ? (
          <>
            <div className="product-detail__item">
              <Card
                className="product-detail__card"
                cover={<img src={currentProduct.imgURL} alt="" />}
              ></Card>
              <div className="flex justify-center py-2">
                <div className="product-detail__thumnail mx-2">
                  <img src={currentProduct.imgURL} alt="" />
                </div>
                <div className="product-detail__thumnail mx-2">
                  <img src={currentProduct.imgURL} alt="" />
                </div>
                <div className="product-detail__thumnail mx-2">
                  <img src={currentProduct.imgURL} alt="" />
                </div>
              </div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__content px-4">
                <div className="product-detail__title">
                  <h1>{currentProduct.name}</h1>
                </div>

                <Rate disabled value={averageRating} />
                <p>
                  Speaker Marshall Middleton Black Nunc facilisis sagittis
                  ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
                  tristique ut lectus. Sed et lorem nunc.
                </p>
              </div>
            </div>
            <div className="product-detail__item">
              <div className="product-detail__price">
                <Card className="product-detail__price-card">
                  <div className="product-detail__title">
                    <h1 className="product-detail__price-value">
                      {currentProduct.price}
                    </h1>
                  </div>
                  <div className="product-detail__input">
                    <InputNumber
                      className="product-detail__input-number"
                      onChange={(value) => setQuantity(value)}
                      min={1}
                      max={10}
                      value={quantity}
                    />
                    <Button
                      onClick={() => handleAddToCart(currentProduct)}
                      className="product-detail__add-to-cart"
                      type="primary"
                    >
                      Add To Cart <ShoppingCartOutlined />
                    </Button>
                  </div>
                  <ul className="product-detail__list">
                    <li>Manufacturer: </li>
                    <li>Availability:</li>
                    <li>SKU: {currentProduct.sku}</li>
                    <li>Free shipping</li>
                  </ul>
                </Card>
              </div>
            </div>
          </>
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
