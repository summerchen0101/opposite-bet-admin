import React from 'react';

import { Layout } from 'antd';
const { Content } = Layout;

const Component: React.FC = ({ children }) => {
  return <Content className="site-content">{children}</Content>;
};

export default Component;
