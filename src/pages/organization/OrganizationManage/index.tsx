import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useAppDispatch } from '@/store'
import { useReducerInjector } from '@/utils/hooks'
import { message } from 'antd'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import AccountSearch from './containers/AccountSearch'
import PopupCreateForm from './containers/PopupCreateForm'
import PopupLoginHistory from './containers/PopupLoginHistory'
import PopupPercentageForm from './containers/PopupPercentageForm'
import PopupPointForm from './containers/PopupPointForm'
import PopupPwForm from './containers/PopupPwForm'
import PopupTradeHistory from './containers/PopupTradeHistory'
import PopupWhiteListForm from './containers/PopupWhiteListForm'
import StatusSelector from './containers/StatusSelector'
import TableData from './containers/TableData'
import { TablePickerProvider } from './containers/TablePickerProvider'
import reducer, { fetchList, initSearchState, moduleName } from './reducer'

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
      <TablePickerProvider>
        <TableData />
      </TablePickerProvider>
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
