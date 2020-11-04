import React, { useContext } from 'react'
import { Layout, Menu } from 'antd'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import DashboardContext from '@/contexts/DashboardContext'
import MenuWithSubMenu from '@/utils/MenuWithSubMenu'
import { menu } from '@/routes'

const { Sider } = Layout

const Sidebar: React.FC = () => {
  const { collapsed } = useContext(DashboardContext)
  const { pathname } = useLocation()
  const openKeys = ['/' + pathname.split('/')[1]]
  const selectKey = [pathname]
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
  )
}

export default Sidebar
