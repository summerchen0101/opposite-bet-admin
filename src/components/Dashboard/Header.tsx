import React, { useContext } from 'react';
import { Layout, Menu, Select } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import DashboardContext from '@/contexts/DashboardContext';
import { useDispatch } from 'react-redux';
import { setLanguage } from '@/store/reducer';

const { Header } = Layout;
const { Option } = Select;

const Sidebar: React.FC = () => {
  const { collapsed, toggleCollapsed } = useContext(DashboardContext);
  const dispatch = useDispatch();
  return (
    <Header className="site-header">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: (e) => toggleCollapsed(),
      })}
      <Select
        onChange={(value: string) => dispatch(setLanguage(value))}
        style={{ width: 120 }}
        defaultValue="zh-Hant"
      >
        <Option value="zh-Hant">繁體中文</Option>
        <Option value="en">English</Option>
      </Select>
    </Header>
  );
};

export default Sidebar;
