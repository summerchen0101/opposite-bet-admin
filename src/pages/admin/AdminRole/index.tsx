import Dashboard from '@/components/Dashboard'
import PopupProvider from './context/PopupProvider'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/CreatePopup'
import PopupEditForm from './containers/EditPopup'
import TableData from './containers/TableData'
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
        <PopupCreateForm />
        <PopupEditForm />
      </PopupProvider>
    </Dashboard>
  )
}

export default Manager
