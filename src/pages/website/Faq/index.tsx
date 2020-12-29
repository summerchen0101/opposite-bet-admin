import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import CategoryCreatePopup from './containers/CategoryCreatePopup'
import CategoryEditPopup from './containers/CategoryEditPopup'
import CategoryListPopup from './containers/CategoryListPopup'
import CreatePopup from './containers/CreatePopup'
import EditPopup from './containers/EditPopup'
import TableData from './containers/TableData'
import SearchBar from './containers/SearchBar'
import reducer, { moduleName } from './reducer'
import PopupProvider from './context/PopupProvider'
import PreviewPopup from './containers/PreviewPopup'
import { useAPIService } from './service'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const { getTableData, getCategoryList } = useAPIService()

  useEffect(() => {
    getCategoryList()
    getTableData()
  }, [])
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
        <PreviewPopup />
        <CategoryCreatePopup />
        <CategoryEditPopup />
        <CategoryListPopup />
        <CreatePopup />
        <EditPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default Manager
