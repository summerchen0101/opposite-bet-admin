import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React from 'react'
import PageHeader from './components/PageHeader'
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
    </Dashboard>
  )
}

export default PromoteActivity
