import React from "react";
import { Table, Button, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  actRemoveFromCart,
  actUpdatequantity,
} from "../../redux/feature/cartSlice";
import { DeleteOutlined } from "@ant-design/icons";

const ProductTable = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(actUpdatequantity({ id: id, quantity: quantity }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(actRemoveFromCart(productId));
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "imgURL",
      key: "imgURL",
      render: (imgURL) => (
        <img style={{ width: 50, height: 50 }} src={imgURL} alt="" />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, product) => (
        <InputNumber
          key={product.id}
          min={1}
          max={10}
          value={product.quantity}
          onChange={(value) => handleUpdateQuantity(product.id, value)}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, product) => (
        <div key={product.id}>
          <Button
            type="danger"
            onClick={() => handleRemoveFromCart(product.id)}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table style={{ width: 900 }} columns={columns} dataSource={cartItems} />
  );
};

export default ProductTable;
