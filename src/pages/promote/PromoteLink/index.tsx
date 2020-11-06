import { BlurExactSearch } from '@/components'
import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import StatusPicker from './containers/StatusPicker'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import InvitedCodeSearch from './containers/InvitedCodeSearch'
import PopupCreateForm from './containers/PopupCreateForm'
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
        <BlurExactSearch placeholder="代理帳號" />
        <InvitedCodeSearch />
        <StatusPicker />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
