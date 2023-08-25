import React, { useRef, useState } from "react";
import { Button, Card, Checkbox, Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setBrandFilter, updateFilter } from "../../redux/feature/productSlice";
import "./style.scss";
import { BarsOutlined, CloseOutlined } from "@ant-design/icons";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.filter);
  const [priceRange, setPriceRange] = useState([
    filter.price[0],
    filter.price[1],
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const typingTimeoutRef = useRef(null);

  const brands = [
    { label: "Laptop", value: 1 },
    { label: "iPhone", value: 2 },
    { label: "HeadPhone", value: 3 },
    { label: "Speaker", value: 4 },
    { label: "Watch", value: 5 },
  ];

  const onChangePrice = (value) => {
    // Thực hiện update setPriceRange
    setPriceRange(value);
    // Thực hiện debounce sau 300ms
    // => dispatchUpdate filter
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      // Sau khi hết 300ms, thực hiện dispatch action updateFilter
      dispatch(
        updateFilter({
          ...filter,
          price: value,
        })
      );
    }, 300);
  };

  const onChangeBrand = (checkedValue) => {
    dispatch(setBrandFilter(checkedValue));
  };

  return (
    <div className="filter__container py-4">
      <div className="filter__wrapper">
        <ul className={`nav-links  ${isSidebarOpen ? "show-nav-links" : ""}`}>
          <Button
            onClick={() => setIsSidebarOpen(false)}
            className="navbar-hide-btn"
          >
            <CloseOutlined />
          </Button>

          <div className="filter__item ">
            <Card
              className="text-center"
              title="Lọc theo giá"
              style={{ width: 250 }}
            >
              <div className="flex justify-between">
                <h3>Tối thiểu: ${priceRange[0]}</h3>
                <h3>Tối đa: ${priceRange[1]}</h3>
              </div>
              <Slider
                range
                value={[priceRange[0], priceRange[1]]}
                onChange={onChangePrice}
                min={0}
                max={2000.0}
              />
            </Card>
          </div>
          <div className="filter__item  py-4">
            <Card
              className="text-center"
              title="Lọc theo hãng"
              style={{ width: 250 }}
            >
              <Checkbox.Group
                className="flex flex-column mx-2"
                options={brands}
                value={filter.brandsId}
                onChange={onChangeBrand}
              />
            </Card>
          </div>
        </ul>
        <Button
          onClick={() => setIsSidebarOpen(true)}
          className="navbar-shown-btn"
        >
          <BarsOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Filter;
