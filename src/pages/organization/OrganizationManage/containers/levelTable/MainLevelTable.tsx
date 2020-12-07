import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { ColumnsGenerator } from '@/types'
import { toDateTime } from '@/utils/transfer'
import { EditOutlined, LockOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { useTablePicker } from '../TablePickerProvider'

interface TableItem {
  id: number
  account: string
  parent: string
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

const createColumns: ColumnsGenerator<TableItem> = (data) => {
  return [
    { title: '階層', render: (_, row) => row.account, width: 100 },
    {
      title: '上層',
      render: (_, row) => {
        const { setCurrentTable } = useTablePicker()
        return (
          <a className="link" onClick={(e) => setCurrentTable('top')}>
            {row.parent}
          </a>
        )
      },
      width: 100,
    },
    {
      title: '下層',
      render: (_, row) => {
        const { setCurrentTable } = useTablePicker()
        return (
          <a className="link" onClick={(e) => setCurrentTable('member')}>
            {row.childCount}
          </a>
        )
      },
      width: 100,
    },
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

const data: TableItem[] = [...Array(5)].map((_, i) => ({
  id: i,
  account: 'abbc',
  parent: 'kk123',
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
const MainLevelTable: React.FC = () => {
  return (
    <>
      <h3>階層列表</h3>
      <TableSets<TableItem>
        createColumns={createColumns}
        data={data}
        scroll={{ x: 1500 }}
      />
    </>
  )
}

export default MainLevelTable
