import Dashboard from '@/components/Dashboard'
import React from 'react'
import PageHeader from './components/PageHeader'
import AutoOddsPopup from './containers/AutoOddsPopup'
import DataFormGroup from './containers/DataFormGroup'
import SearchBar from './containers/SearchBar'
import PopupProvider from './context/PopupProvider'

const GameLimit: React.FC = () => {
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <DataFormGroup />
        <AutoOddsPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default GameLimit
