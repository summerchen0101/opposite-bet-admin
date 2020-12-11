import Dashboard from '@/components/Dashboard'
import React from 'react'
import PageHeader from './components/PageHeader'
import TableData from './containers/TableData'
import SearchBar from './containers/SearchBar'
import PopupProvider from './context/PopupProvider'

const MonthlyReport: React.FC = () => {
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
      </PopupProvider>
    </Dashboard>
  )
}

export default MonthlyReport
