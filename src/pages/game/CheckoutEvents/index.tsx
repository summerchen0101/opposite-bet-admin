import { Dashboard } from '@/components'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import EditPopup from './containers/EditPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import PopupProvider from '../context/PopupProvider'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'
import GameDetailPopup from '../containers/GameDetailPopup'
import AutoReviewPopup from '../containers/AutoReviewPopup'
import GameOrdersPopup from '../containers/GameOrdersPopup'

const MarqueePage: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const { getTableData, getSectionOptions, getPlayOptions } = useAPIService()

  useEffect(() => {
    Promise.all([getTableData(), getSectionOptions(), getPlayOptions()])
  }, [])
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <SearchBar />
        <TableData />
        <GameDetailPopup />
        <AutoReviewPopup />
        <GameOrdersPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default MarqueePage
