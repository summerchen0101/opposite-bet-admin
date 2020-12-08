import { Dashboard, DateRangePicker, PageSearchBar } from '@/components'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import SubjectSearch from './containers/SubjectSearch'
import TableData from './containers/TableData'
import TypeSelector from './containers/TypeSelector'
import StatusSelector from './containers/StatusSelector'
import DisplaySelector from './containers/DisplaySelector'
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
      <PageSearchBar style={{ marginBottom: '20px' }}>
        <DateRangePicker />
        <SubjectSearch />
        <TypeSelector />
        <DisplaySelector />
        <StatusSelector />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
