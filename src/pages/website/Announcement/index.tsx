import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useReducerInjector } from '@/utils/hooks'
import { Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import MailTypePicker from './containers/MailTypePicker'
import PopupCreateForm from './containers/PopupCreateForm'
import RecieveTableData from './containers/RecieveTableData'
import SendTableData from './containers/SendTableData'
import StatusPicker from './containers/StatusPicker'
import SubjectSearch from './containers/SubjectSearch'
import TypePicker from './containers/TypePicker'
import reducer, { initSearchState, moduleName } from './reducer'

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
      <PageSearchBar style={{ marginBottom: '20px' }}>
        <TypePicker
          value={currentTab}
          onChange={(e) => setCurrentTab(e.target.value)}
        />
      </PageSearchBar>
      <PageSearchBar>
        <SubjectSearch />
        <MailTypePicker />
        {currentTab === 'opt2' && (
          <>
            <Divider type="vertical" />
            <StatusPicker />
          </>
        )}
      </PageSearchBar>
      {currentTab === 'opt2' ? <RecieveTableData /> : <SendTableData />}
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
