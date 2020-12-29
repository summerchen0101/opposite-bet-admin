import PageHeader from '@/components/PageHeader'
import { Faq as page } from '@/pages/website/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
import React from 'react'
import CreateButton from '../containers/CreateButton'
import { usePopupProvider } from '../context/PopupProvider'

const ExtraButtons: React.FC = () => {
  const [, setVisible] = usePopupProvider('categoryList')
  const handleCategory = () => setVisible(true)
  return (
    <Space>
      <Button onClick={handleCategory}>分類設定</Button>
      <CreateButton />
    </Space>
  )
}
const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      extra={<ExtraButtons />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
