import React, { useEffect } from "react";
import ProductDetail from "../../component/Productdetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actfetchProductById } from "../../redux/feature/productSlice";

const DetailPage = () => {
  const product = useSelector((state) => state.product.currentProduct);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(actfetchProductById(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  console.log(params);

  return (
    <div className="container">
      <ProductDetail currentProduct={product} />
    </div>
  );
};

export default DetailPage;
