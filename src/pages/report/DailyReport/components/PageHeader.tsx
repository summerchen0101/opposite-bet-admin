import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { DailyReport } from '@/pages/report/routes'
const Component: React.FC = () => {
  const routes = [
    {
      path: '/',
      breadcrumbName: '首頁',
    },
    {
      path: '',
      breadcrumbName: '會員管理',
    },
    {
      path: DailyReport.path,
      breadcrumbName: DailyReport.name,
    },
  ]
  return (
    <PageHeader
      title={DailyReport.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
