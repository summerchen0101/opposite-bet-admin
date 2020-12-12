import Dashboard from '@/components/Dashboard'
import React from 'react'
import PageHeader from './components/PageHeader'
import TableData from './containers/TableData'
import SearchBar from './containers/SearchBar'
import PopupProvider from './context/PopupProvider'
import LevelProvider from './context/LevelProvider'

const Manager: React.FC = () => {
  return (
    <Dashboard>
      <LevelProvider>
        <PopupProvider>
          <PageHeader />
          <SearchBar />
          <TableData />
        </PopupProvider>
      </LevelProvider>
    </Dashboard>
  )
}

export default Manager
