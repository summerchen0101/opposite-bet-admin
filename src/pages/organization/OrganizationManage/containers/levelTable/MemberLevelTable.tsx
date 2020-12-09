import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { useAppDispatch } from '@/store'
import { ColumnsGenerator } from '@/types'
import { toDateTime } from '@/utils/transfer'
import { EditOutlined, LockOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toggleInvitedFormModal } from '../../reducer'

interface TableItem {
  id: number
  account: string
  nick: string
  root: {
    nick: string
    account: string
  }
  parent: {
    nick: string
    account: string
  }
  labels: string[]
  status: boolean
  points: number
  failTimes: number
  registerAt: number
  loginAt: number
  loginIP: string
  updatedBy: string
  updatedAt: number
  memberLevel: number
  allowLogin: boolean
  allowBetting: boolean
}

const createColumns: ColumnsGenerator<TableItem> = (data) => {
  return [
    { title: '廠商', render: (_, row) => 'qqaa[QQA]', width: 100 },
    {
      title: '會員',
      render: (_, row) => `${row.account}[${row.nick}]`,
      width: 100,
    },
    { title: '用戶類型', render: (_, row) => '一級會員', width: 100 },
    { title: '標籤', render: (_, row) => '危險客戶、同IP', width: 150 },
    { title: '允許登入', render: (_, row) => '是', width: 100 },
    { title: '允許投注', render: (_, row) => '是', width: 100 },
    { title: '可用餘額', render: (_, row) => row.points, width: 100 },
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
      render: (_, row) => {
        const dispatch = useAppDispatch()
        const handleShare = () => {
          dispatch(toggleInvitedFormModal(true))
        }
        return (
          <Space>
            <IconLink icon={<EditOutlined />} />
            <IconLink icon={<LockOutlined />} />
            <IconLink icon={<ShareAltOutlined />} onClick={handleShare} />
          </Space>
        )
      },
      width: 100,
    },
  ]
}

const data = [...Array(5)].map((_, i) => ({
  id: i,
  account: 'abbc',
  nick: 'ABBC',
  root: {
    account: 'gogo123',
    nick: 'GOGO',
  },
  parent: {
    account: 'gogo123',
    nick: 'GOGO',
  },
  labels: [],
  allowLogin: true,
  allowBetting: true,
  memberLevel: 1,
  status: true,
  points: 32200,
  failTimes: 2,
  registerAt: new Date().getTime(),
  loginAt: new Date().getTime(),
  loginIP: '0.0.0.0',
  updatedBy: 'gogoro',
  updatedAt: new Date().getTime(),
}))
const MemberLevelTable: React.FC = () => {
  return (
    <>
      <h3>會員列表</h3>
      <TableSets<TableItem>
        createColumns={createColumns}
        data={data}
        scroll={{ x: 1500 }}
      />
    </>
  )
}

export default MemberLevelTable
