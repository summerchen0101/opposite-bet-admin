import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { WithdrawalSetting } from '@/pages/payment/routes'
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
      path: WithdrawalSetting.path,
      breadcrumbName: WithdrawalSetting.name,
    },
  ]
  return (
    <PageHeader
      title={WithdrawalSetting.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
