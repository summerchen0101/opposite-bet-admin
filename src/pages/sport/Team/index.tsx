import Dashboard from '@/components/Dashboard'
import PopupProvider from './context/PopupProvider'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/CreatePopup'
import PopupEditForm from './containers/EditPopup'
import TableData from './containers/TableData'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'
import SearchBar from './containers/SearchBar'
import SearchProvider from './context/SearcProvider'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)

  return (
    <Dashboard>
      <SearchProvider>
        <PopupProvider>
          <PageHeader />
          <SearchBar />
          <TableData />
          <PopupCreateForm />
          <PopupEditForm />
        </PopupProvider>
      </SearchProvider>
    </Dashboard>
  )
}

export default Manager
