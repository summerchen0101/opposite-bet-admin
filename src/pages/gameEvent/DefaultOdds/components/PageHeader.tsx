import React from 'react'
import PageHeader from '@/components/PageHeader'
import { eventManager, eventScore } from '@/lib/routes'
import CreateButton from '../containers/CreateButton'
const Component: React.FC = () => {
  const routes = [
    {
      path: '/',
      breadcrumbName: '首頁',
    },
    {
      path: '',
      breadcrumbName: '賽事管理',
    },
    {
      path: eventManager,
      breadcrumbName: '默認賠率',
    },
  ]
  return (
    <PageHeader
      title="默認賠率"
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
