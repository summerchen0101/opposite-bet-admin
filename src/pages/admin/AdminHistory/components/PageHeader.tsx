import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { AdminHistory } from '@/pages/admin/routes'
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
      path: AdminHistory.path,
      breadcrumbName: AdminHistory.name,
    },
  ]
  return (
    <PageHeader
      title={AdminHistory.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
