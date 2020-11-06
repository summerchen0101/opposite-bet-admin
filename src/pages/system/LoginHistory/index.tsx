import Dashboard from '@/components/Dashboard'
import DateRangePicker from '@/components/DateRangePicker'
import PageSearchBar from '@/components/PageSearchBar'
import RelativeDateBtns from '@/components/RelativeDateBtns'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import IpSearch from './containers/IpSearch'
import AccountSearch from './containers/AccountSearch'
import StatusRadioPicker from './containers/StatusRadioPicker'
import LoginRadioPicker from './containers/LoginRadioPicker'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName } from './reducer'
import { Divider } from 'antd'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSearchState())
  }, [])
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar style={{ marginBottom: 10 }}>
        <DateRangePicker />
        <IpSearch />
        <AccountSearch />
      </PageSearchBar>
      <PageSearchBar>
        <StatusRadioPicker />
        <Divider type="vertical" />
        <LoginRadioPicker />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
