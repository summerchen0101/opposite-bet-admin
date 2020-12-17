import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React from 'react'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import reducer, { moduleName } from './reducer'

const PromoteActivity: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  return (
    <Dashboard>
      <PageHeader />
      <SearchBar />
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default PromoteActivity
