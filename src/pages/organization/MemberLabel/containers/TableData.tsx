import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, EditFilled, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { MemberLabelDetail } from '@/pages/organization/routes'

const columns = [
  {
    title: '標籤名稱',
    width: 150,
    render: (_, row) => '危險客戶',
  },
  {
    title: '說明',
    width: 180,
    render: (_, row) => '-',
  },
  {
    title: '會員數',
    width: 140,
    render: (_, row) => <Link to={MemberLabelDetail.path}>30</Link>,
  },
  {
    title: '更新人員',
    render: (_, row) => 'summer',
    width: 140,
  },
  {
    title: '更新時間',
    render: (_, row) => '2020-12-12 10:49',
    width: 180,
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
