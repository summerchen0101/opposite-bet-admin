import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import Text from '@/components/Text'
import { FilterFilled } from '@ant-design/icons'
import { Popover, Space } from 'antd'
import React from 'react'
import {
  PlusCircleOutlined,
  EditFilled,
  PieChartOutlined,
  LockOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
  toggleLoginHistoryModal,
  togglePercentageModal,
  togglePwModal,
  toggleTradeHistoryModal,
  toggleWhiteListModal,
} from '../reducer'
import { useTypedSelector, selectTableData } from '../selectors'
import { ColumnsType } from 'antd/lib/table'
import * as OrgManage from '../types'
import { useAppDispatch } from '@/store'

const columns: ColumnsType<OrgManage.DataTableItem> = [
  {
    title: '組織資訊',
    dataIndex: 'account',
    width: 100,
    children: [
      {
        title: '加盟商',
        width: 120,
        render: (_, row) => row.account,
      },
      {
        title: '帳號/名稱',
        width: 180,
        render: (_, row) => (
          <a>
            {row.account} [{row.name}]
          </a>
        ),
      },
      {
        title: '角色',
        width: 120,
        render: (_, row) => row.role,
      },
      {
        title: '上層',
        width: '180px',
        render: (_, row) => row.parent,
      },
      {
        title: '下層',
        width: '100px',
        render: (_, row) => <a>{row.childCount}</a>,
      },
      {
        title: '子帳號',
        width: '100px',
        render: (_, row) => row.subAccCount,
      },
    ],
  },

  {
    title: '錢包',
    width: 140,
    children: [
      {
        title: '可用餘額',
        width: 120,
        render: (_, row) => {
          const dispatch = useDispatch()
          const onClick = () => dispatch(toggleTradeHistoryModal(true))
          return <a onClick={onClick}>{row.points}</a>
        },
      },
      {
        title: '結算金',
        width: 140,
        render: (_, row) => {
          const dispatch = useDispatch()
          const onClick = () => dispatch(toggleTradeHistoryModal(true))
          return <a onClick={onClick}>{row.bonus}</a>
        },
      },
    ],
  },

  {
    title: '狀態',
    width: 120,
    children: [
      {
        title: '啟/停用',
        dataIndex: 'onceAgainWithdrawalTotal',
        width: 140,
        render: (_, row) => {
          return row.status ? (
            <Text color="success">啟用</Text>
          ) : (
            <Text color="danger">關閉</Text>
          )
        },
      },
      {
        title: '白名單',
        width: 120,
        render: (_, row) => {
          const dispatch = useDispatch()
          const onClick = () => dispatch(toggleWhiteListModal(true))
          return <a onClick={onClick}>{row.whiteIpCount}</a>
        },
      },
    ],
  },

  {
    title: '會員資訊',
    width: 140,
    children: [
      {
        title: '人數',
        width: 120,
        render: (_, row) => row.memberCount,
      },
      {
        title: '餘額',
        width: 120,
        render: (_, row) => row.memberBalance,
      },
    ],
  },
  {
    title: '登入資訊',
    width: 140,
    children: [
      {
        title: '失敗次數',
        width: 120,
        render: (_, row) => row.failedLogin,
      },
      {
        title: '註冊 / 最後登入',
        width: '230px',
        render: (_, row) => {
          const dispatch = useDispatch()
          const onClick = () => dispatch(toggleLoginHistoryModal(true))
          return (
            <>
              註冊：{row.registerAt} <br />
              登入：{row.lastloginAt} <br />
              登入IP： <a onClick={onClick}>{row.lastLoginIp}</a>
            </>
          )
        },
      },
    ],
  },

  {
    title: () => (
      <>
        更新人員
        <br />
        更新時間
      </>
    ),
    width: '180px',
    render: (_, row) => (
      <>
        {row.updator}
        <br />
        {row.updatedAt}
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
      const dispatch = useAppDispatch()
      const handlePercentageClicked = () =>
        dispatch(togglePercentageModal(true))
      const handlePwModify = () => dispatch(togglePwModal(true))
      const handleCreateChild = () => {}
      return (
        <Space size="small">
          <IconLink
            icon={<PlusCircleOutlined />}
            label="新增下線"
            onClick={handleCreateChild}
          />
          <IconLink icon={<EditFilled />} label="編輯" />
          <IconLink
            icon={<PieChartOutlined />}
            label="佔成"
            onClick={handlePercentageClicked}
          />
          <IconLink
            icon={<LockOutlined />}
            label="修改密碼"
            onClick={handlePwModify}
          />
        </Space>
      )
    },
    width: '110px',
  },
]

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} />
}

export default TableData
