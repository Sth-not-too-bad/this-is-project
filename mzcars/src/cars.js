import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import {withRouter} from 'react-router-dom'

import { Layout, Menu,  Icon } from "antd";
const { Header, Content,  Sider } = Layout;
const { SubMenu } = Menu;

let navData = [
  { name: "首页", path: "/cars/home" },
  { name: "客户管理", path: "/cars/customers" },
  {
    name: "数据报表",
    children: [
      { name: "线索客流", path: "/cars/report/leads" },
      { name: "订车交车", path: "/cars/report/buy" }
    ]
  },
  {
    name: "门店管理",
    children: [
      { name: "车型报价", path: "/cars/store/list" },
      { name: "名片图片", path: "/cars/store/card" },
      { name: "门店头图", path: "/cars/store/logo" }
    ]
  },
  {
    name: "个人设置",
    children: [
      { name: "人员管理", path: "/cars/set/employee" },
      { name: "角色权限管理", path: "/cars/set/roles" }
    ]
  }
];

class Cars extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  jump =( path )=> {
      console.log(path)
      console.log(this.props.history)
    this.props.history.push(path);
  };

  renderItem(data) {
    return data.map((item, index) => {
      if (item.children) {
        return (
          <SubMenu title={item.name}>{this.renderItem(item.children)}</SubMenu>
        );
      } else {
        return (
          <Menu.Item onClick={this.jump.bind(this,item.path)}>
            <Icon type="pie-chart" /> <span>{item.name}</span>{" "}
          </Menu.Item>
        );
      }
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsed={this.state.collapsed}>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            {this.renderItem(navData)}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>

          <Content style={{ margin: '0 16px' }}>
             {this.props.children}
            </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Cars);
