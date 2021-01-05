import { Dashboard } from '@/components'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import ContactCreatePopup from './containers/ContactCreatePopup'
import ContactEditPopup from './containers/ContactEditPopup'
import CreatePopup from './containers/CreatePopup'
import EditPopup from './containers/EditPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import WhiteListPopup from './containers/WhiteListPopup'
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
        <ContactCreatePopup />
        <ContactEditPopup />
        <WhiteListPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default MarqueePage
