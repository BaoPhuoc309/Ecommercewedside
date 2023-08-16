import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAllOrder } from "../../redux/feature/orderSlice";

const OrderHistoryPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(actFetchAllOrder());
  }, []);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    // ...
    {
      title: "Cart Items",
      dataIndex: "cartItems",
      key: "cartItems",
      render: (cartItems) => (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.imgURL} alt={item.name} style={{ width: 50 }} />
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "name",
      dataIndex: "cartItems",
      key: "image",
      render: (cartItems) => (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "cartItems",
      key: "quantity",
      render: (cartItems) => (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.quantity}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Total Amount",
      dataIndex: "cartItems",
      key: "totalAmount",
      render: (cartItems) =>
        cartItems.reduce(
          (total, item) => total + parseFloat(item.price) * item.quantity,
          0
        ),
    },
    {
      title: "Order Number",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <Button onClick={() => handleViewOrder(record)}>View</Button>
      ),
    },
  ];

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Order History</h1>
      <Table
        columns={columns}
        dataSource={orders}
        rowKey="id"
        loading={isLoading}
      />

      <Modal
        title="Order Details"
        open={modalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
      >
        {selectedOrder && (
          <div>
            <p>Order Number: {selectedOrder.id}</p>
            <p>Full Name: {selectedOrder.fullName}</p>
            <p>Email: {selectedOrder.email}</p>
            <p>Phone Number: {selectedOrder.phoneNumber}</p>
            <p>Home Address: {selectedOrder.homeAddress}</p>
            <p>Street: {selectedOrder.street}</p>
            <p>House Number: {selectedOrder.houseNumber}</p>
            <p>Province: {selectedOrder.province}</p>
            <p>District: {selectedOrder.district}</p>
            <p>Ward: {selectedOrder.ward}</p>
            <p>Cart Items:</p>
            <ul>
              {selectedOrder.cartItems.map((item) => (
                <li key={item.id}>
                  <img
                    src={item.imgURL}
                    alt={item.name}
                    style={{ width: 50 }}
                  />
                  {item.name} - Price: {item.price} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
            <p>
              Total Amount:{" "}
              {selectedOrder.cartItems.reduce(
                (total, item) => total + parseFloat(item.price) * item.quantity,
                0
              )}
            </p>
            <p>Created At: {selectedOrder.createAt}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OrderHistoryPage;
