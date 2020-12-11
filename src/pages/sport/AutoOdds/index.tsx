import Dashboard from '@/components/Dashboard'
import React from 'react'
import PageHeader from './components/PageHeader'
import OddsSettingForm from './containers/OddsSettingForm'

const AutoOdds: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader />
      <OddsSettingForm />
    </Dashboard>
  )
}

export default AutoOdds
