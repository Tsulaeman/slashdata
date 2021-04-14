import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

/**
 * This is the apps header, we can do all header related logic here
 * @returns
 */
const AppHeader = () => {
  const routes = {
    '/': '1',
    '/view': '2'
  };
  const { pathname } = useLocation();
  return (
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[routes[pathname]]}>
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/view">View</Link></Menu.Item>
        </Menu>
      </Header>
    )
}

export default AppHeader;