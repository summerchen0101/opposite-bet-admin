import Dashboard from '@/components/Dashboard'
import DateRangePicker from '@/components/DateRangePicker'
import PageSearchBar from '@/components/PageSearchBar'
import SearchInput from '@/components/SearchInput'
import AgentMultipleSelector from './containers/AgentMultipleSelector'
import LabelMultipleSelector from './containers/LabelMultipleSelector'
import RelativeDateBtns from '@/components/RelativeDateBtns'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import StatusSelector from './containers/StatusSelector'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName } from './reducer'
import { BlurExactSearch } from '@/components'

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
        <BlurExactSearch placeholder="會員帳號" />
        <SearchInput placeholder="真實姓名" />
        <BlurExactSearch placeholder="代理帳號" />
        <StatusSelector />
      </PageSearchBar>
      <PageSearchBar style={{ marginBottom: 10 }}>
        <AgentMultipleSelector />
        <LabelMultipleSelector />
      </PageSearchBar>
      <PageSearchBar>
        <DateRangePicker />
        <RelativeDateBtns />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
