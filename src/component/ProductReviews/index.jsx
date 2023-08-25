import {
  Space,
  Button,
  Card,
  Divider,
  Form,
  Input,
  List,
  Rate,
  Avatar,
} from "antd";
import React from "react";
import "./style.scss";
import {
  FileTextOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { actCreateComment } from "../../redux/feature/commentSlice";

const ProductReviews = ({ currentProduct, comments }) => {
  const dispatch = useDispatch();
  const { userInfor } = useSelector((state) => state.user);

  const onFinish = (values) => {
    const { title, rating, comment } = values;
    const newComments = {
      productId: currentProduct.id,
      userId: userInfor.id,
      username: userInfor.username,
      title,
      content: comment,
      rating,
      date: new Date().toLocaleString(),
    };

    dispatch(actCreateComment(newComments));
  };

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div className="product-detail__reviews">
      <div className="product-detail__write-review">
        <h3 className="product-detail__write-review-title">
          Write Your Own Review
        </h3>
        <p className="product-detail__write-review-description">
          Only registered users can write reviews
        </p>
        <Form
          onFinish={onFinish}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          className="product-detail__form"
        >
          <Form.Item
            name="title"
            label="Review title:"
            className="product-detail__form-item"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="comment"
            label="Review text:"
            className="product-detail__form-item"
          >
            <Input.TextArea maxLength={100} />
          </Form.Item>

          <Form.Item
            name="rating"
            label="Rating:"
            className="product-detail__form-item"
          >
            <Rate />
          </Form.Item>
          <Form.Item className="product-detail__form-item">
            <Button
              className="product-detail__submit-button text-center"
              type="primary"
              htmlType="submit"
            >
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Divider>
        <FileTextOutlined />
      </Divider>
      <div className="product-detail__existing-reviews">
        <h3 className="product-detail__reviews-title">Existing reviews</h3>
        <List
          size="large"
          itemLayout="vertical"
          dataSource={comments} // Sử dụng dữ liệu 'comments' được truyền vào
          renderItem={(comment) => (
            <List.Item
              key={comment.id}
              className="product-detail__review-card"
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  alt="product-detail"
                  src={currentProduct.imgURL} // Thay "product.image" bằng đường dẫn ảnh thực tế trong sản phẩm
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar size={40} icon={<UserOutlined />} />}
                title={<a href={comment.href}>{comment.username}</a>}
                description={comment.title}
              />
              {comment.content}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ProductReviews;
