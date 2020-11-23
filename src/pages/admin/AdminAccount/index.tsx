import Dashboard from '@/components/Dashboard'
import { TabContext } from '@/contexts/TabContextProvider'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import PopupEditForm from './containers/PopupEditForm'
import SearchForm from './containers/SearchForm'
import TableData from './containers/TableData'
import reducer, { fetchAdminList, initSearchState, moduleName } from './reducer'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const dispatch = useDispatch()
  const getTableData = async () => {
    await dispatch(fetchAdminList())
  }
  useEffect(() => {
    dispatch(initSearchState())
    getTableData()
  }, [])
  return (
    <Dashboard>
      <PageHeader />
      <SearchForm />
      <div style={{ marginTop: '15px' }}></div>
      <TableData />
      <PopupCreateForm />
      <PopupEditForm />
    </Dashboard>
  )
}

export default Manager
