import React, { useState } from 'react';

import { Layout, PageHeader } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import DashboardContext from '@/contexts/DashboardContext';
import Wrapper from './Wrapper';
import TabsRecord from '@/components/TabsRecord';

const Component: React.FC = ({ children }) => {
  const [collapsed, changeCollapsed] = useState(false);
  const toggleCollapsed = () => changeCollapsed(!collapsed);
  return (
    <DashboardContext.Provider value={{ collapsed, toggleCollapsed }}>
      <Wrapper>
        <Sidebar />
        <Layout>
          <Header />
          <Content>
            <TabsRecord />
            {children}
          </Content>
        </Layout>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export default Component;
