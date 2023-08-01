import React, { useState } from "react";
import { Button, Card, InputNumber, Rate, Tabs } from "antd";

import "./style.scss";
import { useDispatch } from "react-redux";
import { actAddToCart } from "../../redux/feature/cartSlice";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const ProductDetail = ({ currentProduct }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(actAddToCart({ ...currentProduct, quantity: quantity }));
  };

  const [value, setValue] = useState(3);

  const items = [
    {
      key: "1",
      label: `DESCRIPTION`,
      children: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.`,
    },
  ];

  return (
    <div className="product-detail__container py-4 ">
      <div className="product-detail__wrapper flex">
        {currentProduct ? (
          <>
            <div className="product-detail__item">
              <Card>
                <img src={currentProduct.imgURL} alt="" />
              </Card>
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
              <div className="py-4">
                <Tabs
                  className="fs-15 fw-5"
                  defaultActiveKey="1"
                  items={items}
                />
              </div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__content px-4">
                <div className="product-detail__title">
                  <h1>{currentProduct.name}</h1>
                </div>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
                <p>
                  Speaker Marshall Middleton Black Nunc facilisis sagittis
                  ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
                  tristique ut lectus. Sed et lorem nunc.
                </p>
              </div>
            </div>
            <div className="product-detail__item">
              <div className="product-detail__price">
                <Card style={{ width: 400 }}>
                  <div className="product-detail__title">
                    <h1>{currentProduct.price}</h1>
                  </div>
                  <div className="flex">
                    <InputNumber
                      onChange={(value) => setQuantity(value)}
                      min={1}
                      max={10}
                      value={quantity}
                    />
                    <Button
                      onClick={() => handleAddToCart(currentProduct)}
                      className="mx-2"
                      type="primary"
                    >
                      Add To Cart
                    </Button>
                  </div>
                  <ul className="flex flex-column py-2">
                    <li>Manufacturer: </li>
                    <li>Availability: </li>
                    <li>SKU:</li>
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
