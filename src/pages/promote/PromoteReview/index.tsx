import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React from 'react'
import PageHeader from './components/PageHeader'
import RecievePopup from './containers/RecievePopup'
import RejectPopup from './containers/RejectPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'

const PromoteActivity: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
        <RecievePopup />
        <RejectPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default PromoteActivity
