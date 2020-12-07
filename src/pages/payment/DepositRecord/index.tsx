import { BlurExactSearch } from '@/components'
import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import BankSelector from './containers/BankSelector'
import DepositDateRangePicker from './containers/DepositDateRangePicker'
import PopupReviewForm from './containers/PopupReviewForm'
import PopupWaitingForm from './containers/PopupWaitingForm'
import PopupRejectForm from './containers/PopupRejectForm'
import StatusSelector from './containers/StatusSelector'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName } from './reducer'

const BankDepositPage: React.FC = () => {
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
      <PopupReviewForm />
      <PopupWaitingForm />
      <PopupRejectForm />
    </Dashboard>
  )
}

export default BankDepositPage
