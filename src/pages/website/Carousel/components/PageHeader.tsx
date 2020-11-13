import PageHeader from '@/components/PageHeader'
import { Carousel as page } from '@/pages/website/routes'
import { useBreadcrumb } from '@/utils/hooks'
import React from 'react'
import CreateButton from '../containers/CreateButton'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
