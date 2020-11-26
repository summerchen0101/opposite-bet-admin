import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  CheckOutlined,
  EditFilled,
  FilterFilled,
  DeleteOutlined,
} from '@ant-design/icons'
import { Space, Switch } from 'antd'
import React from 'react'
import { Text } from '@/components'

const columns = [
  {
    title: '標題',
    dataIndex: 'account',
    width: 250,
    render: () => <a>大特價大特價大特價</a>,
  },
  {
    title: '裝置',
    dataIndex: 'firstDepositTotal',
    width: 140,
    render: () => '-',
  },
  {
    title: '前台顯示',
    dataIndex: 'onceAgainDepositCount',
    width: 120,
    render: () => <Text color="danger">關閉</Text>,
  },
  {
    title: '狀態',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => <Text>進行中</Text>,
  },
  {
    title: '發布時間',
    dataIndex: 'depositTotal',
    width: 200,
    render: (_, row) => '2019-07-01 10:54:36',
  },
  {
    title: '預約下架時間',
    dataIndex: 'depositTotal',
    width: 200,
    render: (_, row) => '2019-07-01 10:54:36',
  },
  {
    title: '更新人員',
    dataIndex: 'firstWithdrawalCount',
    width: 120,
    render: () => 'flora',
  },
  {
    title: '更新時間',
    dataIndex: 'depositTotal',
    width: 200,
    render: (_, row) => '2019-07-01 10:54:36',
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
          <IconLink icon={<CheckOutlined />} label="前台顯示" color="green" />
          <IconLink icon={<EditFilled />} label="編輯" />
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
