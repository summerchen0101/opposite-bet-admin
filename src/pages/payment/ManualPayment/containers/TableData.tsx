import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { EditFilled, FilterFilled, CopyOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Text } from '@/components'
import { ColumnsType } from 'antd/lib/table'
import { toDateTime } from '@/utils/transfer'

interface TableItem {
  id: string
  account: string
  nick: string
  type: number
  method: number
  point: number
  notes: string
  updatedAt: number
  updatedBy: string
}

const columns: ColumnsType<TableItem> = [
  {
    title: '編號',
    render: (_, row) => row.id,
    width: 100,
  },
  {
    title: '類型',
    render: (_, row) => '存入',
    width: 120,
  },
  {
    title: '項目',
    render: (_, row) => '人工存入',
    width: 140,
  },
  {
    title: '代理商',
    render: (_, row) => 'AAABB',
    width: 120,
  },
  {
    title: '帳號/名稱',
    render: (_, row) => (
      <>
        {row.account}
        <br />[{row.nick}]
      </>
    ),
    width: 140,
  },
  {
    title: '金額',
    render: (_, row) => row.point,
    width: 120,
  },
  {
    title: '備註',
    render: (_, row) => row.notes,
    width: 140,
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
      return (
        <Space size="small">
          <IconLink icon={<CopyOutlined />} label="複製資訊" />
        </Space>
      )
    },
    width: 70,
  },
]

const data: TableItem[] = [...Array(5)].map((t, i) => ({
  id: Math.ceil(Math.random() * 10000).toString(),
  account: 'gogoro',
  nick: 'GOGORO',
  type: 1,
  method: 2,
  point: 2000,
  notes: '-',
  updatedAt: Date.now(),
  updatedBy: 'summer',
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
