import PageHeader from '@/components/PageHeader'
import { useBreadcrumb } from '@/utils/hooks'
import { Button } from 'antd'
import React from 'react'
import { GameManage as page } from '../../routes'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      extra={<Button>採集賽事</Button>}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
