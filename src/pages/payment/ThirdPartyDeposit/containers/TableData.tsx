import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { EditFilled, FilterFilled, FormOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleReviewModal } from '../reducer'

const columns = [
  {
    title: '編號',
    dataIndex: 'account',
    width: 60,
    render: (_, row, i) => i + 1,
  },
  {
    title: '單號',
    dataIndex: 'firstDepositCount',
    width: 180,
    render: () => '2020091009515118',
  },
  {
    title: '設定名稱',
    dataIndex: 'firstDepositTotal',
    width: 140,
    render: () => '-',
  },
  {
    title: '狀態',
    dataIndex: 'onceAgainDepositCount',
    width: 120,
    render: () => '-',
  },
  {
    title: '帳號/名稱',
    dataIndex: 'onceAgainDepositTotal',
    width: 140,
    render: () => '-',
  },
  {
    title: '初始金額',
    dataIndex: 'depositCount',
    width: 120,
    render: () => '1,000.00',
  },
  {
    title: '實際入款金額',
    dataIndex: 'depositTotal',
    width: 140,
    render: () => '1,000.00',
  },
  {
    title: '優惠',
    dataIndex: 'firstWithdrawalCount',
    width: 120,
    render: () => '0.00',
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
        2020-09-09 21:51:51 <br />-
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
        flora <br />
        2020-09-09 21:51:51
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
      const onClick = () => dispatch(toggleReviewModal(true))
      return (
        <Space size="small">
          <IconLink icon={<FormOutlined />} label="手動" onClick={onClick} />
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
