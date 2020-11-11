import Dashboard from '@/components/Dashboard'
import DateRangePicker from '@/components/DateRangePicker'
import PageSearchBar from '@/components/PageSearchBar'
import SearchInput from '@/components/SearchInput'
import { useReducerInjector, useTabRecord } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BettingHistory } from '../routes'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName } from './reducer'

const BettingHistoryPage: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  useTabRecord(BettingHistory)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSearchState())
  }, [])
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <DateRangePicker />
        <SearchInput placeholder="會員帳號/賽事編號" />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default BettingHistoryPage
