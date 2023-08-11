import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProduct,
  setNewPage,
  updateFilter,
} from "../../redux/feature/productSlice";
import { Pagination, Spin } from "antd";
import Product from "../../component/Product";
import Filter from "../../component/Fillter";

const NewProducts = () => {
  const dispatch = useDispatch();

  const { isLoading, products, pagination, filter } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    const { price, brandsId } = filter;
    if (Array.isArray(price) && price.length === 2) {
      const [minPrice, maxPrice] = price;
      console.log(brandsId);
      const newFilter = {
        ...filter,
        price_lte: maxPrice,
        price_gte: minPrice,
      };
      delete newFilter.price;
      dispatch(
        fetchAllProduct({
          _page: pagination.currentPage,
          _limit: pagination.limitPerPage,
          ...newFilter,
        })
      );
    } else {
      dispatch(
        fetchAllProduct({
          _page: pagination.currentPage,
          _limit: pagination.limitPerPage,
          filter,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.currentPage, filter]);

  const handleChangePage = (newPage) => {
    dispatch(setNewPage(newPage));
  };

  return (
    <div className="container flex">
      <div>
        <Filter />
      </div>
      <div className="new__product flex justify-between flex-column">
        {isLoading && <Spin />}
        {products.length === 0 ? (
          <div>No Tasks</div>
        ) : (
          <Product products={products} />
        )}

        <Pagination
          defaultPageSize={pagination.limitPerPage}
          current={pagination.currentPage}
          total={pagination.total}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default NewProducts;
