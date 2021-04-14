import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import PropTypes from 'prop-types';

import AppHeader from './header';
import AppFooter from './footer';

const { Content } = Layout;

/**
 * This is the main display page template used for quickly
 * addding your specific view into the apps layout and styling
 * @param {object} props The properties from HOC
 * @returns
 */
const Main = (props) => {
  return (
    <Layout className="layout">
      <AppHeader/>
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

Main.propTypes = {
  props: PropTypes.object
}

export default Main;