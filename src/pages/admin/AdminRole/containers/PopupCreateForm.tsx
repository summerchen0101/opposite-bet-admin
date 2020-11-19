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
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMenu, toggleCreateModal, doCreate } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import {
  useTypedSelector as useGlobalTypedSelector,
  selectMenu,
} from '@/store/selectors'
import { AdminRole, Permission } from '@/lib/types'
import { ColumnsType } from 'antd/lib/table'

interface MenuPermissionItem {
  key: number
  name: string
  parent?: number
  children?: MenuPermissionItem[]
  permission: Permission
}

const { Option } = Select

const columns: ColumnsType<MenuPermissionItem> = [
  { title: '功能', dataIndex: 'name' },
  {
    title: '權限',
    dataIndex: 'permission',
    // align: 'right',
    render: ({ view, edit }, row, index) => {
      const dispatch = useDispatch()
      const [localView, setLocalView] = useState(view)
      const [localEdit, setLocalEdit] = useState(edit)
      useEffect(() => {
        const permission = {
          view: localView,
          edit: localEdit,
        }
        dispatch(
          setMenu({
            id: row.key,
            permission,
            parent: row.parent,
          }),
        )
      }, [localView, localEdit])
      return (
        <Space>
          <IconLink
            icon={localView ? <EyeTwoTone /> : <EyeOutlined />}
            onClick={() => setLocalView(!localView)}
          />
          <IconLink
            icon={localEdit ? <SettingTwoTone /> : <SettingOutlined />}
            onClick={() => setLocalEdit(!localEdit)}
          />
        </Space>
      )
    },
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
  const onFinish = ({ name }) => {
    dispatch(doCreate(name))
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const menu = useGlobalTypedSelector(selectMenu)
  const menuPermissionListCreator = (menu): MenuPermissionItem[] => {
    return menu.map((t, i) => ({
      key: t.id,
      name: t.name,
      parent: t.parent,
      children: t.children ? menuPermissionListCreator(t.children) : [],
      permission: {
        view: t.permission?.view ?? false,
        edit: t.permission?.edit ?? false,
      },
    }))
  }

  const data = menuPermissionListCreator(menu)

  return (
    <PopupModal visible={isDisplay} title="新增管理者角色" onCancel={onCancel}>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ name: '' }}
      >
        <FormField label="角色名稱" name="name" required>
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
