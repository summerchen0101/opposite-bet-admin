import { Dashboard } from '@/components'
import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import ViewRecievePopup from './containers/ViewRecievePopup'
import TableData from './containers/TableData'
import SearchBar from './containers/SearchBar'
import ModuleProvider from './context/ModuleProvider'
import PopupProvider from './context/PopupProvider'
import { InMail } from '../routes'
import ViewSentPopup from './containers/ViewSendPopup'

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
          <CreatePopup />
          <ViewRecievePopup />
          <ViewSentPopup />
        </PopupProvider>
      </ModuleProvider>
    </Dashboard>
  )
}

export default Manager
