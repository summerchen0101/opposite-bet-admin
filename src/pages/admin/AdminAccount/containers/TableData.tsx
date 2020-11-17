import { IconLink, Text, TableSets } from '@/components'
import { useTypedSelector, selectTableData } from '../selectors'
import {
  EditFilled,
  ClockCircleOutlined,
  FilterFilled,
  StopOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ColumnType } from 'antd/lib/table'

const columns: ColumnType<any>[] = [
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
      return (
        <Space size="small">
          <IconLink icon={<StopOutlined />} label="停用" color="red" />
          <IconLink icon={<EditFilled />} label="編輯" />
          <IconLink icon={<ClockCircleOutlined />} label="歷程" />
        </Space>
      )
    },
    width: 90,
  },
]
const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} />
}

export default TableData
