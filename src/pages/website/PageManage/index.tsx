import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import EditPopup from './containers/EditPopup'
import PreviewPopup from './containers/PreviewPopup'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'

const Manager: React.FC = () => {
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
        <PreviewPopup />
        <CreatePopup />
        <EditPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default Manager
