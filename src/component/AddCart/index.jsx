import React from "react";
import BreadcumbComponent from "../BreadcumbComponent";
import { Button, Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import ProductTable from "../ProductTable";
import { useNavigate } from "react-router-dom";
import { ROUTER_APP } from "../../constant/Router";

const AddCart = () => {
  const cartItems = useSelector((state) => state.cart.carts);
  const { isLoggedIn } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const price =
        typeof item.price === "string"
          ? parseFloat(item.price.replace("$", "").replace(",", ""))
          : 0;
      const quantity = item.quantity || 1;
      return total + price * quantity;
    }, 0);

    return totalPrice.toFixed(2);
  };

  const handleCheckOut = () => {
    if (isLoggedIn) {
      navigate(ROUTER_APP.CHECKOUT);
    } else {
      navigate(ROUTER_APP.LOGIN_PAGE);
    }
  };

  return (
    <div className="add-cart__container">
      <BreadcumbComponent />
      <div className="add-cart__wrapper flex py-4">
        <div className="add-cart__item">
          <Card className="add-cart__card">
            <ProductTable cartItems={cartItems} />
          </Card>
        </div>
        <div className="add-cart__item mx-4">
          <Card
            style={{
              width: 300,
            }}
          >
            <div className="add-cart__bill">
              <h3>Sub-Total: {getTotalPrice()}</h3>
              <h3>Shipping: $0.00</h3>
              <h3>Tax: $0.00</h3>
              <h3>Total: {getTotalPrice()}</h3>
            </div>
            <div className="add-cart__btn">
              <Button
                onClick={handleCheckOut}
                style={{ width: 255 }}
                type="primary"
              >
                <ShoppingCartOutlined />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
