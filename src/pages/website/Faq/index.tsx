import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React from 'react'
import PageHeader from './components/PageHeader'
import PopupCategoryCreate from './containers/PopupCategoryCreate'
import PopupCategoryList from './containers/PopupCategoryList'
import PopupCreateForm from './containers/PopupCreateForm'
import TableData from './containers/TableData'
import SearchBar from './containers/SearchBar'
import reducer, { moduleName } from './reducer'
import PopupProvider from './context/PopupProvider'
import PreviewPopup from './containers/PreviewPopup'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
        <PopupCreateForm />
        <PopupCategoryList />
        <PopupCategoryCreate />
        <PreviewPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default Manager
