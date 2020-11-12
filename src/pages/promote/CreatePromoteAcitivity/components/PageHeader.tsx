import PageHeader from '@/components/PageHeader'
import { PromoteAcitivity as page } from '@/pages/promote/routes'
import { useBreadcrumb } from '@/utils/hooks'
import React from 'react'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
