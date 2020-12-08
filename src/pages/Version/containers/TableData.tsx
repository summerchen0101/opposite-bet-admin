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
    width: 100,
  },
  {
    title: '首次充值(筆)',
    width: 120,
  },
  {
    title: '首次充值加總(元)',
    width: 140,
  },
  {
    title: '再次充值(筆)',
    width: 120,
  },
  {
    title: '再次充值加總(元)',
    render: (_, row) => '-',
    width: 140,
  },
  {
    title: '總充值(筆)',
    width: 120,
    render: (_, row) => row.firstDepositCount + row.onceAgainDepositCount,
  },
  {
    title: '總充值加總(元)',
    width: 140,
    render: (_, row) => row.firstDepositTotal + row.onceAgainDepositTotal,
  },
  {
    title: '首次提現(筆)',
    width: 120,
  },
  {
    title: '首次提現加總(元)',
    width: 140,
  },
  {
    title: '再次提現(筆)',
    width: 120,
  },
  {
    title: '再次提現加總(元)',
    width: 140,
  },
  {
    title: '總提現(筆)',
    width: 120,
    render: (_, row) => row.firstWithdrawalCount + row.onceAgainWithdrawalCount,
  },
  {
    title: '總提現加總(元)',
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

const data = [...Array(50)].map((t, i) => ({
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
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
