import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  DeleteOutlined,
  FilterFilled,
  FormOutlined,
  CopyOutlined,
} from '@ant-design/icons'
import { Space, Switch } from 'antd'
import React from 'react'

const columns = [
  {
    title: '會員帳號',
    dataIndex: 'account',
    width: 100,
    render: () => 'abc222',
  },
  {
    title: '角色',
    dataIndex: 'firstDepositCount',
    width: 120,
    render: () => '代理商',
  },
  {
    title: '允許註冊',
    dataIndex: 'firstDepositCount',
    width: 120,
    render: () => <Switch defaultChecked />,
  },
  {
    title: '邀請碼',
    dataIndex: 'firstDepositTotal',
    width: 160,
    render: () => (
      <Space>
        <span>5894wef98</span>
        <IconLink icon={<CopyOutlined />} label="複製" />
      </Space>
    ),
  },
  {
    title: '連結位置',
    dataIndex: 'firstDepositTotal',
    width: 250,
    render: () => (
      <Space>
        <span>https://google/5894wef98</span>
        <IconLink icon={<CopyOutlined />} label="複製" />
      </Space>
    ),
  },
  {
    title: '備註',
    dataIndex: 'firstDepositTotal',
    width: 140,
    render: () => '支付寶',
  },
  {
    title: '訪問次數',
    dataIndex: 'firstDepositTotal',
    width: 140,
    render: () => '支付寶',
  },
  {
    title: '完成註冊',
    dataIndex: 'firstDepositTotal',
    width: 140,
    render: () => '支付寶',
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
          <IconLink icon={<FormOutlined />} label="備註" />
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
