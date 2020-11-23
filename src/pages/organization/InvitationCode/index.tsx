import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import { Card, Col, Row } from 'antd'
import React from 'react'
import PageHeader from './components/PageHeader'
import QrcodeBox from './components/QrcodeBox'
import AgentInfo from './containers/AgentInfo'
import ChildLevelInfo from './containers/ChildLevelInfo'
import InvitedLinks from './containers/InvitedLinks'
import reducer, { moduleName } from './reducer'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  return (
    <Dashboard>
      <PageHeader />
      <Row gutter={24}>
        <Col span={10}>
          <AgentInfo />
        </Col>
        <Col span={14}>
          <InvitedLinks />
        </Col>
      </Row>
      <div style={{ marginTop: '25px' }}></div>
      <ChildLevelInfo />
    </Dashboard>
  )
}

export default Manager
