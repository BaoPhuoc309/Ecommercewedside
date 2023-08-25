import React from "react";
import { Layout, theme } from "antd";
import HeaderComponent from "../../component/HeaderComponent";
import FooterComponent from "../../component/FooterComponent";
import "./style.scss";
import Profile from "../../component/Profile/Profile";
import { Outlet } from "react-router-dom";
import ProfilePage from "../../Page/ProfilePage";
const { Header, Content, Footer } = Layout;

const ProfileLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="mainLayout bg-white">
      <Header>
        <HeaderComponent />
      </Header>
      <Content className="h-100">
        <div
          className="contentWrapper"
          style={{ backgroundColor: colorBgContainer }}
        >
          <div className="profileWrapper">
            <ProfilePage />
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </Content>
      <Footer className="footer">
        <FooterComponent />
      </Footer>
    </Layout>
  );
};

export default ProfileLayout;
