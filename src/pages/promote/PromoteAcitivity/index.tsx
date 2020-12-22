import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'

const PromoteActivity: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const { getTableData } = useAPIService()

  useEffect(() => {
    getTableData()
  }, [])
  return (
    <Dashboard>
      <PageHeader />
      <SearchBar />
      <TableData />
    </Dashboard>
  )
}

export default PromoteActivity
