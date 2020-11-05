import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TypeSelector from './containers/TypeSelector'
import ThirdPartySelector from './containers/ThirdPartySelector'
import PageHeader from './components/PageHeader'
import PopupCreateForm from './containers/PopupCreateForm'
import StatusRadioPicker from './containers/StatusRadioPicker'
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
        <TypeSelector />
        <ThirdPartySelector />
        <StatusRadioPicker />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  )
}

export default Manager
