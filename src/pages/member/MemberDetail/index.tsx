import Dashboard from '@/components/Dashboard'
import { Collapse } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'
import RegisterInfo from './containers/RegisterInfo'

const Manager: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <Dashboard>
      <PageHeader />
      <RegisterInfo />
    </Dashboard>
  )
}

export default Manager
