import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  List,
  Row,
  Select,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actCreateOrder,
  sendCustomeInfor,
  sendOrderFailure,
  sendOrderSuccess,
} from "../../redux/feature/orderSlice";
import {
  actClearCart,
  actRemoveFromCart,
  actUpdatequantity,
} from "../../redux/feature/cartSlice";
import "./style.scss";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const { userInfor } = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.carts);

  const onFinish = (values) => {
    const orderData = {
      ...values,
      userId: userInfor.id,
      cartItems: cartItems,
    };
    if (!orderData || cartItems.length === 0) {
      dispatch(sendOrderFailure(orderData));
    } else {
      dispatch(sendCustomeInfor(orderData));
      dispatch(actCreateOrder(orderData));
      dispatch(actClearCart());
    }
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const price = item.price
          ? parseFloat(item.price.replace("$", "").replace(",", ""))
          : 0;
        const quantity = item.quantity || 1;
        return total + price * quantity;
      }, 0)
      .toFixed(2);
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(actUpdatequantity({ id: id, quantity: quantity }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(actRemoveFromCart(productId));
  };

  const shippingOptions = [
    { value: "free", label: "Free Shipping" },
    { value: "standard", label: "Standard Shipping ($5.00)" },
    { value: "express", label: "Express Shipping ($10.00)" },
  ];
  const [selectedShippingOption, setSelectedShippingOption] = useState(
    shippingOptions[0].value
  );

  const calculateShippingFee = () => {
    if (selectedShippingOption !== "free") {
      const shippingFee = parseFloat(
        shippingOptions
          .find((option) => option.value === selectedShippingOption)
          .label.match(/\d+\.\d+/)[0]
      );
      return shippingFee;
    }
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(getTotalPrice());
    const shippingFee = calculateShippingFee();
    return (subtotal + shippingFee).toFixed(2);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <Card className="checkout-card">
          <Form onFinish={onFinish} layout="vertical">
            <Divider>Thông tin khách hàng</Divider>

            <Form.Item
              label="Họ và tên"
              name="fullName"
              rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
            >
              <Input defaultValue={userInfor.username} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập địa chỉ email" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
            >
              <Input defaultValue={userInfor.email} />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phoneNumber"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Địa chỉ nhà"
              name="homeAddress"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ nhà" }]}
            >
              <Input />
            </Form.Item>

            <Divider>Địa chỉ nhận hàng</Divider>

            <Form.Item
              label="Tên đường"
              name="street"
              rules={[{ required: true, message: "Vui lòng nhập tên đường" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Số nhà"
              name="houseNumber"
              rules={[{ required: true, message: "Vui lòng nhập số nhà" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Tỉnh/Thành phố"
              name="province"
              rules={[
                { required: true, message: "Vui lòng chọn tỉnh/thành phố" },
              ]}
            >
              <Select>
                <Select.Option value="tpHCM">TP. Hồ Chí Minh</Select.Option>
                <Select.Option value="haNoi">Hà Nội</Select.Option>
                {/* Thêm các tỉnh/thành phố khác tùy theo yêu cầu */}
              </Select>
            </Form.Item>

            <Form.Item
              label="Quận/Huyện"
              name="district"
              rules={[{ required: true, message: "Vui lòng chọn quận/huyện" }]}
            >
              <Select>
                <Select.Option value="quan1">Quận 1</Select.Option>
                <Select.Option value="quan2">Quận 2</Select.Option>
                {/* Thêm các quận/huyện khác tùy theo yêu cầu */}
              </Select>
            </Form.Item>

            <Form.Item
              label="Phường/Xã"
              name="ward"
              rules={[{ required: true, message: "Vui lòng chọn phường/xã" }]}
            >
              <Select>
                <Select.Option value="phuong1">Phường 1</Select.Option>
                <Select.Option value="phuong2">Phường 2</Select.Option>
                {/* Thêm các phường/xã khác tùy theo yêu cầu */}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="button-container"
              >
                Đặt Hàng
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card className="payment-card">
          <Divider>Payment</Divider>
          <List
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item className="payment-item">
                <div className="payment-item-image">
                  <img src={item.imgURL} alt={item.name} />
                </div>
                <div className="payment-item-details">
                  <p>Product Name: {item.name}</p>
                  <p>Price: {item.price}</p>
                  <InputNumber
                    min={1}
                    value={item.quantity}
                    onChange={(value) => handleUpdateQuantity(item.id, value)}
                  />
                  <span
                    className="remove-button"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Xóa sản phẩm
                  </span>
                </div>
              </List.Item>
            )}
          />

          <div className="shipping-options">
            <Select
              defaultValue={selectedShippingOption}
              style={{ width: "100%" }}
              onChange={setSelectedShippingOption}
            >
              {shippingOptions.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="payment-total">
            <p>Subtotal: ${getTotalPrice()}</p>
            <p>
              Shipping Fee:{" "}
              {selectedShippingOption !== "free"
                ? `$${calculateShippingFee()}`
                : "Free"}
            </p>
            <p>Total: ${calculateTotal()}</p>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default CheckoutForm;
