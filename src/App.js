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
import ProfiledPage from "./Page/ProfieldPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayOut />}>
            <Route path={ROUTER_APP.HOME} element={<Home />} />
            <Route path={ROUTER_APP.NEW_PRODUCT} element={<NewProducts />} />
            <Route path={ROUTER_APP.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={ROUTER_APP.REGISTER_PAGE} element={<RegisterPage />} />
          </Route>

          <Route element={<ProfileLayout />}>
            <Route path={ROUTER_APP.PROFILE} element={<ProfiledPage />} />
          </Route>

          <Route path="/" element={<Navigate to={ROUTER_APP.HOME} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
