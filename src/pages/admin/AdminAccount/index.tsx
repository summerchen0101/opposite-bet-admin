import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import AccountSearch from './containers/AccountSearch'
import IpSearch from './containers/IpSearch'
import PopupCreateForm from './containers/PopupCreateForm'
import RoleSelector from './containers/RoleSelector'
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
        <AccountSearch />
        <RoleSelector />
        <StatusSelector />
        <IpSearch />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
