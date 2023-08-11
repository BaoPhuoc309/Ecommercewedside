import React, { useState } from "react";
import { Button, Card, Form, Input, InputNumber, List, Rate, Tabs } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./style.scss";
import { useDispatch } from "react-redux";
import { actAddToCart } from "../../redux/feature/cartSlice";
const { TabPane } = Tabs;

const ProductDetail = ({ currentProduct }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(actAddToCart({ ...currentProduct, quantity: quantity }));
  };

  const items = [
    {
      key: "1",
      label: `DESCRIPTION`,
      children: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.`,
    },
    {
      key: "2",
      label: "REVIEWS",
      children: (
        <div className="product-detail__write-review">
          <h3 className="product-detail__write-review-title">
            Write Your Own Review
          </h3>
          <p>Only registered users can write reviews</p>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>

            <Form.Item name="comment" label="Comment">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="rating" label="Rating">
              <Rate />
            </Form.Item>
            <Button
              className="product-detail__submit-button"
              type="primary"
              htmlType="submit"
            >
              Submit Review
            </Button>
          </Form>
        </div>
      ),
    },
  ];

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
                <span>
                  <Rate disabled />
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
      <div className="product-detail__item">
        <div className="product-detail__tabs">
          <Card>
            <Tabs className="product-detail__tabs-content" defaultActiveKey="1">
              {items.map((item) => (
                <TabPane key={item.key} tab={item.label}>
                  <p className="product-detail__description-text">
                    {item.children}
                  </p>
                </TabPane>
              ))}
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
