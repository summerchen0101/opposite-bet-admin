import PageHeader from '@/components/PageHeader'
import { useBreadcrumb } from '@/utils/hooks'
import React from 'react'
import { EventReview as page } from '../../routes'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
