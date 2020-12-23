import Dashboard from '@/components/Dashboard'
import DateRangePicker from '@/components/DateRangePicker'
import PageSearchBar from '@/components/PageSearchBar'
import RelativeDateBtns from '@/components/RelativeDateBtns'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import PopupDepositTable from './containers/PopupDepositTable'
import PopupWithdrawalTable from './containers/PopupWithdrawalTable'
import PopupLoginCountTable from './containers/PopupLoginCountTable'
import PopupRegisterCountTable from './containers/PopupRegisterCountTable'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName } from './reducer'
import SearchBar from './containers/SearchBar'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSearchState())
  }, [])
  return (
    <Dashboard>
      <PageHeader />
      <SearchBar />
      <TableData />
      <PopupDepositTable />
      <PopupWithdrawalTable />
      <PopupLoginCountTable />
      <PopupRegisterCountTable />
    </Dashboard>
  )
}

export default Manager
