import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { LandingPage as page } from '@/pages/website/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
import { toggleSecondSettingModal } from '../reducer'
import { useDispatch } from 'react-redux'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const dispatch = useDispatch()
  const handleSeondSetting = () => dispatch(toggleSecondSettingModal(true))
  const ExtraButtons = (
    <Space>
      <Button onClick={handleSeondSetting}>秒數設定</Button>
      <CreateButton />
    </Space>
  )
  return (
    <PageHeader
      title={page.name}
      extra={ExtraButtons}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
