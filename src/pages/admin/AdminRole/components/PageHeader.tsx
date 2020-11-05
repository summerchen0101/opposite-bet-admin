import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { AdminRole } from '@/pages/admin/routes'
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
      path: AdminRole.path,
      breadcrumbName: AdminRole.name,
    },
  ]
  return (
    <PageHeader
      title={AdminRole.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
