import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import AgentSelector from './containers/AgentSelector'
import PopupCreateForm from './containers/PopupCreateForm'
import PopupCategoryCreate from './containers/PopupCategoryCreate'
import PopupCategoryList from './containers/PopupCategoryList'
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
        <AgentSelector />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
      <PopupCategoryList />
      <PopupCategoryCreate />
    </Dashboard>
  )
}

export default Manager
