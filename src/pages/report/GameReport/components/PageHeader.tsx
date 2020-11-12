import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { GameReport as page } from '@/pages/report/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button } from 'antd'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      extra={<Button type="primary">匯出報表</Button>}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
