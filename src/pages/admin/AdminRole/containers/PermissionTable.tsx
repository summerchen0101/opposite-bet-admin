import { IconLink } from '@/components'
import { Permission } from '@/lib/types'
import {
  selectMenu,
  useTypedSelector as useGlobalTypedSelector,
} from '@/store/selectors'
import {
  EyeOutlined,
  EyeTwoTone,
  SettingOutlined,
  SettingTwoTone,
} from '@ant-design/icons'
import { Space, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

interface MenuPermissionItem {
  key: number
  name: string
  parent?: number
  children?: MenuPermissionItem[]
  permission: Permission
}

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

const PermissionTable: React.FC = () => {
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

  const menuData = menuPermissionListCreator(menu)

  return (
    <Table
      columns={columns}
      dataSource={menuData}
      pagination={false}
      size="small"
    />
  )
}

export default PermissionTable
