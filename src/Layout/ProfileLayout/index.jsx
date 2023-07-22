import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderComponent from "../../component/HeaderComponent";
import FooterComponent from "../../component/FooterComponent";
import "./style.scss";
import Profile from "../../component/Profile/Profile";
import ProfiledPage from "../../Page/ProfieldPage";
const { Header, Content, Footer, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="mainLayout">
      <Header>
        <HeaderComponent />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
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
              padding: "0 24px",
              minHeight: 300,
            }}
          >
            <ProfiledPage />
          </Content>
        </Layout>
      </Content>
      <Footer className="footer">
        <FooterComponent />
      </Footer>
    </Layout>
  );
};
export default App;
