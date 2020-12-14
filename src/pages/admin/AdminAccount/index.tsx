import Dashboard from '@/components/Dashboard'
import { useReducerInjector, useTabRecord } from '@/utils/hooks'
import React from 'react'
import { AdminAccount } from '../routes'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import EditPopup from './containers/EditPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'

const AdminAccountPage: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  useTabRecord(AdminAccount)
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
        <CreatePopup />
        <EditPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default AdminAccountPage
