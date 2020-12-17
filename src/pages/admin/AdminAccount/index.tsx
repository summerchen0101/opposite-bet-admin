import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import EditPopup from './containers/EditPopup'
import PwPopup from './containers/PwPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'

const AdminAccountPage: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const { getTableData, getOptions } = useAPIService()
  useEffect(() => {
    Promise.all([getTableData(), getOptions()])
  }, [])
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
        <CreatePopup />
        <EditPopup />
        <PwPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default AdminAccountPage
