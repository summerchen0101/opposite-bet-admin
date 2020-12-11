import Dashboard from '@/components/Dashboard'
import DateRangePicker from '@/components/DateRangePicker'
import PageSearchBar from '@/components/PageSearchBar'
import RelativeDateBtns from '@/components/RelativeDateBtns'
import React from 'react'
import PageHeader from './components/PageHeader'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'

const MonthlyReport: React.FC = () => {
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <TableData />
      </PopupProvider>
    </Dashboard>
  )
}

export default MonthlyReport
