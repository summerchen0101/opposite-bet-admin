import { TableSets, Text, IconLink } from '@/components'
import { useAppDispatch } from '@/store'
import { ColumnsGenerator } from '@/types'
import { toDateTime } from '@/utils/transfer'
import { EditOutlined, LockOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import {
  setCurrentLevel,
  toggleInvitedFormModal,
  togglePwModal,
} from '../../reducer'
import { useTablePicker } from '../TablePickerProvider'
import qs from 'qs'
import { Link, useLocation } from 'react-router-dom'

interface TableItem {
  id: number
  account: string
  nick: string
  parent: {
    nick: string
    account: string
  }
  role: string
  childCount: number
  subAccCount: number
  status: boolean
  whiteIPCount: number
  pendingPoints: number
  bettingPoints: number
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
    {
      title: '組織資訊',
      children: [
        {
          title: '廠商',
          render: (_, row) => row.account,
          width: 100,
        },
        {
          title: '總代',
          render: (_, row) => (
            <>
              {row.account}[{row.nick}]
            </>
          ),
          width: 150,
        },
        {
          title: '上層',
          render: (_, row) => {
            const location = useLocation()
            return (
              <Link to={location.pathname + '?level=' + 1}>
                {row.parent.account}[{row.parent.nick}]
              </Link>
            )
          },
          width: 150,
        },
        {
          title: '下層',
          render: (_, row) => {
            const location = useLocation()
            return (
              <Link to={location.pathname + '?level=' + 3}>
                {row.childCount}
              </Link>
            )
          },
          width: 100,
        },
        { title: '子帳號', render: (_, row) => row.subAccCount, width: 100 },
      ],
    },
    {
      title: '會員資訊',
      children: [
        {
          title: '未結注額',
          render: (_, row) => row.pendingPoints,
          width: 100,
        },
        { title: '已下注', render: (_, row) => row.bettingPoints, width: 100 },
        { title: '人數', render: (_, row) => row.memberCount, width: 100 },
        { title: '餘額', render: (_, row) => row.memberPoints, width: 100 },
      ],
    },
    {
      title: '狀態',
      children: [
        {
          title: '啟/停用',
          render: (_, row) =>
            row.status ? (
              <Text color="success">啟用</Text>
            ) : (
              <Text color="danger">停用</Text>
            ),
          width: 100,
        },
        { title: '白名單', render: (_, row) => row.whiteIPCount, width: 100 },
      ],
    },

    {
      title: '登入資訊',
      children: [
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
          width: 250,
        },
      ],
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
        const handlePwChange = () => dispatch(togglePwModal(true))
        return (
          <Space>
            <IconLink icon={<EditOutlined />} />
            <IconLink icon={<LockOutlined />} onClick={handlePwChange} />
            <IconLink icon={<ShareAltOutlined />} onClick={handleShare} />
          </Space>
        )
      },
      width: 100,
    },
  ]
}

const data: TableItem[] = [...Array(5)].map((_, i) => ({
  id: i,
  role: 'b',
  account: 'abbc',
  nick: 'ABBC',
  parent: {
    nick: '可愛人',
    account: 'cute123',
  },
  childCount: 5,
  subAccCount: 2,
  status: true,
  whiteIPCount: 3,
  pendingPoints: 1000,
  bettingPoints: 5000,
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
      <p>cntd [廠商] {`>`} cute123 [股東]</p>
      <TableSets<TableItem>
        createColumns={createColumns}
        data={data}
        scroll={{ x: 1800 }}
      />
    </>
  )
}

export default MainLevelTable
