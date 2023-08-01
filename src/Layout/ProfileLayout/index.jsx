import React from "react";
import { Layout, theme } from "antd";
import HeaderComponent from "../../component/HeaderComponent";
import FooterComponent from "../../component/FooterComponent";
import "./style.scss";
import Profile from "../../component/Profile/Profile";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const ProfileLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="mainLayout bg-white">
      <Header>
        <HeaderComponent />
      </Header>
      <Content
        className="h-100"
        style={{
          padding: 24,
        }}
      >
        <Layout
          style={{
            padding: "24px",
            background: colorBgContainer,
            height: 500,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={400}
          >
            <Profile />
          </Sider>
          <Content
            style={{
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer className="footer">
        <FooterComponent />
      </Footer>
    </Layout>
  );
};
export default ProfileLayout;
