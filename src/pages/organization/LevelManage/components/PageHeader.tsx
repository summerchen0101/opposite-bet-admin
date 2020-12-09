import PageHeader from '@/components/PageHeader'
import { useBreadcrumb } from '@/utils/hooks'
import React from 'react'
import { LevelManage as page } from '../../routes'
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
