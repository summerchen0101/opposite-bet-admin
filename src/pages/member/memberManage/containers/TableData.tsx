import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { FilterFilled } from '@ant-design/icons'
import { Checkbox, Space } from 'antd'
import React from 'react'
import { EditFilled, DeleteOutlined } from '@ant-design/icons'
import { IconButton } from '@/components'

const columns = [
  {
    title: '會員帳號',
    dataIndex: 'account',
    allowFiltered: true,
    width: 100,
  },
  {
    title: '真實姓名',
    dataIndex: 'firstDepositCount',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '角色',
    dataIndex: 'firstDepositTotal',
    allowFiltered: true,
    width: 140,
  },
  {
    title: '標籤',
    dataIndex: 'onceAgainDepositCount',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '總餘額',
    dataIndex: 'onceAgainDepositTotal',
    allowFiltered: true,
    width: 140,
  },
  {
    title: '總充值',
    dataIndex: 'depositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => row.firstDepositCount + row.onceAgainDepositCount,
  },
  {
    title: '總提現',
    dataIndex: 'depositTotal',
    allowFiltered: true,
    width: 140,
    render: (_, row) => row.firstDepositTotal + row.onceAgainDepositTotal,
  },
  {
    title: '註冊時間',
    dataIndex: 'firstWithdrawalCount',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '登入時間',
    dataIndex: 'firstWithdrawalTotal',
    allowFiltered: true,
    width: 140,
  },
  {
    title: '狀態',
    dataIndex: 'onceAgainWithdrawalCount',
    allowFiltered: true,
    width: 120,
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
          <IconLink icon={<DeleteOutlined />} label="停用" />
        </Space>
      )
    },
    width: 80,
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
