import { BlurExactSearch } from '@/components'
import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import DepositDateRangePicker from './containers/DepositDateRangePicker'
import PopupCreateForm from './containers/PopupCreateForm'
import PopupBatchCreate from './containers/PopupBatchCreate'
import StatusSelector from './containers/ActionTypeSelector'
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
        <BlurExactSearch placeholder="會員帳號" />
        <StatusSelector />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
      <PopupBatchCreate />
    </Dashboard>
  )
}

export default Manager
