import { Text } from '@/components'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { toDateTime } from '@/utils/transfer'
import {
  CoffeeOutlined,
  FilterFilled,
  FormOutlined,
  StopOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  toggleRejectModal,
  toggleReviewModal,
  toggleWaitingModal,
} from '../reducer'

interface TableItem {
  id: string
  account: string
  nick: string
  type: number
  point: number
  notes: string
  createdAt: number
  acomplishedAt: number
  status: number
  updatedAt: number
  updatedBy: string
}
const columns: ColumnsType<TableItem> = [
  {
    title: '編號',
    render: (_, row) => Math.ceil(Math.random() * 1000),
    width: 100,
  },
  {
    title: '帳號/名稱',
    render: (_, row) => (
      <>
        {row.account}
        <br />[{row.nick}]
      </>
    ),
    width: 150,
  },
  {
    title: '入款方式',
    render: (_, row) => '網銀',
    width: 120,
  },
  {
    title: '充值金額',
    render: (_, row) => row.point,
    width: 120,
  },
  {
    title: '備註',
    render: (_, row) => row.notes,
    width: 140,
  },
  {
    title: '新增時間',
    render: (_, row) => toDateTime(row.createdAt),
    width: 180,
  },
  {
    title: '完成時間',
    render: (_, row) => toDateTime(row.acomplishedAt),
    width: 180,
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
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        {row.updatedBy} <br />
        {toDateTime(row.updatedAt)}
      </>
    ),
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
      const dispatch = useDispatch()
      const handleReview = () => dispatch(toggleReviewModal(true))
      const handleReject = () => dispatch(toggleRejectModal(true))
      return (
        <Space size="small">
          <IconLink
            icon={<CheckCircleOutlined />}
            label="通過"
            onClick={handleReview}
          />
          <IconLink
            icon={<CloseCircleOutlined />}
            label="拒絕"
            onClick={handleReject}
          />
        </Space>
      )
    },
    width: 100,
  },
]

const data: TableItem[] = [...Array(5)].map((t, i) => ({
  id: i.toString(),
  account: 'gogoro',
  nick: 'GOGORO',
  type: 1,
  point: 2000,
  notes: '-',
  createdAt: Date.now(),
  acomplishedAt: Date.now(),
  status: 1,
  updatedAt: Date.now(),
  updatedBy: 'summer',
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
