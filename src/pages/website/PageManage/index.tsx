import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import PopupEditForm from './containers/PopupEditForm'
import PreviewPopup from './containers/PreviewPopup'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import reducer, { initSearchState, moduleName } from './reducer'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSearchState())
  }, [])
  return (
    <Dashboard>
      <PopupProvider>
        <PageHeader />
        <TableData />
        <PopupEditForm />
        <PreviewPopup />
      </PopupProvider>
    </Dashboard>
  )
}

export default Manager
