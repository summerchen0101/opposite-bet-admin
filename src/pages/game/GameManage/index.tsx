import Dashboard from '@/components/Dashboard'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageHeader from './components/PageHeader'
import CreateFormPopup from './containers/CreateFormPopup'
import GameDetailPopup from './containers/GameDetailPopup'
import GameOrdersPopup from './containers/GameOrdersPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import { GameManage, GameControlPanel } from '../routes'

const GameManagePage: React.FC = () => {
  return (
    <>
      <PopupProvider>
        <Switch>
          <Route
            path={GameControlPanel.path}
            component={GameControlPanel.component}
          />
          <Route path={GameManage.path}>
            <Dashboard>
              <PageHeader />
              <SearchBar />
              <TableData />
            </Dashboard>
          </Route>
        </Switch>
        <CreateFormPopup />
        <GameDetailPopup />
        <GameOrdersPopup />
      </PopupProvider>
    </>
  )
}

export default GameManagePage
