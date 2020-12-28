import Dashboard from '@/components/Dashboard'
import { Col, Divider, Row } from 'antd'
import React from 'react'
import PageHeader from './components/PageHeader'
import AreaTable from './containers/area/AreaTable'
import SportTable from './containers/sport/SportTable'
import DataProvider from './context/DataProvider'
import PopupProvider from './context/PopupProvider'

const GameSettingPage: React.FC = () => {
  return (
    <DataProvider>
      <PopupProvider>
        <Dashboard>
          <PageHeader />
          <Row gutter={16}>
            <Col span={12} className="mb-2">
              <AreaTable />
              <Divider />
            </Col>
            <Col span={12} className="mb-2">
              <SportTable />
              <Divider />
            </Col>
          </Row>
        </Dashboard>
      </PopupProvider>
    </DataProvider>
  )
}

export default GameSettingPage
