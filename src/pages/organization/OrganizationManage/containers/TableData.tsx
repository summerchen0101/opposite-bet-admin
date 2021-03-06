import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { ColumnsGenerator } from '@/types'
import { toDateTime } from '@/utils/transfer'
import { EditOutlined, LockOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

interface TableItem {
  id: number
  account: string
  childCount: number
  subAccCount: number
  status: boolean
  whiteIPCount: number
  points: number
  memberCount: number
  memberPoints: number
  failTimes: number
  registerAt: number
  loginAt: number
  loginIP: string
  updatedBy: string
  updatedAt: number
}

const createColumns = (
  level: number,
  data: TableItem[],
): ColumnsType<TableItem> => {
  return [
    { title: `廠商_${level}`, render: (_, row) => row.account, width: 100 },
    { title: '下層', render: (_, row) => row.childCount, width: 100 },
    { title: '子帳號', render: (_, row) => row.subAccCount, width: 100 },
    { title: '啟/停用', render: (_, row) => row.status, width: 100 },
    { title: '白名單', render: (_, row) => row.whiteIPCount, width: 100 },
    { title: '廠商餘額', render: (_, row) => row.points, width: 100 },
    { title: '會員人數', render: (_, row) => row.memberCount, width: 100 },
    { title: '會員餘額', render: (_, row) => row.memberPoints, width: 100 },
    { title: '失敗次數', render: (_, row) => row.failTimes, width: 100 },
    {
      title: '註冊/最後登入',
      render: (_, row) => (
        <>
          註冊：{toDateTime(row.registerAt)} <br />
          登入：{toDateTime(row.loginAt)} <br />
          登入IP：{row.loginIP}
        </>
      ),
      width: 230,
    },
    {
      title: '更新人員/時間',
      render: (_, row) => (
        <>
          {row.updatedBy} <br />
          {toDateTime(row.updatedAt)}
        </>
      ),
      width: 200,
    },
    {
      title: '操作',
      render: (_, row) => (
        <Space>
          <IconLink icon={<EditOutlined />} />
          <IconLink icon={<LockOutlined />} />
        </Space>
      ),
      width: 100,
    },
  ]
}

const data = [...Array(5)].map((_, i) => ({
  id: i,
  account: 'abbc',
  childCount: 5,
  subAccCount: 2,
  status: true,
  whiteIPCount: 3,
  points: 32200,
  memberCount: 10,
  memberPoints: 232404,
  failTimes: 2,
  registerAt: new Date().getTime(),
  loginAt: new Date().getTime(),
  loginIP: '0.0.0.0',
  updatedBy: 'gogoro',
  updatedAt: new Date().getTime(),
}))
const TableData: React.FC = () => {
  const currentLevel = 1
  return (
    <>
      <h3>廠商列表</h3>
      <TableSets<TableItem>
        columns={createColumns(currentLevel, data)}
        data={data}
        scroll={{ x: 1500 }}
      />
    </>
  )
}

export default TableData
