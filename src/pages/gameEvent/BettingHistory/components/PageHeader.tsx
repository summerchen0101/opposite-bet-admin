import React from 'react'
import PageHeader from '@/components/PageHeader'
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
      path: '',
      breadcrumbName: '下注紀錄',
    },
  ]
  return <PageHeader title="下注紀錄" breadcrumb={{ routes }} />
}

export default Component
