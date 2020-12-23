import Dashboard from '@/components/Dashboard'
import DateRangePicker from '@/components/DateRangePicker'
import PageSearchBar from '@/components/PageSearchBar'
import SearchInput from '@/components/SearchInput'
import MultipleSelector from './containers/MultipleSelector'
import KeywordSearch from './containers/KeywordSearch'
import RelativeDateBtns from '@/components/RelativeDateBtns'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CreateButton from './containers/CreateButton'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
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
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
