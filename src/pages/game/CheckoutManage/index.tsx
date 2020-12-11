import Dashboard from '@/components/Dashboard'
import React from 'react'
import PageHeader from './components/PageHeader'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'

const CheckoutManagePage: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader />
      <SearchBar />
      <TableData />
    </Dashboard>
  )
}

export default CheckoutManagePage
