import { ColorText } from '@/components'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { toDateTime } from '@/utils/transfer'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import moment from 'moment'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
interface TableItem {
  id: string
  name: string
  account: string
  promoteTitle: string
  point: number
  applyTimes: number
  type: number
  status: number
  applyAt: number
  reviewAt: number
  creditAt: number
}

const columns: ColumnsType<TableItem> = [
  {
    title: '申請單編號',
    width: 100,
    render: (_, row) => row.id,
  },
  {
    title: '帳號/姓名',
    width: 100,
    render: (_, row) => (
      <>
        {row.account} <br />
        {row.name}
      </>
    ),
  },
  {
    title: '活動名稱',
    width: 150,
    render: (_, row) => row.promoteTitle,
  },
  {
    title: '獎金金額',
    width: 100,
    render: (_, row) => row.point,
  },
  {
    title: '狀態',
    width: 80,
    render: (_, row) => '未審核',
  },
  {
    title: '申請時間',
    width: 160,
    render: (_, row) => toDateTime(row.applyAt),
  },
  {
    title: '審核時間',
    width: 160,
    render: (_, row) => '-',
  },
  {
    title: '審核人',
    width: 100,
    render: (_, row) => '-',
  },
  {
    title: '入帳時間',
    width: 160,
    render: (_, row) => '-',
  },
  {
    title: () => '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const setRecieveVisible = usePopupProvider('reviewRecieve')[1]
      const setRejectVisible = usePopupProvider('reviewReject')[1]
      return (
        <Space size="small">
          <IconLink
            icon={<CheckCircleOutlined />}
            label="通過"
            color="green"
            onClick={() => setRecieveVisible(true)}
          />
          <IconLink
            icon={<CloseCircleOutlined />}
            label="拒絕"
            color="red"
            onClick={() => setRejectVisible(true)}
          />
        </Space>
      )
    },
    width: 90,
  },
]

const data: TableItem[] = [...Array(5)].map((t, i) => ({
  id: Math.ceil(Math.random() * 10000).toString(),
  name: '陳可愛',
  account: 'gogoro',
  promoteTitle: '會員首儲優惠',
  point: 1000,
  applyTimes: 3,
  type: 1,
  status: 1,
  applyAt: moment().unix(),
  reviewAt: moment().unix(),
  creditAt: moment().unix(),
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} scroll={{ x: 1500 }} />
}

export default TableData
