import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'

const columns = [
  {
    title: '代理商',
    dataIndex: 'account',
    width: 100,
  },
  {
    title: '首次充值(筆)',
    dataIndex: 'firstDepositCount',
    width: 120,
  },
  {
    title: '首次充值加總(元)',
    dataIndex: 'firstDepositTotal',
    width: 140,
  },
  {
    title: '再次充值(筆)',
    dataIndex: 'onceAgainDepositCount',
    width: 120,
  },
  {
    title: '再次充值加總(元)',
    dataIndex: 'onceAgainDepositTotal',
    width: 140,
  },
  {
    title: '總充值(筆)',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => row.firstDepositCount + row.onceAgainDepositCount,
  },
  {
    title: '總充值加總(元)',
    dataIndex: 'depositTotal',
    width: 140,
    render: (_, row) => row.firstDepositTotal + row.onceAgainDepositTotal,
  },
  {
    title: '首次提現(筆)',
    dataIndex: 'firstWithdrawalCount',
    width: 120,
  },
  {
    title: '首次提現加總(元)',
    dataIndex: 'firstWithdrawalTotal',
    width: 140,
  },
  {
    title: '再次提現(筆)',
    dataIndex: 'onceAgainWithdrawalCount',
    width: 120,
  },
  {
    title: '再次提現加總(元)',
    dataIndex: 'onceAgainWithdrawalTotal',
    width: 140,
  },
  {
    title: '總提現(筆)',
    dataIndex: 'withdrawalCount',
    width: 120,
    render: (_, row) => row.firstWithdrawalCount + row.onceAgainWithdrawalCount,
  },
  {
    title: '總提現加總(元)',
    dataIndex: 'withdrawalTotal',
    width: 140,
    render: (_, row) => row.firstWithdrawalTotal + row.onceAgainWithdrawalTotal,
  },
  {
    title: '總登入人數',
    dataIndex: 'loginCount',
    width: 120,
  },
  {
    title: '註冊人數',
    dataIndex: 'registerCount',
    width: 120,
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
