import { Dashboard } from '@/components'
import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import TableData from './containers/TableData'
import SearchBar from './containers/SearchBar'
import ModuleProvider from './context/ModuleProvider'
import PopupProvider from './context/PopupProvider'
import { InMail } from '../routes'

const Manager: React.FC = () => {
  return (
    <Dashboard>
      <ModuleProvider>
        <PopupProvider>
          <PageHeader />
          <Switch>
            <Route path={`${InMail.path}/:type?`}>
              <SearchBar />
              <TableData />
            </Route>
          </Switch>
          <PopupCreateForm />
        </PopupProvider>
      </ModuleProvider>
    </Dashboard>
  )
}

export default Manager
