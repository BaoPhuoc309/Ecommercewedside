import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actfetchProductById,
  fetchAllProduct,
  setNewPage,
  updateFilter,
} from "../../redux/feature/productSlice";
import { Pagination, Spin } from "antd";
import Product from "../../component/Product";
import Filter from "../../component/Fillter";
import { useSearchParams } from "react-router-dom";
import { convertPriceToNumber } from "../../utility/convertPriceToNumber";

const NewProducts = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("search");
  console.log(searchParam, "Search params: ");
  const { isLoading, products, pagination, filter, searchKey } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    const { price } = filter;
    const [minPriceStr, maxPriceStr] = price;

    const minPrice = convertPriceToNumber(minPriceStr);
    const maxPrice = convertPriceToNumber(maxPriceStr);

    console.log(minPrice, maxPrice, "price: ");

    const newFilter = {
      ...filter,
      price_gte: minPrice, // Giá trị tối thiểu
      price_lte: maxPrice, // Giá trị tối đa
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
