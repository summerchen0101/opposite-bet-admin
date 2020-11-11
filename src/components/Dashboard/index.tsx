import TabsRecord from '@/components/TabsRecord'
import DashboardContext from '@/contexts/DashboardContext'
import { Layout } from 'antd'
import React, { useState } from 'react'
import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'
import Wrapper from './Wrapper'

const Dashboard: React.FC = ({ children }) => {
  const [collapsed, changeCollapsed] = useState(false)
  const toggleCollapsed = () => changeCollapsed(!collapsed)
  return (
    <DashboardContext.Provider value={{ collapsed, toggleCollapsed }}>
      <Wrapper>
        <Sidebar />
        <Layout>
          <Header />
          <Content>
            <TabsRecord />
            <div className="page-content">{children}</div>
          </Content>
        </Layout>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export default Dashboard
