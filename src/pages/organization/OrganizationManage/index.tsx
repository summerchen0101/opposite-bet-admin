import Dashboard from '@/components/Dashboard'
import DateRangePicker from '@/components/DateRangePicker'
import PageSearchBar from '@/components/PageSearchBar'
import SearchInput from '@/components/SearchInput'
import MultipleSelector from './containers/MultipleSelector'
import StatusSelector from './containers/StatusSelector'
import RelativeDateBtns from '@/components/RelativeDateBtns'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AccountSearch from './containers/AccountSearch'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import PopupPwForm from './containers/PopupPwForm'
import PopupPercentageForm from './containers/PopupPercentageForm'
import PopupWhiteListForm from './containers/PopupWhiteListForm'
import PopupLoginHistory from './containers/PopupLoginHistory'
import PopupTradeHistory from './containers/PopupTradeHistory'
import PopupPointForm from './containers/PopupPointForm'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName } from './reducer'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSearchState())
  }, [])
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <AccountSearch />
        <MultipleSelector />
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
