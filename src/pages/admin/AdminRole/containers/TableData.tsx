import { PopupConfirm, Text } from '@/components'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { useAppDispatch } from '@/store'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
  FilterFilled,
} from '@ant-design/icons'
import { message, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { selectTableData, useTypedSelector } from '../selectors'

export interface TableItem {
  id: string
  name: string
  count: number
  updatedAt: string
  updator: string
  creator: string
  createdAt: string
  menu: string
  status: number
}

const columns: ColumnsType<TableItem> = [
  {
    title: '角色名稱',
    dataIndex: 'name',
    width: 100,
    render: (value) => value,
  },
  {
    title: '人數',
    dataIndex: 'count',
    width: 140,
    render: (value) => value,
  },
  {
    title: '創建時間',
    dataIndex: 'createdAt',
    width: 180,
    render: (value) => value,
  },
  {
    title: '創建者',
    dataIndex: 'creator',
    width: 140,
    render: (value) => value,
  },
  {
    title: '狀態',
    dataIndex: 'status',
    width: 120,
    render: (_, row) => {
      if (row.status === 1) {
        return <Text color="success">啟用</Text>
      }
      return <Text color="danger">關閉</Text>
    },
  },
  {
    title: '更新人員',
    dataIndex: 'updator',
    width: 120,
    render: (value) => value,
  },
  {
    title: '更新時間',
    dataIndex: 'updatedAt',
    width: 200,
    render: (value) => value,
  },
  {
    title: () => (
      <>
        <Space size="small">操作</Space>
        <IconLink
          icon={<FilterFilled />}
          style={{ float: 'right', marginBottom: -4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const dispatch = useAppDispatch()
      const handleEdit = () => {}
      const handleDelete = () => {}
      const handleStatus = async (status: number) => {}
      return (
        <Space size="small">
          {row.status ? (
            <IconLink
              icon={<CloseCircleOutlined />}
              label="停用"
              color="red"
              onClick={() => handleStatus(0)}
            />
          ) : (
            <IconLink
              icon={<CheckCircleOutlined />}
              label="啟用"
              color="green"
              onClick={() => handleStatus(1)}
            />
          )}
          <IconLink icon={<EditFilled />} label="編輯" onClick={handleEdit} />
          <PopupConfirm onConfirm={handleDelete}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 80,
  },
]

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets<TableItem> columns={columns} data={data} />
}

export default TableData
