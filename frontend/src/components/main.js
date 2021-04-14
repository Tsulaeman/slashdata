import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import AppHeader from './header';
import AppFooter from './footer';

const { Content } = Layout;

const Main = (props) => {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          { props.children }
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default Main;