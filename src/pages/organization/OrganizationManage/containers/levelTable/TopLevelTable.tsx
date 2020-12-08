import { TableSets, Text, IconLink } from '@/components'
import { useAppDispatch } from '@/store'
import { ColumnsGenerator } from '@/types'
import { toDateTime } from '@/utils/transfer'
import { EditOutlined, LockOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleLoginHistoryModal, toggleWhiteListModal } from '../../reducer'
import { useTablePicker } from '../TablePickerProvider'

interface TableItem {
  id: number
  account: string
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
      title: '階層資訊',
      children: [
        {
          title: '廠商',
          render: (_, row) => row.account,
          width: 100,
        },
        {
          title: '下層',
          render: (_, row) => {
            const { setCurrentTable } = useTablePicker()
            return (
              <a onClick={(e) => setCurrentTable('main')}>
                {row.childCount}
              </a>
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
        {
          title: '白名單',
          render: (_, row) => {
            const dispatch = useDispatch()
            return (
              <a

                onClick={(e) => dispatch(toggleWhiteListModal(true))}
              >
                {row.whiteIPCount}
              </a>
            )
          },
          width: 100,
        },
      ],
    },
    {
      title: '登入資訊',
      children: [
        { title: '失敗次數', render: (_, row) => row.failTimes, width: 100 },
        {
          title: '註冊/最後登入',
          render: (_, row) => {
            const dispatch = useDispatch()
            return (
              <>
                註冊：{toDateTime(row.registerAt)} <br />
                登入：{toDateTime(row.loginAt)} <br />
                登入IP：
                <a

                  onClick={(e) => dispatch(toggleLoginHistoryModal(true))}
                >
                  {row.loginIP}
                </a>
              </>
            )
          },
          width: 230,
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
  pendingPoints: 12000,
  bettingPoints: 4000,
  memberCount: 10,
  memberPoints: 232404,
  failTimes: 2,
  registerAt: new Date().getTime(),
  loginAt: new Date().getTime(),
  loginIP: '0.0.0.0',
  updatedBy: 'gogoro',
  updatedAt: new Date().getTime(),
}))
const TopLevelTable: React.FC = () => {
  return (
    <>
      <h3>廠商列表</h3>
      <TableSets<TableItem>
        createColumns={createColumns}
        data={data}
        scroll={{ x: 1500 }}
      />
    </>
  )
}

export default TopLevelTable
