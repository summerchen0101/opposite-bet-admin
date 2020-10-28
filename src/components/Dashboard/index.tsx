import React, { useState } from 'react';

import { Layout, PageHeader } from 'antd';
import './style.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import DashboardContext from '@/contexts/DashboardContext';

const Component: React.FC = ({ children }) => {
  const [collapsed, changeCollapsed] = useState(false);
  const toggleCollapsed = () => changeCollapsed(!collapsed);
  return (
    <DashboardContext.Provider value={{ collapsed, toggleCollapsed }}>
      <Layout className="dashboard">
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </DashboardContext.Provider>
  );
};

export default Component;
