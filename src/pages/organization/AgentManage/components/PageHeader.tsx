import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { AgentManage as page } from '../../routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
import { usePopupProvider } from '../context/PopupProvider'
import { usePopupProvider as useMemberPopupProvider } from '@/pages/organization/MemberManage/context/PopupProvider'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const [, setVisible] = usePopupProvider('createForm')
  const [, setMemberVisible] = useMemberPopupProvider('createForm')
  return (
    <PageHeader
      title={page.name}
      extra={
        <Space>
          <Button onClick={() => setVisible(true)}>新增總代理</Button>
          <Button onClick={() => setMemberVisible(true)}>新增會員</Button>
        </Space>
      }
      breadcrumb={{ routes }}
    />
  )
}

export default Component
