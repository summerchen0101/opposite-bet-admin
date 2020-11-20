import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  StopOutlined,
  EditFilled,
  FilterFilled,
  DeleteOutlined,
} from '@ant-design/icons'
import { message, Space } from 'antd'
import React from 'react'
import { PopupConfirm, Text } from '@/components'
import { useTypedSelector, selectTableData } from '../selectors'
import { fetchEditOptions, doDelete, fetchList } from '../reducer'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '@/store'

const columns = [
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
    render: (value) => <Text color="success">啟用</Text>,
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
      const handleEdit = () => dispatch(fetchEditOptions(row.key))
      const handleDelete = async () => {
        const action = await dispatch(doDelete(row.id))
        if (doDelete.fulfilled.match(action)) {
          message.success('刪除成功')
          dispatch(fetchList())
        } else {
          message.error('刪除失敗')
        }
      }
      return (
        <Space size="small">
          <IconLink icon={<StopOutlined />} label="停用" color="red" />
          <IconLink icon={<EditFilled />} label="編輯" onClick={handleEdit} />
          <PopupConfirm onConfirm={handleDelete}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 70,
  },
]

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} />
}

export default TableData
