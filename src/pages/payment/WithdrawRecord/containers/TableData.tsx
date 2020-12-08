import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { EditFilled, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Text } from '@/components'
import { useDispatch } from 'react-redux'
import { toggleReviewModal } from '../reducer'
import { ColumnsType } from 'antd/lib/table'

interface TableItem {
  id: string
  account: string
  nick: string
  type: number
  point: number
  withdrawFee: number
  discount: number
  administrationFee: number
  resultPoint: number
  financialStatus: number
  riskControlStatus: number
}

const columns: ColumnsType<TableItem> = [
  {
    title: '編號',
    render: (_, row) => row.id,
    width: 100,
  },
  {
    title: '帳號/名稱',
    render: (_, row) => (
      <>
        {row.account}[{row.nick}]
      </>
    ),
    width: 160,
  },
  {
    title: '提領類型',
    render: (_, row) => '會員銀行卡提款',
    width: 160,
  },
  {
    title: '金額',
    render: (_, row) => row.point,
    width: 150,
  },
  {
    title: '出款手續費',
    render: (_, row) => row.withdrawFee,
    width: 140,
  },
  {
    title: '優惠扣除',
    render: (_, row) => row.discount,
    width: 140,
  },
  {
    title: '行政費扣除',
    render: (_, row) => row.administrationFee,
    width: 120,
  },
  {
    title: '出款金額',
    render: (_, row) => row.resultPoint,
    width: 140,
  },
  {
    title: '財務狀態',
    width: 120,
    render: (_, row) => <Text color="warning">待批</Text>,
  },
  {
    title: '風控狀態',
    width: 120,
    render: (_, row) => <Text color="warning">待批</Text>,
  },
  {
    title: () => (
      <>
        申請時間
        <br />
        交易完成時間(GMT+8)
      </>
    ),
    width: 200,
    render: (_, row) => (
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
    width: 200,
    render: (_, row) => (
      <>
        flora
        <br />
        2019-07-01 10:54:36
      </>
    ),
  },
  {
    title: '財務',
    render(_, row) {
      const dispatch = useDispatch()
      const handleReview = () => dispatch(toggleReviewModal(true))
      return (
        <IconLink icon={<EditFilled />} label="審核" onClick={handleReview} />
      )
    },
    width: 70,
  },
  {
    title: '風控',
    render(_, row) {
      const dispatch = useDispatch()
      const handleReview = () => dispatch(toggleReviewModal(true))
      return (
        <IconLink icon={<EditFilled />} label="審核" onClick={handleReview} />
      )
    },
    width: 70,
  },
]

const data: TableItem[] = [...Array(5)].map((t, i) => ({
  id: i.toString(),
  account: 'gogoro',
  nick: '機車人',
  type: 1,
  point: 3000,
  withdrawFee: 0,
  discount: 0,
  administrationFee: 0,
  resultPoint: 3000,
  financialStatus: 1,
  riskControlStatus: 1,
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} scroll={{ x: 1700 }} />
}

export default TableData
