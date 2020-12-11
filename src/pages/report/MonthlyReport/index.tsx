import Dashboard from '@/components/Dashboard'
import React from 'react'
import PageHeader from './components/PageHeader'
import TableData from './containers/TableData'
import SearchBar from './containers/SearchBar'
import PopupProvider from './context/PopupProvider'
import CheckoutFormPopup from './containers/CheckoutFormPopup'

const MonthlyReport: React.FC = () => {
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
        <CheckoutFormPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default MonthlyReport
