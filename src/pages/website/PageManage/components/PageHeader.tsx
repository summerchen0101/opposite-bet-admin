import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { PageManage } from '@/pages/website/routes'
const Component: React.FC = () => {
  const routes = [
    {
      path: '/',
      breadcrumbName: '首頁',
    },
    {
      path: '',
      breadcrumbName: '網站管理',
    },
    {
      path: PageManage.path,
      breadcrumbName: PageManage.name,
    },
  ]
  return (
    <PageHeader
      title={PageManage.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
