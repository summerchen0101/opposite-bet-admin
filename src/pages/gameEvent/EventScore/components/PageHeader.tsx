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
      breadcrumbName: '賽事列表',
    },
    {
      path: '',
      breadcrumbName: '比分',
    },
  ]
  return (
    <PageHeader
      title="美國 / NBA / 普羅森斯 VS 比勒菲爾德"
      breadcrumb={{ routes }}
      extra={<CreateButton />}
    />
  )
}

export default Component
