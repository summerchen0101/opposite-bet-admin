import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  StopOutlined,
  FilterFilled,
  CheckCircleOutlined,
  CoffeeOutlined,
  FormOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Text } from '@/components'
import { useDispatch } from 'react-redux'
import {
  toggleRejectModal,
  toggleReviewModal,
  toggleWaitingModal,
} from '../reducer'

const columns = [
  {
    title: '編號',
    dataIndex: 'account',
    width: 100,
    render: () => '112',
  },
  {
    title: '銀行名稱',
    dataIndex: 'firstDepositCount',
    width: '150px',
    render: () => '822 - 中國信託',
  },
  {
    title: '存款資訊',
    dataIndex: 'firstDepositCount',
    width: 120,
    render: () => '-',
  },
  {
    title: '入款方式',
    dataIndex: 'firstDepositTotal',
    width: 140,
    render: () => '網銀',
  },
  {
    title: '帳號 / 名稱',
    dataIndex: 'onceAgainDepositCount',
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '存入金額',
    dataIndex: 'onceAgainDepositTotal',
    width: 140,
    render: (_, row) => '1,000.00',
  },
  {
    title: '入款優惠',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => '0.00',
  },
  {
    title: '入款手續費',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => '0.00',
  },
  {
    title: '存入總額',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => '1,000.00',
  },
  {
    title: '存入銀行',
    dataIndex: 'depositCount',
    width: '180px',
    render: (_, row) => '808 - 玉山銀行-123',
  },
  {
    title: '狀態',
    dataIndex: 'status',
    width: 120,
    render: (_, row) => (
      <>
        <Text color="success">擱置</Text>
        <br />
        款項確認
      </>
    ),
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
      const dispatch = useDispatch()
      const handleWaiting = () => dispatch(toggleWaitingModal(true))
      const handleReview = () => dispatch(toggleReviewModal(true))
      const handleReject = () => dispatch(toggleRejectModal(true))
      return (
        <Space size="small">
          <IconLink
            icon={<CoffeeOutlined />}
            label="擱置"
            onClick={handleWaiting}
          />
          <IconLink
            icon={<FormOutlined />}
            label="審核"
            onClick={handleReview}
          />
          <IconLink
            icon={<StopOutlined />}
            label="拒絕"
            onClick={handleReject}
          />
        </Space>
      )
    },
    width: 100,
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
