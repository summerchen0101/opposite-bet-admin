import IconLink from '@/components/IconLink'
import PopupConfirm from '@/components/PopupConfirm'
import TableSets from '@/components/TableSets'
import Text from '@/components/Text'
import { toDateTime } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  FilterOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'

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
    render: (_, row) => <a className="link">{row.id}</a>,
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
    title: '申請次數',
    width: 80,
    render: (_, row) => row.applyTimes,
  },
  {
    title: '類型',
    width: 100,
    render: (_, row) => '人工審核',
  },
  {
    title: '狀態',
    width: 80,
    render: (_, row) => (
      <>
        <Text>summer</Text>
        <br />
        <Text color="success">同意</Text>
      </>
    ),
  },
  {
    title: '申請時間',
    width: 160,
    render: (_, row) => toDateTime(row.applyAt),
  },
  {
    title: '審核時間',
    width: 160,
    render: (_, row) => toDateTime(row.reviewAt),
  },
  {
    title: '入帳時間',
    width: 160,
    render: (_, row) => toDateTime(row.creditAt),
  },
  {
    title: () => (
      <>
        <Space size="small">操作</Space>
        <IconLink
          icon={<FilterOutlined />}
          style={{ float: 'right', marginBottom: -4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [visible, setVisible] = useState(false)
      return (
        <Space size="small">
          <PopupConfirm title="確認通過？">
            <IconLink icon={<CheckCircleOutlined />} label="通過" />
          </PopupConfirm>
          <PopupConfirm title="確認不通過？">
            <IconLink icon={<CloseCircleOutlined />} label="不通過" />
          </PopupConfirm>
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
  applyAt: Date.now(),
  reviewAt: Date.now(),
  creditAt: Date.now(),
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} scroll={{ x: 1600 }} />
}

export default TableData
