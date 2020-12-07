import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BankSelector from './containers/BankSelector'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import PopupBankList from './containers/PopupBankList'
import PopupBankCreate from './containers/PopupBankCreate'
import StatusRadioPicker from './containers/StatusRadioPicker'
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
        <StatusRadioPicker />
        <BankSelector />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
      <PopupBankList />
      <PopupBankCreate />
    </Dashboard>
  )
}

export default Manager
