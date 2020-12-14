import Dashboard from '@/components/Dashboard'
import PopupProvider from './context/PopupProvider'
import { useReducerInjector } from '@/utils/hooks'
import React from 'react'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import PopupEditForm from './containers/EditPopup'
import TableData from './containers/TableData'
import reducer, { moduleName } from './reducer'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
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
