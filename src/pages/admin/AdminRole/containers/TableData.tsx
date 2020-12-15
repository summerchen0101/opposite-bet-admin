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
import { Role } from '../API/types'
import { toDateTime } from '@/utils/transfer'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import { setEditData } from '../reducer'

const columns: ColumnsType<Role> = [
  {
    title: '角色名稱',
    dataIndex: 'name',
    width: 100,
    render: (_, row) => row.name,
  },
  {
    title: '創建時間',
    dataIndex: 'createdAt',
    width: 180,
    render: (_, row) => toDateTime(row.created_at),
  },
  {
    title: '狀態',
    dataIndex: 'status',
    width: 120,
    render: (_, row) => {
      if (row.is_active) {
        return <Text color="success">啟用</Text>
      }
      return <Text color="danger">關閉</Text>
    },
  },
  {
    title: '更新時間',
    dataIndex: 'updatedAt',
    width: 200,
    render: (_, row) => toDateTime(row.updated_at),
  },
  {
    title: '操作',
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [visible, setVisible] = usePopupProvider('editForm')
      const { getFormData, getOptions, onDelete } = useAPIService()
      const handleEdit = async () => {
        await Promise.all([getOptions(), getFormData(row.id)])
        setVisible(true)
      }
      const handleStatus = async (status: number) => {}
      return (
        <Space size="small">
          {row.is_active ? (
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
          <PopupConfirm onConfirm={() => onDelete(row.id)}>
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
  return <TableSets<Role> columns={columns} data={data} />
}

export default TableData
