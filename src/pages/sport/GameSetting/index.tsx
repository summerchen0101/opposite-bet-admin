import Dashboard from '@/components/Dashboard'
import PopupProvider from './context/PopupProvider'
import { Col, Row } from 'antd'
import React from 'react'
import PageHeader from './components/PageHeader'
import AreaTable from './containers/AreaTable'
import AreaListPopup from './containers/AreaListPopup'
import AreaFormPopup from './containers/AreaFormPopup'

const infoList = [
  { title: '地區', code: 'area' },
  { title: '場次', code: 'event' },
  { title: '玩法', code: 'game' },
  { title: '玩法細項', code: 'gameDetail' },
  { title: '聯盟', code: 'league' },
  { title: '隊伍', code: 'team' },
]
const GameSettingPage: React.FC = () => {
  return (
    <PopupProvider>
      <Dashboard>
        <PageHeader />
        <Row gutter={16}>
          <Col span={12} className="mb-2">
            <AreaTable />
          </Col>
        </Row>
      </Dashboard>
      <AreaListPopup />
      <AreaFormPopup />
    </PopupProvider>
  )
}

export default GameSettingPage
