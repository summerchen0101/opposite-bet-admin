import Dashboard from '@/components/Dashboard'
import { Col, Divider, Row } from 'antd'
import React from 'react'
import PageHeader from './components/PageHeader'
import AreaFormPopup from './containers/area/AreaFormPopup'
import AreaListPopup from './containers/area/AreaListPopup'
import AreaTable from './containers/area/AreaTable'
import CategoryFormPopup from './containers/category/CategoryFormPopup'
import CategoryListPopup from './containers/category/CategoryListPopup'
import CategoryTable from './containers/category/CategoryTable'
import EventFormPopup from './containers/event/EventFormPopup'
import EventListPopup from './containers/event/EventListPopup'
import EventTable from './containers/event/EventTable'
import GameFormPopup from './containers/game/GameFormPopup'
import GameListPopup from './containers/game/GameListPopup'
import GameTable from './containers/game/GameTable'
import GameDetailFormPopup from './containers/gameDetail/GameDetailFormPopup'
import GameDetailListPopup from './containers/gameDetail/GameDetailListPopup'
import LeagueFormPopup from './containers/league/LeagueFormPopup'
import LeagueListPopup from './containers/league/LeagueListPopup'
import LeagueTable from './containers/league/LeagueTable'
import TeamFormPopup from './containers/team/TeamFormPopup'
import TeamListPopup from './containers/team/TeamListPopup'
import TeamTable from './containers/team/TeamTable'
import PopupProvider from './context/PopupProvider'

const GameSettingPage: React.FC = () => {
  return (
    <PopupProvider>
      <Dashboard>
        <PageHeader />
        <Row gutter={16}>
          <Col span={12} className="mb-2">
            <AreaTable />
            <Divider />
            <LeagueTable />
            <Divider />
            <TeamTable />
          </Col>
          <Col span={12} className="mb-2">
            <CategoryTable />
            <Divider />
            <EventTable />
            <Divider />
            <GameTable />
          </Col>
        </Row>
      </Dashboard>
      <AreaListPopup />
      <AreaFormPopup />
      <CategoryListPopup />
      <CategoryFormPopup />
      <AreaFormPopup />
      <EventListPopup />
      <EventFormPopup />
      <GameListPopup />
      <GameFormPopup />
      <GameDetailFormPopup />
      <GameDetailListPopup />
      <LeagueListPopup />
      <LeagueFormPopup />
      <TeamListPopup />
      <TeamFormPopup />
    </PopupProvider>
  )
}

export default GameSettingPage
