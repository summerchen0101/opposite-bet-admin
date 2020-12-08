import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'

const columns = [
  {
    title: '投注資訊',
    width: 100,
    children: [
      {
        title: '帳號/名稱',
        dataIndex: 'account',
        allowFiltered: true,
        width: 100,
      },
      {
        title: '結算額',
        dataIndex: 'firstDepositCount',
        allowFiltered: true,
        width: 120,
        render: (_, row) => '-',
      },
    ],
  },

  {
    title: '本層總額',
    width: 140,
    children: [
      {
        title: '佔成金額',
        dataIndex: 'firstDepositTotal',
        allowFiltered: true,
        width: 140,
        render: (_, row) => '-',
      },
      {
        title: '手續費',
        dataIndex: 'onceAgainDepositCount',
        allowFiltered: true,
        width: 120,
        render: (_, row) => '-',
      },
    ],
  },
  {
    title: '下層總額',
    width: 140,
    children: [
      {
        title: '佔成金額',
        dataIndex: 'firstDepositTotal',
        allowFiltered: true,
        width: 140,
        render: (_, row) => '-',
      },
      {
        title: '手續費',
        dataIndex: 'onceAgainDepositCount',
        allowFiltered: true,
        width: 120,
        render: (_, row) => '-',
      },
    ],
  },

  {
    title: '應交收額',
    render: (_, row) => '-',
    width: 140,
  },
  {
    title: '已交收額',
    width: 120,
    render: (_, row) => '-',
  },

  {
    title: '交收紀錄',
    width: 120,
    children: [
      {
        title: '未交收額',
        dataIndex: 'depositTotal',
        allowFiltered: true,
        width: 140,
        render: (_, row) => '-',
      },
      {
        title: '未結算額',
        dataIndex: 'firstWithdrawalCount',
        allowFiltered: true,
        width: 120,
        render: (_, row) => '-',
      },
      {
        title: '結算次數',
        dataIndex: 'firstWithdrawalTotal',
        allowFiltered: true,
        render: (_, row) => '-',
      },
    ],
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
        <Button size="small" type="primary">
          結算
        </Button>
      )
    },
    width: 70,
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
