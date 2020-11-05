import React from 'react'
import PageHeader from '@/components/PageHeader'
import { EventScore as page } from '@/pages/gameEvent/routes'
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
      path: '',
      breadcrumbName: page.name,
    },
  ]
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
