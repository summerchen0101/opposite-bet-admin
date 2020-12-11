import Dashboard from '@/components/Dashboard'
import { Col, Row } from 'antd'
import React from 'react'
import PageHeader from './components/PageHeader'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'

const GameLimit: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader />
      <SearchBar />
      <TableData />
    </Dashboard>
  )
}

export default GameLimit
