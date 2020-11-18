import DashboardContext from '@/contexts/DashboardContext'
import { setLanguage, toggleLoginStatus } from '@/store/reducer'
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Layout, Select } from 'antd'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import IconLink from '../IconLink'

const { Header } = Layout
const { Option } = Select

const Sidebar: React.FC = () => {
  const { collapsed, toggleCollapsed } = useContext(DashboardContext)
  const dispatch = useDispatch()
  const handleLogout = async () => {
    sessionStorage.removeItem('token')
    dispatch(toggleLoginStatus(false))
  }
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
      <IconLink
        className="logout"
        icon={<LogoutOutlined />}
        onClick={handleLogout}
      />
    </Header>
  )
}

export default Sidebar
