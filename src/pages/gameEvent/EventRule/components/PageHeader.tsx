import React from 'react'
import PageHeader from '@/components/PageHeader'
import { EventRule as page } from '@/pages/gameEvent/routes'
import { useBreadcrumb } from '@/utils/hooks'
import CreateButton from '../containers/CreateButton'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      breadcrumb={{ routes }}
      extra={<CreateButton />}
    />
  )
}

export default Component
