import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useAppDispatch } from '@/store'
import { useReducerInjector } from '@/utils/hooks'
import { message } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import AccountSearch from './containers/AccountSearch'
import MultipleSelector from './containers/MultipleSelector'
import PopupCreateForm from './containers/PopupCreateForm'
import PopupLoginHistory from './containers/PopupLoginHistory'
import PopupPercentageForm from './containers/PopupPercentageForm'
import PopupPointForm from './containers/PopupPointForm'
import PopupPwForm from './containers/PopupPwForm'
import PopupTradeHistory from './containers/PopupTradeHistory'
import PopupWhiteListForm from './containers/PopupWhiteListForm'
import StatusSelector from './containers/StatusSelector'
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
      <PageSearchBar>
        <AccountSearch />
        <StatusSelector />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
      <PopupPwForm />
      <PopupPercentageForm />
      <PopupWhiteListForm />
      <PopupLoginHistory />
      <PopupTradeHistory />
      <PopupPointForm />
    </Dashboard>
  )
}

export default Manager
