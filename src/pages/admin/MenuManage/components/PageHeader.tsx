import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { MenuManage as page } from '@/pages/admin/routes'
import { useBreadcrumb } from '@/utils/hooks'

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
