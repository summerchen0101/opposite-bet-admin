import { Dashboard } from '@/components'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import AliasAccountPopup from './containers/AliasAccountPopup'
import CreatePopup from './containers/CreatePopup'
import EditPopup from './containers/EditPopup'
import InvitedFormPopup from './containers/InvitatedFormPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'

const MarqueePage: React.FC = () => {
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
        <InvitedFormPopup />
        <AliasAccountPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default MarqueePage
