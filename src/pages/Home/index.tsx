import React from 'react'
import Dashboard from '@/components/Dashboard'
import ColorRate from './ColorRate'
import { Statistic, Col, Row, Divider } from 'antd'

const Component: React.FC = () => (
  <Dashboard>
    <Row gutter={16} style={{ margin: '30px 20px' }}>
      <Col span={16}>
        <h5>輸贏結果</h5>
        <Row gutter={16}>
          <Col span={6}>
            <Statistic title="今日輸贏" value={112893} />
            <ColorRate>3.3</ColorRate>
          </Col>
          <Col span={6}>
            <Statistic title="本週輸贏" value={112893} />
            <ColorRate>-0.3</ColorRate>
          </Col>
          <Col span={6}>
            <Statistic title="本月輸贏" value={112893} />
            <ColorRate>1.5</ColorRate>
          </Col>
          <Col span={6}>
            <Statistic title="上線人數" value={112} />
          </Col>
        </Row>
      </Col>
      <Col span={8}>
        <Row gutter={16} style={{ marginTop: 32 }}>
          <Col span={12}>
            <Statistic title="移桶審核" value={4} />
          </Col>
          <Col span={12}>
            <Statistic title="結帳審核" value={0} />
          </Col>
        </Row>
      </Col>
    </Row>
  </Dashboard>
)

export default Component
