import { Text, IconLink, TableSets } from '@/components'
import { FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
const columns = [
  {
    title: '標題',
    width: 140,
    render: (_, row) => <a>如何儲值</a>,
  },
  {
    title: '另開視窗',
    width: 80,
    render: (_, row) => '是',
  },
  {
    title: '開始時間',
    width: 140,
    render: (_, row) => '2019-08-21 19:10:08',
  },
  {
    title: '結束時間',
    width: 140,
    render: (_, row) => '2019-08-21 19:10:08',
  },
  {
    title: '狀態',
    render: (_, row) => <Text color="success">啟動</Text>,
    width: 80,
  },
  {
    title: '更新人員',
    width: 100,
    render: (_, row) => 'summer',
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
