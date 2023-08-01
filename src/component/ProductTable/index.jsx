import React from "react";
import { Table, Button, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { actAddToCart, actRemoveFromCart } from "../../redux/feature/cartSlice";
import { DeleteOutlined } from "@ant-design/icons";

const ProductTable = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(actAddToCart({ ...product, quantity: 1 }));
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
          min={1}
          max={10}
          value={product.quantity}
          onChange={(value) => handleAddToCart({ ...product, quantity: value })}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, product) => (
        <div>
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
