import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { getFakeID } from '@/utils/helper'
import { DeleteOutlined, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
interface TableItem {
  id: string
}
const columns: ColumnsType<TableItem> = [
  {
    title: '標題',
    width: 180,
    render: (_, row) => '反水活動修改',
  },
  {
    title: '收件人',
    width: 120,
    render: (_, row) => 'gogoro99',
  },
  {
    title: '收件人數量',
    width: 100,
    render: (_, row) => 30,
  },
  {
    title: '讀取數量',
    width: 100,
    render: (_, row) => 4,
  },
  {
    title: '發送時間',
    render: (_, row) => '-',
    width: 140,
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
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      return (
        <Space size="small">
          <IconLink icon={<DeleteOutlined />} label="刪除" />
        </Space>
      )
    },
    width: 50,
  },
]

const data = [...Array(50)].map((t, i) => ({
  id: getFakeID(),
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
