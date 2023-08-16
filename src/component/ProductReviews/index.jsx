import { Avatar, Button, Card, Divider, Form, Input, List, Rate } from "antd";
import React from "react";
import "./style.scss";
import { FileTextOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { actCreateComment } from "../../redux/feature/commentSlice";

const ProductReviews = ({ currentProduct, comments }) => {
  const dispatch = useDispatch();
  const { userInfor } = useSelector((state) => state.user);

  const onFinish = (values) => {
    const { title, rating, comment } = values;
    const newComments = {
      productId: currentProduct,
      userId: userInfor.id,
      username: userInfor.username,
      title,
      content: comment,
      rating,
      date: new Date().toLocaleString(),
    };

    dispatch(actCreateComment(newComments));
  };

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
          itemLayout="vertical"
          dataSource={comments} // Use the passed-in 'comments' data
          renderItem={(comment) => (
            <Card key={comment.id} className="product-detail__review-card">
              <div className="product-detail__review-entry">
                <div className="product-detail__user-rating">
                  <Rate disabled value={comment.rating} />
                </div>
                <div className="product-detail__user-avatar">
                  <Avatar size={40} icon={<UserOutlined />} />
                </div>
                <div className="product-detail__review-content">
                  <div className="product-detail__user-info">
                    <p className="product-detail__user-name">
                      {comment.username}
                    </p>
                  </div>
                  <p className="product-detail__review-text">
                    {comment.content}
                  </p>
                  <p className="product-detail__review-date">{comment.date}</p>
                </div>
              </div>
            </Card>
          )}
        />
      </div>
    </div>
  );
};

export default ProductReviews;
