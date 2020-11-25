import { IconLink, PopupConfirm, TableSets, Text } from '@/components'
import { useAppDispatch } from '@/store'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
  FilterFilled,
} from '@ant-design/icons'
import { message, Space } from 'antd'
import { ColumnType } from 'antd/lib/table'
import React from 'react'
import { fetchAdminEditOptions, fetchAdminList, removeAdmin } from '../reducer'
import { selectTableData, useTypedSelector } from '../selectors'

export interface TableItem {
  key: number
  id: string
  account: string
  name: string
  role: string
  lastLogin: string
  lastIp: string
  status: boolean
  isOnline: boolean
}
const columns: ColumnType<TableItem>[] = [
  {
    title: '管理者帳號',
    dataIndex: 'account',
    width: 120,
    render: (value) => (value ? <a>{value}</a> : '-'),
  },
  {
    title: '真實姓名',
    dataIndex: 'name',
    width: 120,
    render: (value) => value,
  },
  {
    title: '管理者角色',
    dataIndex: 'role',
    width: 140,
    render: (value) => value,
  },
  {
    title: '上次登入時間',
    dataIndex: 'lastLogin',
    width: 200,
    render: (value) => value ?? '-',
  },
  {
    title: '上次登入IP',
    dataIndex: 'lastIp',
    width: 140,
    render: (value) => value ?? '-',
  },
  {
    title: '啟用狀態',
    dataIndex: 'status',
    width: 140,
    render: (value) =>
      value ? (
        <Text color="success">啟用</Text>
      ) : (
        <Text color="danger">停用</Text>
      ),
  },
  {
    title: '上線狀態',
    dataIndex: 'isOnline',
    width: 120,
    render: (value) => '線上',
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
      const handleDelete = async () => {
        const action = await dispatch(removeAdmin(row.id))
        if (removeAdmin.fulfilled.match(action)) {
          message.success('刪除成功')
          dispatch(fetchAdminList())
        } else {
          message.error('刪除失敗')
        }
      }
      const handleEdit = async (e) => {
        const action = await dispatch(fetchAdminEditOptions(row.id))
        if (fetchAdminEditOptions.rejected.match(action)) {
          message.error(action.error.message)
        }
      }
      const handleStatus = async (status: number) => {
        // const action = await dispatch(setStatus({ status, id: row.id }))
        // if (setStatus.fulfilled.match(action)) {
        //   dispatch(fetchAdminList())
        // } else {
        //   message.error(action.error.message)
        // }
      }
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
          <IconLink icon={<ClockCircleOutlined />} label="歷程" />

          <PopupConfirm onConfirm={handleDelete}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 120,
  },
]
const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} />
}

export default TableData
