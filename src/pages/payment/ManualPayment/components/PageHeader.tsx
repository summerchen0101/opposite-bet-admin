import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { ManualPayment as page } from '@/pages/payment/routes'
const Component: React.FC = () => {
  const routes = [
    {
      path: '/',
      breadcrumbName: '首頁',
    },
    ...page.parents.map((parent) => ({
      path: parent.path,
      breadcrumbName: parent.name,
    })),
    {
      path: page.path,
      breadcrumbName: page.name,
    },
  ]
  return (
    <PageHeader
      title={page.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
