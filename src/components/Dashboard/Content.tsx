import React, { useState } from 'react';

import { Layout } from 'antd';
const { Content } = Layout;

const Component: React.FC = ({ children }) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        marginTop: 80,
        overflowY: 'auto',
      }}
    >
      {children}
    </Content>
  );
};

export default Component;
