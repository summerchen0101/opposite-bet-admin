import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import DashboardContext from '@/contexts/DashboardContext';
import MenuWithSubMenu from '@/utils/MenuWithSubMenu';
import * as mPath from '@/lib/menuPath';

const { Sider } = Layout;

const menu = [
  {
    path: '/account',
    label: '帳號管理',
    iconComp: UserOutlined,
    children: [
      { path: mPath.ACCOUNT_MANAGER, label: '管理員管理' },
      { path: mPath.ACCOUNT_ONLINE, label: '在線人員' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { collapsed } = useContext(DashboardContext);
  const { pathname } = useLocation();
  const openKeys = ['/' + pathname.split('/')[1]];
  const selectKey = [pathname];
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">{!collapsed ? '新體育後台' : '體'}</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectKey}
        defaultOpenKeys={openKeys}
      >
        {menu.map((m) => MenuWithSubMenu(m))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
