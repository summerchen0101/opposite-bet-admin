import { ButtonGroup } from '@/components'
import Dashboard from '@/components/Dashboard'
import DateRangePicker from '@/components/DateRangePicker'
import PageSearchBar from '@/components/PageSearchBar'
import RelativeDateBtns from '@/components/RelativeDateBtns'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import TypeButtons from './containers/TypeButtons'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName } from './reducer'
import SubjectSearch from './containers/SubjectSearch'
import MailTypePicker from './containers/MailTypePicker'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSearchState())
  }, [])
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar style={{ marginBottom: '10px' }}>
        <TypeButtons />
      </PageSearchBar>
      <PageSearchBar>
        <SubjectSearch />
        <MailTypePicker />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
