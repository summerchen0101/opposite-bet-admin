import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { EditFilled, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: '編號',
    dataIndex: 'account',
    allowFiltered: true,
    width: 100,
  },
  {
    title: '單號',
    dataIndex: 'firstDepositCount',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '設定名稱',
    dataIndex: 'firstDepositTotal',
    allowFiltered: true,
    width: 140,
  },
  {
    title: '狀態',
    dataIndex: 'onceAgainDepositCount',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '帳號/名稱',
    dataIndex: 'onceAgainDepositTotal',
    allowFiltered: true,
    width: 140,
  },
  {
    title: '初始金額',
    dataIndex: 'depositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => row.firstDepositCount + row.onceAgainDepositCount,
  },
  {
    title: '實際入款金額',
    dataIndex: 'depositTotal',
    allowFiltered: true,
    width: 140,
    render: (_, row) => row.firstDepositTotal + row.onceAgainDepositTotal,
  },
  {
    title: '優惠',
    dataIndex: 'firstWithdrawalCount',
    allowFiltered: true,
    width: 120,
  },
  {
    title: () => (
      <>
        申請時間
        <br />
        交易完成時間(GMT+8)
      </>
    ),
    dataIndex: 'firstWithdrawalTotal',
    allowFiltered: true,
    width: 200,
  },
  {
    title: () => (
      <>
        更新人員
        <br />
        更新時間
      </>
    ),
    dataIndex: 'onceAgainWithdrawalCount',
    allowFiltered: true,
    width: 200,
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
          <IconLink icon={<EditFilled />} label="手動" />
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
