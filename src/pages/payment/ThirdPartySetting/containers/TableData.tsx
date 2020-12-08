import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  EditFilled,
  FilterFilled,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Text } from '@/components'

const columns = [
  {
    title: '編號',
    dataIndex: 'account',
    width: 100,
    render: (_, row) => '112',
  },
  {
    title: '金流平台',
    dataIndex: 'firstDepositCount',
    width: 150,
    render: (_, row) => '數支富(szfupay)',
  },
  {
    title: '金流類型',
    dataIndex: 'firstDepositCount',
    width: 120,
    render: (_, row) => '代碼繳費',
  },
  {
    title: '設定名稱',
    dataIndex: 'firstDepositTotal',
    width: 140,
    render: (_, row) => '支付寶',
  },
  {
    title: () => (
      <Space>
        <span>充值次數</span>
        <IconLink
          label="充值次數超過或等於自動停用"
          icon={<ExclamationCircleOutlined />}
        />
      </Space>
    ),
    dataIndex: 'onceAgainDepositCount',
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: () => (
      <Space>
        <span>充值金額</span>
        <IconLink
          label="充值金額超過或等於自動停用"
          icon={<ExclamationCircleOutlined />}
        />
      </Space>
    ),
    dataIndex: 'onceAgainDepositTotal',
    width: 140,
    render: (_, row) => '-',
  },
  {
    title: '上限',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '下限',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '狀態',
    dataIndex: 'status',
    width: 120,
    render: (_, row) => <Text color="success">啟用</Text>,
  },
  {
    title: '更新人員',
    dataIndex: 'firstWithdrawalCount',
    width: 120,
    render: (_, row) => 'flora',
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
          <IconLink icon={<CloseCircleOutlined />} label="停用" color="red" />
          <IconLink icon={<EditFilled />} label="編輯" />
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
