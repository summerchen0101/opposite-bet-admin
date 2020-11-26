import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'

const columns = [
  {
    title: '公司',
    dataIndex: 'account',
    width: 100,
    render: () => '-',
  },
  {
    title: '遊戲站',
    dataIndex: 'firstDepositCount',
    width: 120,
    children: [
      {
        title: '遊戲平台',
        dataIndex: 'onceAgainDepositCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '遊戲類型',
        dataIndex: 'onceAgainDepositTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
    ],
  },
  {
    title: '注單統計',
    dataIndex: 'firstDepositTotal',
    width: 140,
    children: [
      {
        title: '筆數',
        dataIndex: 'depositCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '注額',
        dataIndex: 'depositTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
      {
        title: '中獎金額',
        dataIndex: 'firstWithdrawalCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '彩金',
        dataIndex: 'firstWithdrawalTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
    ],
  },

  {
    title: '會員',
    dataIndex: 'onceAgainWithdrawalCount',
    width: 120,
    children: [
      {
        title: '會員退水',
        dataIndex: 'onceAgainWithdrawalTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
      {
        title: '會員紅利',
        dataIndex: 'withdrawalCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '會員小計',
        dataIndex: 'withdrawalTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
      {
        title: '佔成(%)',
        dataIndex: 'loginCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '佔比額度',
        dataIndex: 'registerCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '退水',
        dataIndex: 'loginCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '退佣',
        dataIndex: 'registerCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
    ],
  },
  {
    title: '成本支出',
    dataIndex: 'firstDepositTotal',
    width: 140,
    children: [
      {
        title: '代理退水',
        dataIndex: 'depositCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '會員退水',
        dataIndex: 'depositTotal',
        allowFiltered: true,
        width: 140,
        render: (_, row) => row.firstDepositTotal + row.onceAgainDepositTotal,
      },
      {
        title: '會員紅利',
        dataIndex: 'firstWithdrawalCount',
        allowFiltered: true,
        render: () => '-',
      },
    ],
  },
  {
    title: '小計',
    dataIndex: 'firstWithdrawalTotal',
    width: 120,
    render: () => '-',
  },

  {
    title: () => <IconLink icon={<FilterFilled />} />,
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    width: 40,
  },
]

const data = []
for (let i = 1; i <= 10; i++) {
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
