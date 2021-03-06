import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { EditFilled, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Text } from '@/components'
import { useDispatch } from 'react-redux'
import { toggleReviewModal } from '../reducer'

const columns = [
  {
    title: '編號',
    dataIndex: 'account',
    width: 100,
  },
  {
    title: '帳號/名稱',
    dataIndex: 'firstDepositCount',
    width: 120,
  },
  {
    title: '出款銀行',
    dataIndex: 'firstDepositTotal',
    width: 140,
  },
  {
    title: '代理商',
    dataIndex: 'onceAgainDepositCount',
    width: 120,
  },
  {
    title: '金額',
    dataIndex: 'onceAgainDepositTotal',
    width: 140,
  },
  {
    title: '出款手續費',
    dataIndex: 'depositCount',
    width: 120,
    render: (_, row) => row.firstDepositCount + row.onceAgainDepositCount,
  },
  {
    title: '優惠扣除',
    dataIndex: 'depositTotal',
    width: 140,
    render: (_, row) => row.firstDepositTotal + row.onceAgainDepositTotal,
  },
  {
    title: '行政費扣除',
    dataIndex: 'firstWithdrawalCount',
    width: 120,
  },
  {
    title: '出款金額',
    dataIndex: 'depositTotal',
    width: 140,
    render: (_, row) => row.firstDepositTotal + row.onceAgainDepositTotal,
  },
  {
    title: '狀態',
    dataIndex: 'status',
    width: 120,
    render: () => <Text color="warning">待批</Text>,
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
    width: 200,
    render: () => (
      <>
        2020-09-09 21:51:51
        <br />
        0000-00-00 00:00:00
      </>
    ),
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
    width: 200,
    render: () => (
      <>
        flora
        <br />
        2019-07-01 10:54:36
      </>
    ),
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
      const handleReview = () => dispatch(toggleReviewModal(true))
      return (
        <Space size="small">
          <IconLink icon={<EditFilled />} label="審核" onClick={handleReview} />
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
