import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { ThirdPartyDeposit } from '@/pages/payment/routes'
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
      path: ThirdPartyDeposit.path,
      breadcrumbName: ThirdPartyDeposit.name,
    },
  ]
  return (
    <PageHeader
      title={ThirdPartyDeposit.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
