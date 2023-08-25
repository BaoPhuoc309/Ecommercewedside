import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTER_APP } from "./constant/Router";
import Home from "./Page/Home";

import DefaultLayOut from "./Layout/DefaultLayout";
import "./App.scss";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/RegisterPage";
import NewProducts from "./Page/NewProducts";
import ProfileLayout from "./Layout/ProfileLayout";
import ProfiledPage from "./Page/HistoryPage";
import ChangeInfo from "./component/ChangeInfo";

import HistoryPage from "./Page/HistoryPage";

import DetailPage from "./Page/DetailPage";

import ShoppingCart from "./Page/shoppingCart";
import { GlobalHistory } from "./utility/globalHistory";
import CheckoutPage from "./Page/CheckoutPage";
import SuccessPage from "./Page/SuccessPage";
import ChangePassword from "./component/ChangePassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalHistory />
        <Routes>
          <Route element={<DefaultLayOut />}>
            <Route path={ROUTER_APP.HOME} element={<Home />} />
            <Route path={ROUTER_APP.NEW_PRODUCT} element={<NewProducts />} />
            <Route path={ROUTER_APP.DETAIL} element={<DetailPage />} />
            <Route path={ROUTER_APP.ADDCART} element={<ShoppingCart />} />
            <Route path={ROUTER_APP.REGISTER_PAGE} element={<RegisterPage />} />
            <Route path={ROUTER_APP.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={ROUTER_APP.CHECKOUT} element={<CheckoutPage />} />
            <Route
              path={ROUTER_APP.SUCCESSCHECKOUT}
              element={<SuccessPage />}
            />
          </Route>

          <Route element={<ProfileLayout />}>
            <Route path={ROUTER_APP.PROFILE} element={<ProfiledPage />} />
            <Route path={ROUTER_APP.CHANGEINFO} element={<ChangeInfo />} />
            <Route
              path={ROUTER_APP.CHANGEPASSWORD}
              element={<ChangePassword />}
            />
            <Route path={ROUTER_APP.HISTORY} element={<HistoryPage />} />
          </Route>

          <Route path="/" element={<Navigate to={ROUTER_APP.HOME} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
