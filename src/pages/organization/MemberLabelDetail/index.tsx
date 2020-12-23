import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React from 'react'
import SearchBar from '../MemberLabel/containers/SearchBar'
import PageHeader from './components/PageHeader'
import TableData from './containers/TableData'
import reducer, { moduleName } from './reducer'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  return (
    <Dashboard>
      <PageHeader />
      <SearchBar />
      <TableData />
    </Dashboard>
  )
}

export default Manager
