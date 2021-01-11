import { Dashboard } from '@/components'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import DetailPopup from './containers/DetailPopup'
import EditPopup from './containers/EditPopup'
import GroupListPopup from './containers/GroupListPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'

const GameReportPage: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const { getTableData } = useAPIService()

  useEffect(() => {
    getTableData()
  }, [])
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
        <CreatePopup />
        <EditPopup />
        <DetailPopup />
        <GroupListPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default GameReportPage
