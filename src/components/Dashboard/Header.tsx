import { DashboardContext } from '@/contexts/DashboardContextProvider'
import { usePopup } from '@/contexts/PopupContextProvider'
import { doLogout, setLanguage, setLogout } from '@/store/reducer'
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Button, Layout, Popover, Select, Space } from 'antd'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import IconLink from '../IconLink'

const { Header } = Layout
const { Option } = Select

const Sidebar: React.FC = () => {
  const { collapsed, toggleCollapsed } = useContext(DashboardContext)
  const dispatch = useDispatch()
  const handleLogout = (e) => dispatch(doLogout())
  const { setVisible: setVisible_changePw } = usePopup('changePw')
  const { setVisible: setVisible_bettingLimit } = usePopup('bettingLimit')
  const { setVisible: setVisible_loginHistory } = usePopup('loginHistory')
  const history = useHistory()
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
      <Space className="float-right mr-2">
        <Popover
          content={
            <div style={{ width: '100px' }}>
              <Button
                block
                className="mb-1"
                onClick={(e) => setVisible_changePw(true)}
              >
                修改密碼
              </Button>
              <Button
                block
                className="mb-1"
                onClick={(e) => setVisible_loginHistory(true)}
              >
                登入歷程
              </Button>
              <Button block onClick={(e) => setVisible_bettingLimit(true)}>
                個人限額
              </Button>
            </div>
          }
        >
          <Button type="link">summer</Button>
        </Popover>

        <IconLink
          className="logout"
          label="登出"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        />
      </Space>
    </Header>
  )
}

export default Sidebar
