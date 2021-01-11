import React from 'react'
import PageHeader from '@/components/PageHeader'
import { AgentManage as page } from '../../routes'
import { useBreadcrumb } from '@/utils/hooks'
import { usePopupProvider } from '../context/PopupProvider'
import { Button } from 'antd'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const [, setVisible] = usePopupProvider('createForm')
  return (
    <PageHeader
      title={page.name}
      extra={
        <Button type="primary" onClick={() => setVisible(true)}>
          新增會員
        </Button>
      }
      breadcrumb={{ routes }}
    />
  )
}

export default Component
