import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React from 'react'
import PageHeader from './components/PageHeader'

import SearchForm from './containers/SearchForm'
import TableData from './containers/TableData'

import LevelProvider from './context/LevelProvider'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'

import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { LevelManageLevelTable, LevelManageAliasTable } from '../routes'

const Manager: React.FC = () => {
  const { path } = useRouteMatch()
  useReducerInjector(moduleName, reducer)
  return (
    <Dashboard>
      <PopupProvider>
        <LevelProvider>
          <PageHeader />
          <SearchForm />
          <Switch>
            <Route
              path={LevelManageAliasTable.path}
              component={LevelManageAliasTable.component}
            />
            <Route
              path={LevelManageLevelTable.path}
              component={LevelManageLevelTable.component}
            />
          </Switch>
        </LevelProvider>
      </PopupProvider>
    </Dashboard>
  )
}

export default Manager
