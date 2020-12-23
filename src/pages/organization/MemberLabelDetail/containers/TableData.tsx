import { IconLink, TableSets, Text } from '@/components'
import { toDateTime } from '@/utils/transfer'
import {
  DollarCircleOutlined,
  DownloadOutlined,
  EditOutlined,
  LockOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Button, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { useHistory } from 'react-router-dom'

interface TableItem {
  id: number
  account: string
  nick: string
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
    width: 120,
    render: (_, row) => (
      <>
        {row.account}[{row.nick}]
      </>
    ),
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
    title: '登入失敗',
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
    title: '操作',
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      return (
        <Space size="small">
          <Space>
            <IconLink icon={<EditOutlined />} label="編輯" />
            <IconLink icon={<DownloadOutlined />} label="充值紀錄" />
            <IconLink icon={<UploadOutlined />} label="提領紀錄" />
            <IconLink icon={<LockOutlined />} label="修改密碼" />
            <IconLink icon={<DollarCircleOutlined />} label="調節金額" />
          </Space>
        </Space>
      )
    },
    width: 80,
  },
]

const data: TableItem[] = [...Array(5)].map((t, i) => ({
  id: i,
  account: 'gogoro',
  nick: '陳',
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
  const history = useHistory()
  return (
    <>
      <Space className="mb-2">
        <Button onClick={() => history.goBack()}>回上頁</Button>
        <h3 className="mb-0">危險客戶 (5)</h3>
      </Space>
      <TableSets columns={columns} data={data} scroll={{ x: 1500 }} />
    </>
  )
}

export default TableData
