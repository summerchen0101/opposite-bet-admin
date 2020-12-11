import PageHeader from '@/components/PageHeader'
import { MonthlyReport as page } from '@/pages/report/routes'
import { useBreadcrumb } from '@/utils/hooks'
import React from 'react'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
