import React, { useContext } from 'react'
import { Layout, Menu } from 'antd'
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { DashboardContext } from '@/contexts/DashboardContextProvider'
import MenuWithSubMenu from '@/utils/MenuWithSubMenu'
import { menu } from '@/routes'
import styled from 'styled-components'

const { Sider } = Layout

const LogoWrapper = styled.div`
  height: 32px;
  font-size: 18px;
  color: #fff;
  margin: 16px;
  text-align: center;
  cursor: pointer;
  letter-spacing: 0.2em;
`

const Sidebar: React.FC = () => {
  const { collapsed } = useContext(DashboardContext)
  const { pathname } = useLocation()
  const openKeys = ['/' + pathname.split('/')[1]]
  const selectKey = [pathname]
  const history = useHistory()
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <LogoWrapper onClick={() => history.push('/')}>
        {!collapsed ? '後台管理設定' : '管'}
      </LogoWrapper>
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
