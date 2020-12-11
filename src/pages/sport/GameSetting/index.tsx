import Dashboard from '@/components/Dashboard'
import PopupProvider from './context/PopupProvider'
import { Col, Row } from 'antd'
import React from 'react'
import PageHeader from './components/PageHeader'
import AreaTable from './containers/area/AreaTable'
import AreaListPopup from './containers/area/AreaListPopup'
import AreaFormPopup from './containers/area/AreaFormPopup'
import EventTable from './containers/event/EventTable'
import GameTable from './containers/game/GameTable'
import GameDetailTable from './containers/gameDetail/GameDetailTable'
import TeamTable from './containers/team/TeamTable'
import LeagueTable from './containers/league/LeagueTable'
import EventListPopup from './containers/event/EventListPopup'
import EventFormPopup from './containers/event/EventFormPopup'
import GameListPopup from './containers/game/GameListPopup'
import GameFormPopup from './containers/game/GameFormPopup'
import GameDetailListPopup from './containers/gameDetail/GameDetailListPopup'
import GameDetailFormPopup from './containers/gameDetail/GameDetailFormPopup'
import LeagueListPopup from './containers/league/LeagueListPopup'
import LeagueFormPopup from './containers/league/LeagueFormPopup'
import TeamListPopup from './containers/team/TeamListPopup'
import TeamFormPopup from './containers/team/TeamFormPopup'

const GameSettingPage: React.FC = () => {
  return (
    <PopupProvider>
      <Dashboard>
        <PageHeader />
        <Row gutter={16}>
          <Col span={12} className="mb-2">
            <AreaTable />
          </Col>
          <Col span={12} className="mb-2">
            <EventTable />
          </Col>
          <Col span={12} className="mb-2">
            <GameTable />
          </Col>
          <Col span={12} className="mb-2">
            <GameDetailTable />
          </Col>
          <Col span={12} className="mb-2">
            <LeagueTable />
          </Col>
          <Col span={12} className="mb-2">
            <TeamTable />
          </Col>
        </Row>
      </Dashboard>
      <AreaListPopup />
      <AreaFormPopup />
      <EventListPopup />
      <EventFormPopup />
      <GameListPopup />
      <GameFormPopup />
      <GameDetailListPopup />
      <GameDetailFormPopup />
      <LeagueListPopup />
      <LeagueFormPopup />
      <TeamListPopup />
      <TeamFormPopup />
    </PopupProvider>
  )
}

export default GameSettingPage
