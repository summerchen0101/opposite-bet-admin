import { BlurExactSearch } from '@/components'
import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import BankSelector from './containers/BankSelector'
import DepositDateRangePicker from './containers/DepositDateRangePicker'
import PopupCreateForm from './containers/PopupCreateForm'
import StatusSelector from './containers/StatusSelector'
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
        <DepositDateRangePicker />
        <BankSelector />
        <BlurExactSearch placeholder="會員帳號" />
        <StatusSelector />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
