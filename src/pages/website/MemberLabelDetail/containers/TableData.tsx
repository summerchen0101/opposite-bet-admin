import { Text, TableSets, IconLink } from '@/components'
import { toDateTime } from '@/utils/transfer'
import { DeleteOutlined, EditFilled, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

interface TableItem {
  id: number
  account: string
  nick: string
  parent: { nick: string; account: string }
  role: string
  label: string[]
  allowLogin: boolean
  allowBet: boolean
  point: number
  status: number
  failTimes: number
  registerAt: number
  loginAt: number
  loginIp: string
  updatedAt: number
  updatedBy: string
}

const columns: ColumnsType<TableItem> = [
  {
    title: '帳號/名稱',
    width: 100,
    render: (_, row) => (
      <>
        {row.account}
        <br />
        {row.nick}
      </>
    ),
  },
  {
    title: '上層',
    width: 120,
    render: (_, row) => (
      <>
        {row.parent.nick}
        <br />
        {row.parent.account}
      </>
    ),
  },
  {
    title: '角色',
    width: 140,
    render: (_, row) => row.role,
  },
  {
    title: '標籤',
    width: 120,
    render: (_, row) => row.label.join(', '),
  },
  {
    title: '允許登入',
    width: 80,
    render: (_, row) => (row.allowLogin ? '是' : '否'),
  },
  {
    title: '允許投注',
    width: 80,
    render: (_, row) => (row.allowBet ? '是' : '否'),
  },
  {
    title: '可用餘額',
    width: 120,
    render: (_, row) => row.point,
  },
  {
    title: '狀態',
    width: 80,
    render: (_, row) =>
      row.status === 1 ? (
        <Text color="success">啟用</Text>
      ) : (
        <Text color="danger">停用</Text>
      ),
  },
  {
    title: '失敗次數',
    width: 80,
    render: (_, row) => row.failTimes,
  },
  {
    title: '註冊/最後登入/IP',
    width: 180,
    render: (_, row) => (
      <>
        {toDateTime(row.registerAt)}
        <br />
        {toDateTime(row.loginAt)}
        <br />
        {row.loginIp}
      </>
    ),
  },
  {
    title: '更新人員/時間',
    width: 180,
    render: (_, row) => (
      <>
        {row.updatedBy}
        <br />
        {toDateTime(row.updatedAt)}
      </>
    ),
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
          <IconLink icon={<EditFilled />} label="編輯" />
          <IconLink icon={<DeleteOutlined />} label="刪除" />
        </Space>
      )
    },
    width: 80,
  },
]

const data: TableItem[] = [...Array(5)].map((t, i) => ({
  id: i,
  account: 'gogoro',
  nick: 'GOGORO',
  parent: { nick: '夏天', account: 'summer' },
  role: '會員',
  label: ['aaa', 'bbbb'],
  allowLogin: true,
  allowBet: true,
  point: 2000,
  status: 1,
  failTimes: 3,
  registerAt: Date.now(),
  loginAt: Date.now(),
  loginIp: '0.0.0.0',
  updatedAt: Date.now(),
  updatedBy: 'hahaha',
}))
const TableData: React.FC = () => {
  return (
    <>
      <h5 className="mb-2">危險客戶 (5)</h5>
      <TableSets columns={columns} data={data} scroll={{ x: 1800 }} />
    </>
  )
}

export default TableData
