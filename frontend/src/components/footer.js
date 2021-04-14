import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

/**
 * The footer for the entire app, footer related logic can be done here
 * @returns
 */
const AppFooter = () => {
  return (
    <Footer style={ { textAlign: 'center' } }>Slashdata demo App</Footer>
  )
}

export default AppFooter;