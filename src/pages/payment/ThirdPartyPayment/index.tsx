import { Dashboard } from '@/components'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import EditPopup from './containers/EditPopup'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'

const MarqueePage: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const { getTableData } = useAPIService()

  useEffect(() => {
    getTableData()
  }, [])
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <TableData />
        <CreatePopup />
        <EditPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default MarqueePage
