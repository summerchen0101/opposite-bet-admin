import TabsRecord from '@/components/TabsRecord'
import DashboardContextProvider from '@/contexts/DashboardContextProvider'
import { Layout, message } from 'antd'
import React, { useEffect, useState } from 'react'
import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'
import Wrapper from './Wrapper'
import { useHistory, useLocation } from 'react-router-dom'

const Dashboard: React.FC = ({ children }) => {
  const location = useLocation()
  return (
    <DashboardContextProvider>
      <Wrapper>
        <Sidebar />
        <Layout>
          <Header />
          {location.pathname !== '/' && <TabsRecord />}
          <Content>{children}</Content>
        </Layout>
      </Wrapper>
    </DashboardContextProvider>
  )
}

export default Dashboard
