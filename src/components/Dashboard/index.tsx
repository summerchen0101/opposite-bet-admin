import TabsRecord from '@/components/TabsRecord'
import DashboardContext from '@/contexts/DashboardContext'
import { Layout, message } from 'antd'
import React, { useEffect, useState } from 'react'
import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'
import Wrapper from './Wrapper'
import { useHistory, useLocation } from 'react-router-dom'

const Dashboard: React.FC = ({ children }) => {
  const [collapsed, changeCollapsed] = useState(false)
  const toggleCollapsed = () => changeCollapsed(!collapsed)
  const location = useLocation()
  return (
    <DashboardContext.Provider value={{ collapsed, toggleCollapsed }}>
      <Wrapper>
        <Sidebar />
        <Layout>
          <Header />
          <Content>
            {location.pathname !== '/' && <TabsRecord />}
            <div className="page-content">{children}</div>
          </Content>
        </Layout>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export default Dashboard
