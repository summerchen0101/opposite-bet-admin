import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  EditFilled,
  ClockCircleOutlined,
  FilterFilled,
  StopOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: '管理者帳號',
    dataIndex: 'account',
    allowFiltered: true,
    width: 120,
    render: () => <a>PHMQ647</a>,
  },
  {
    title: '真實姓名',
    dataIndex: 'firstDepositCount',
    allowFiltered: true,
    width: 120,
    render: () => '陳大明',
  },
  {
    title: '管理者角色',
    dataIndex: 'firstDepositTotal',
    allowFiltered: true,
    width: 140,
    render: () => 'admin',
  },
  {
    title: '上次登入時間',
    dataIndex: 'onceAgainDepositCount',
    allowFiltered: true,
    width: 200,
    render: () => '2020-10-15 13:28:28',
  },
  {
    title: '上次登入IP',
    dataIndex: 'onceAgainDepositTotal',
    allowFiltered: true,
    width: 140,
    render: () => '0.0.0.0',
  },
  {
    title: '啟用狀態',
    dataIndex: 'depositTotal',
    allowFiltered: true,
    width: 140,
    render: () => '啟用',
  },
  {
    title: '上線狀態',
    dataIndex: 'firstWithdrawalCount',
    allowFiltered: true,
    width: 120,
    render: () => '線上',
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

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    account: 'aaaa(小白)',
    firstDepositCount: 5,
    firstDepositTotal: 20320,
    onceAgainDepositCount: 10,
    onceAgainDepositTotal: 41232,
    firstWithdrawalCount: 5,
    firstWithdrawalTotal: 20320,
    onceAgainWithdrawalCount: 10,
    onceAgainWithdrawalTotal: 41232,
    loginCount: 20,
    registerCount: 3,
  })
}
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
