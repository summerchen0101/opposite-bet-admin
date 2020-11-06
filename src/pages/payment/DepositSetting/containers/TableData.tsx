import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  EditFilled,
  FilterFilled,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Text } from '@/components'

const columns = [
  {
    title: '編號',
    dataIndex: 'account',
    allowFiltered: true,
    width: 100,
    render: () => '112',
  },
  {
    title: '名稱',
    dataIndex: 'firstDepositCount',
    allowFiltered: true,
    width: 120,
    render: () => '存入',
  },
  {
    title: '套用代理',
    dataIndex: 'firstDepositCount',
    allowFiltered: true,
    width: 120,
    render: () => '-',
  },
  {
    title: '上限',
    dataIndex: 'firstDepositTotal',
    allowFiltered: true,
    width: 140,
    render: () => '-',
  },
  {
    title: '下限',
    dataIndex: 'onceAgainDepositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '控端提示',
    dataIndex: 'onceAgainDepositTotal',
    allowFiltered: true,
    width: 140,
    render: (_, row) => '-',
  },
  {
    title: '銀行資料',
    dataIndex: 'depositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '收款人',
    dataIndex: 'depositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '開戶網點',
    dataIndex: 'depositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '帳號',
    dataIndex: 'depositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => 'gogog1',
  },
  {
    title: '更新人員',
    dataIndex: 'firstWithdrawalCount',
    allowFiltered: true,
    width: 120,
    render: () => 'flora',
  },
  {
    title: '更新時間',
    dataIndex: 'depositTotal',
    allowFiltered: true,
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
          <IconLink icon={<CheckCircleOutlined />} label="啟用" color="green" />
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
