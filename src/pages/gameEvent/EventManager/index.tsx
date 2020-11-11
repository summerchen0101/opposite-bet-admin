import { CreateButton, PopupModalWithTrigger } from '@/components'
import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import RelativeDateBtns from '@/components/RelativeDateBtns'
import { useReducerInjector, useTabRecord } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DateRangePicker from '../../../components/DateRangePicker'
import PageHeader from './components/PageHeader'
import CreateForm from './containers/CreateForm'
import TableData from './containers/TableData'
import reducer, { initSearchState, moduleName } from './reducer'
import { EventManager } from '../routes'

const createTrigger = (setVisible) => (
  <CreateButton onClick={() => setVisible(true)} />
)
const createForm = (setVisible) => <CreateForm setVisible={setVisible} />

const EventManagerPage: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  useTabRecord(EventManager)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSearchState())
  }, [])
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar
        extra={
          <PopupModalWithTrigger
            title="新增賽事"
            trigger={createTrigger}
            content={createForm}
          />
        }
      >
        <DateRangePicker />
        <RelativeDateBtns />
      </PageSearchBar>
      <TableData />
    </Dashboard>
  )
}

export default EventManagerPage
