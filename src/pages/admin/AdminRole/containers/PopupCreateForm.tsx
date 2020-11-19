import { IconLink, PopupTable } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import {
  EyeOutlined,
  EyeTwoTone,
  SettingOutlined,
  SettingTwoTone,
} from '@ant-design/icons'
import { Button, Input, Select, Space, Table } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import {
  useTypedSelector as useGlobalTypedSelector,
  selectMenu,
} from '@/store/selectors'
import { AdminRole } from '@/lib/types'

const { Option } = Select

const columns = [
  { title: '功能', dataIndex: 'name' },
  {
    title: '權限',
    dataIndex: 'permission',
    // align: 'right',
    render: ({ view, edit }) => (
      <Space>
        <IconLink icon={view ? <EyeTwoTone /> : <EyeOutlined />} />
        <IconLink icon={edit ? <SettingTwoTone /> : <SettingOutlined />} />
      </Space>
    ),
    width: '100px',
  },
]
columns.map((t, i) => ({ ...t, key: i }))

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

  const menu = useGlobalTypedSelector(selectMenu)
  const menuPermissionListCreator = (menu) => {
    return menu.map((t, i) => ({
      key: t.id,
      name: t.name,
      children: t.children ? menuPermissionListCreator(t.children) : undefined,
      permission: { view: true, edit: false },
    }))
  }

  const data = menuPermissionListCreator(menu)

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
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          size="small"
        />
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
