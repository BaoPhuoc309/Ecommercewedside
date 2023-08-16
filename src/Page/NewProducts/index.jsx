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
import { useLocation, useSearchParams } from "react-router-dom";

const NewProducts = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("search");
  const { isLoading, products, pagination, filter, searchKey } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    const { price } = filter;
    if (Array.isArray(price) && price.length === 2) {
      const [minPrice, maxPrice] = price;
      const newFilter = {
        ...filter,
        price_lte: maxPrice,
        price_gte: minPrice,
      };
      delete newFilter.price;
      dispatch(
        fetchAllProduct({
          _page: 1,
          _limit: pagination.limitPerPage,
          ...newFilter,
          q: searchParam,
        })
      );
    } else {
      dispatch(
        fetchAllProduct({
          _page: 1,
          _limit: pagination.limitPerPage,
          filter,
          q: searchParam,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, searchParam]);

  const handleChangePage = (newPage) => {
    dispatch(setNewPage(newPage));
    dispatch(
      fetchAllProduct({
        _page: newPage,
        _limit: pagination.limitPerPage,
        q: searchKey,
      })
    );
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
