import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { PromoteAcitivity } from '@/pages/promote/routes'
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
      path: PromoteAcitivity.path,
      breadcrumbName: PromoteAcitivity.name,
    },
  ]
  return (
    <PageHeader
      title={PromoteAcitivity.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
