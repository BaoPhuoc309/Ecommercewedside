import React, { useEffect } from "react";
import ProductDetail from "../../component/Productdetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actfetchProductById } from "../../redux/feature/productSlice";
import { Card, Tabs } from "antd";
import ProductReviews from "../../component/ProductReviews";
import { actFetchAllComment } from "../../redux/feature/commentSlice";
import Content7 from "../../component/Content7";

const DetailPage = () => {
  const product = useSelector((state) => state.product.currentProduct);
  const { products, isLoading } = useSelector((state) => state.product);
  const { comments } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(actfetchProductById(params.id));
    dispatch(
      actFetchAllComment({
        productId: params.id,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const items = [
    {
      key: "1",
      label: `DESCRIPTION`,
      children: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.`,
    },
    {
      key: "2",
      label: "REVIEWS",
      children: <ProductReviews comments={comments} currentProduct={product} />,
    },
  ];

  return (
    <div className="container py-4">
      <ProductDetail comments={comments} currentProduct={product} />

      <Card>
        <Tabs defaultActiveKey="1" items={items} />;
      </Card>
      <Content7 />
    </div>
  );
};

export default DetailPage;
