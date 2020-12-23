import Dashboard from '@/components/Dashboard'
import React from 'react'
import PageHeader from './components/PageHeader'
import DataFormGroup from './containers/DataFormGroup'
import SearchBar from './containers/SearchBar'

const GameLimit: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader />
      <SearchBar />
      <DataFormGroup />
    </Dashboard>
  )
}

export default GameLimit
