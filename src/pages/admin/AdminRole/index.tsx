import Dashboard from '@/components/Dashboard'
import { useAppDispatch } from '@/store'
import { useReducerInjector } from '@/utils/hooks'
import { message } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import PopupEditForm from './containers/PopupEditForm'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName, fetchList } from './reducer'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const dispatch = useAppDispatch()
  const getTableData = async () => {
    const action = await dispatch(fetchList())
    if (fetchList.rejected.match(action)) {
      message.error(action.error.message)
    }
  }
  useEffect(() => {
    dispatch(initSearchState())
    getTableData()
  }, [])
  return (
    <Dashboard>
      <PageHeader />
      <TableData />
      <PopupCreateForm />
      <PopupEditForm />
    </Dashboard>
  )
}

export default Manager
