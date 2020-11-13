import PopupModal from '@/components/PopupModal'
import { Button, DatePicker, Input, Select, Space, Form as AntForm } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import {
  EyeOutlined,
  EyeFilled,
  EyeTwoTone,
  SettingFilled,
  SettingTwoTone,
  SettingOutlined,
} from '@ant-design/icons'
import { IconLink, PopupTable } from '@/components'
const { Option } = Select
const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const columns = [
    { title: '功能', dataIndex: 'node' },
    {
      title: '權限',
      dataIndex: 'permission',
      // align: 'right',
      render: ({ read, operation }) => (
        <Space>
          <IconLink icon={read ? <EyeTwoTone /> : <EyeOutlined />} />
          <IconLink
            icon={operation ? <SettingTwoTone /> : <SettingOutlined />}
          />
        </Space>
      ),
      width: '100px',
    },
  ]
  columns.map((t, i) => ({ ...t, key: i }))
  const data = [
    {
      key: 1,
      node: '會員管理',
      permission: { read: true, operation: true },
    },
    {
      key: 2,
      node: '∟ 會員列表',
      permission: { read: true, operation: false },
    },
    {
      key: 3,
      node: '∟ 標籤管理',
      permission: { read: false, operation: false },
    },
  ]

  return (
    <PopupModal visible={isDisplay} title="新增管理者角色" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="角色名稱" name="mainTeam" required>
          <Input />
        </FormField>
        <h3>
          選擇許可權層級
          <Space style={{ float: 'right', fontWeight: 400, fontSize: '14px' }}>
            <Space>
              <EyeOutlined />
              檢視
            </Space>
            <Space>
              <SettingOutlined />
              管理
            </Space>
          </Space>
        </h3>
        <PopupTable columns={columns} data={data} pagination={false} />

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button htmlType="reset">重置</Button>
            <Button type="primary" htmlType="submit">
              送出
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreateForm
