import { Dashboard } from '@/components'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import ViewPopup from './containers/ViewPopup'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'

const Message: React.FC = () => {
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
        <ViewPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default Message
