import Dashboard from '@/components/Dashboard'
import React from 'react'
import PageHeader from './components/PageHeader'
import TableData from './containers/TableData'

const Manager: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader />
      <TableData />
    </Dashboard>
  )
}

export default Manager
