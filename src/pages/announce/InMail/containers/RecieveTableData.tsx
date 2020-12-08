import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import Text from '@/components/Text'
import { toDateTime } from '@/utils/transfer'
import { DeleteOutlined, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: '標題',
    width: 180,
    render: (_, row) => '我無法儲值',
  },
  {
    title: '寄件人',
    width: 120,
    render: (_, row) => 'peggy',
  },
  {
    title: '狀態',
    width: 100,
    render: (_, row) => <Text color="success">已讀</Text>,
  },
  {
    title: '信件種類',
    width: 100,
    render: (_, row) => '意見反應',
  },
  {
    title: '發送時間',
    render: (_, row) => toDateTime(Date.now()),
    width: 140,
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
          <IconLink icon={<DeleteOutlined />} label="刪除" />
        </Space>
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
