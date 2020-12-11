import Dashboard from '@/components/Dashboard'
import React from 'react'
import PageHeader from './components/PageHeader'
import CreateFormPopup from './containers/CreateFormPopup'
import GameDetailPopup from './containers/GameDetailPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'

const GameManagePage: React.FC = () => {
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
        <CreateFormPopup />
        <GameDetailPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default GameManagePage
