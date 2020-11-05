import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { Withdrawal } from '@/pages/payment/routes'
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
      path: Withdrawal.path,
      breadcrumbName: Withdrawal.name,
    },
  ]
  return (
    <PageHeader
      title={Withdrawal.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
