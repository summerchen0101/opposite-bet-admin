import { ButtonGroup } from '@/components'
import Dashboard from '@/components/Dashboard'
import DateRangePicker from '@/components/DateRangePicker'
import PageSearchBar from '@/components/PageSearchBar'
import RelativeDateBtns from '@/components/RelativeDateBtns'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import TypeButtons from './containers/TypeButtons'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName } from './reducer'
import SubjectSearch from './containers/SubjectSearch'
import MailTypePicker from './containers/MailTypePicker'
import StatusPicker from './containers/StatusPicker'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSearchState())
  }, [])
  const [currentTab, setCurrentTab] = useState('opt1')
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar style={{ marginBottom: '10px' }}>
        <TypeButtons
          value={currentTab}
          onChange={(e) => setCurrentTab(e.target.value)}
        />
      </PageSearchBar>
      <PageSearchBar>
        <SubjectSearch />
        <MailTypePicker />
        {currentTab === 'opt2' && <StatusPicker />}
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
