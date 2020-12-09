import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React from 'react'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import SearchForm from './containers/SearchForm'
import TableData from './containers/TableData'
import LevelProvider from './context/LevelProvider'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)

  return (
    <Dashboard>
      <PopupProvider>
        <LevelProvider>
          <PageHeader />
          <SearchForm />
          <TableData />
          <CreatePopup />
        </LevelProvider>
      </PopupProvider>
    </Dashboard>
  )
}

export default Manager
