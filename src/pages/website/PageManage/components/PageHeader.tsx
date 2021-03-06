import React from 'react'
import PageHeader from '@/components/PageHeader'
import { PageManage as page } from '@/pages/website/routes'
import { useBreadcrumb } from '@/utils/hooks'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
