import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { GameReport } from '@/pages/report/routes'
const Component: React.FC = () => {
  const routes = [
    {
      path: '/',
      breadcrumbName: '首頁',
    },
    {
      path: '',
      breadcrumbName: '報表',
    },
    {
      path: GameReport.path,
      breadcrumbName: GameReport.name,
    },
  ]
  return (
    <PageHeader
      title={GameReport.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
