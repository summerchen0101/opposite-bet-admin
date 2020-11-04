import React from 'react'
import PageHeader from '@/components/PageHeader'
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
      path: '',
      breadcrumbName: '上架賽事',
    },
  ]
  return (
    <PageHeader
      title="上架賽事"
      breadcrumb={{ routes }}
      extra={<CreateButton />}
    />
  )
}

export default Component
