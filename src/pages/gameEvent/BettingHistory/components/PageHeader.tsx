import React from 'react'
import PageHeader from '@/components/PageHeader'
import { eventManager, eventScore } from '@/lib/routes'
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
      breadcrumbName: '下注紀錄',
    },
  ]
  return <PageHeader title="下注紀錄" breadcrumb={{ routes }} />
}

export default Component
