import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.slice(1).replace(",", "")),
    0
  );

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img
                src={item.imgURL}
                alt={item.name}
                style={{ width: "100px" }}
              />
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
            </div>
          ))}
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <Link to="/payment">
            <button>Proceed to Payment</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
