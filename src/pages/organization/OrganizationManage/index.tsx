import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import LevelSelector from './containers/LevelSelector'
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
import PopupInvitedForm from './containers/PopupInvitedForm'
import StatusSelector from './containers/StatusSelector'
import TableData from './containers/TableData'
import { TablePickerProvider } from './containers/TablePickerProvider'
import reducer, {
  fetchList,
  initSearchState,
  moduleName,
  setCurrentLevel,
} from './reducer'
import qs from 'qs'
import { useLocation } from 'react-router-dom'

const Manager: React.FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const query = qs.parse(location.search, { ignoreQueryPrefix: true }) || {}
  const currentLevel = +query?.level
  dispatch(setCurrentLevel(currentLevel || 1))
  useReducerInjector(moduleName, reducer)
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
        <LevelSelector />
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
      <PopupInvitedForm />
    </Dashboard>
  )
}

export default Manager
