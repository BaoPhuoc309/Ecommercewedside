import React from "react";
import "antd/dist/reset.css";
import { Layout } from "antd";
import HeaderComponent from "../../component/HeaderComponent";
import "./style.scss";
import { Outlet } from "react-router-dom";
import FooterComponent from "../../component/FooterComponent";

const { Header, Content, Footer } = Layout;

const DefaultLayOut = () => {
  return (
    <Layout className="mainLayout bg-white">
      <Header>
        <HeaderComponent />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer className="footer">
        <FooterComponent />
      </Footer>
    </Layout>
  );
};

export default DefaultLayOut;
