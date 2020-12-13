import Dashboard from '@/components/Dashboard'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import PageHeader from './components/PageHeader'
import OrderTableData from './containers/OrderTableData'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import LevelProvider from './context/LevelProvider'
import PopupProvider from './context/PopupProvider'

const Manager: React.FC = () => {
  const { path, url } = useRouteMatch()
  return (
    <Dashboard>
      <LevelProvider>
        <PopupProvider>
          <PageHeader />
          <SearchBar />
          <Switch>
            <Route path={`${path}/order/:level?`}>
              <OrderTableData />
            </Route>
            <Route path={`${path}/:level?`}>
              <TableData />
            </Route>
          </Switch>
        </PopupProvider>
      </LevelProvider>
    </Dashboard>
  )
}

export default Manager
