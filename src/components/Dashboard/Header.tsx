import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import DashboardContext from '@/contexts/DashboardContext';

const { Header } = Layout;

const Sidebar: React.FC = () => {
  const { collapsed, toggleCollapsed } = useContext(DashboardContext);
  return (
    <Header className="site-header">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: (e) => toggleCollapsed(),
      })}
    </Header>
  );
};

export default Sidebar;
