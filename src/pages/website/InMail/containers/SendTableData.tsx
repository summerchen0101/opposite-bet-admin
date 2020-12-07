import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: '主題',
    dataIndex: 'account',
    width: 180,
    render: (_, row) => '反水活動修改',
  },
  {
    title: '收件人',
    dataIndex: 'firstDepositCount',
    width: 120,
    render: (_, row) => 'gogoro99',
  },
  {
    title: '收件人數量',
    dataIndex: 'firstDepositTotal',
    width: 100,
    render: (_, row) => 30,
  },
  {
    title: '讀取數量',
    dataIndex: 'onceAgainDepositCount',
    width: 100,
    render: (_, row) => 4,
  },
  {
    title: '發送時間',
    dataIndex: 'onceAgainDepositTotal',
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
