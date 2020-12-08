import { TableSets, Text, IconLink } from '@/components'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: '標題',
    width: 180,
    render: (_, row) => '反水活動修改',
  },
  {
    title: '公告種類',
    width: 120,
    render: (_, row) => '系統通知',
  },
  {
    title: '前台顯示',
    width: 100,
    render: (_, row) => <Text color="success">啟用</Text>,
  },
  {
    title: '期間',
    width: 180,
    render: (_, row) => (
      <>
        2019-07-01 10:54:36 <br />
        2019-07-01 10:54:36
      </>
    ),
  },
  {
    title: '更新人員',
    width: 120,
    render: (_, row) => 'flora',
  },
  {
    title: '更新時間',
    width: 180,
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
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      return (
        <Space size="small">
          <IconLink icon={<EditFilled />} label="編輯" />
          <IconLink icon={<DeleteOutlined />} label="刪除" />
        </Space>
      )
    },
    width: 100,
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
