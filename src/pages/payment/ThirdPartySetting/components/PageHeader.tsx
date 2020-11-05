import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { ThirdPartySetting } from '@/pages/payment/routes'
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
      path: ThirdPartySetting.path,
      breadcrumbName: ThirdPartySetting.name,
    },
  ]
  return (
    <PageHeader
      title={ThirdPartySetting.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
