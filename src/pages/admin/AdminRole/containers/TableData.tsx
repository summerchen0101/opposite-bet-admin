import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { StopOutlined, EditFilled, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Text } from '@/components'

const columns = [
  {
    title: '角色名稱',
    dataIndex: 'account',
    width: 100,
    render: () => '管理員',
  },
  {
    title: '人數',
    dataIndex: 'firstDepositTotal',
    width: 140,
    render: () => 10,
  },
  {
    title: '創建時間',
    dataIndex: 'onceAgainDepositCount',
    width: 120,
    render: () => '2020-10-15 13:28:28',
  },
  {
    title: '創建者',
    dataIndex: 'onceAgainDepositTotal',
    width: 140,
    render: () => 'flora',
  },
  {
    title: '狀態',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => <Text color="success">啟用</Text>,
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
          <IconLink icon={<StopOutlined />} label="停用" color="red" />
          <IconLink icon={<EditFilled />} label="編輯" />
        </Space>
      )
    },
    width: 70,
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
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
