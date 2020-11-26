import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { FilterFilled } from '@ant-design/icons'
import React from 'react'

const columns = [
  {
    title: '管理者帳號',
    dataIndex: 'account',
    width: 140,
    render: () => 'PHMQ647',
  },
  {
    title: '日期',
    dataIndex: 'firstDepositCount',
    width: 180,
    render: () => '2020-10-15 13:28:28',
  },
  {
    title: '變動',
    dataIndex: 'firstDepositTotal',
    width: 300,
    render: () => 'Login successful. (loginip:24.111.96.143/32)',
  },
  {
    title: 'IP位址',
    dataIndex: 'onceAgainDepositCount',
    width: 120,
    render: () => '0.0.0.0',
  },
  {
    title: '更新人員',
    dataIndex: 'onceAgainDepositTotal',
    width: 140,
    render: () => 'flora',
  },
  {
    title: () => <IconLink icon={<FilterFilled />} />,
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    width: 40,
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    id: i,
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
