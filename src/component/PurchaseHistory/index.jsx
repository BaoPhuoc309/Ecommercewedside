import React from "react";
import { Table, Card } from "antd";

import "./style.scss";

const columns = [
  {
    title: "Mã đơn hàng",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "Ngày mua",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Sản phẩm",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Số lượng",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Tổng tiền",
    dataIndex: "totalPrice",
    key: "totalPrice",
  },
];

const data = [
  {
    key: "1",
    orderId: "DH123456",
    date: "01/07/2023",
    product: "Áo thun",
    quantity: 2,
    totalPrice: "200,000 VNĐ",
  },
  {
    key: "2",
    orderId: "DH789012",
    date: "05/07/2023",
    product: "Quần jeans",
    quantity: 1,
    totalPrice: "300,000 VNĐ",
  },
];

const PurchaseHistory = () => {
  return (
    <div className="purchase-history-container">
      <Card className="purchase-history-card">
        <h1 className="purchase-history-title">Lịch sử đơn hàng</h1>
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
};

export default PurchaseHistory;
