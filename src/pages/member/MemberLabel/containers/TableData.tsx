import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, EditFilled, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: '標籤名稱',
    dataIndex: 'account',
    width: 100,
    render: (_, row) => '危險客戶',
  },
  {
    title: '說明',
    dataIndex: 'firstDepositCount',
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '會員數',
    dataIndex: 'firstDepositTotal',
    width: 140,
    render: (_, row) => 80,
  },
  {
    title: '備註',
    dataIndex: 'onceAgainDepositCount',
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '更新人員',
    dataIndex: 'onceAgainDepositTotal',
    width: 140,
    render: (_, row) => 'summer',
  },
  {
    title: '更新時間',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => '2020-12-12 10:49',
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
          <IconLink icon={<DeleteOutlined />} label="刪除" />
        </Space>
      )
    },
    width: 80,
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
