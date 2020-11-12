import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import StatusPicker from './containers/StatusPicker'
import TableData from './containers/TableData'
import TitleSearch from './containers/TitleSearch'
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
        <TitleSearch />
        <StatusPicker />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
