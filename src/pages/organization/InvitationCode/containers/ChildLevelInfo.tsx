import { addKeyToArrayItem } from '@/utils/transfer'
import { Card, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

interface TableItem {
  key?: number
  label: string
  register: number
  stop: number
  frozen: number
}
let columns: ColumnsType<TableItem> = [
  { title: '', render: (_, row) => row.label },
  { title: '成功', render: (_, row) => row.register },
  { title: '停用', render: (_, row) => row.stop },
  { title: '凍結', render: (_, row) => row.frozen },
]
columns = addKeyToArrayItem(columns)
let data: TableItem[] = [
  { label: '代理人數', register: 10, stop: 2, frozen: 1 },
  { label: '直屬會員', register: 10, stop: 2, frozen: 1 },
  { label: '總團隊會員', register: 10, stop: 2, frozen: 1 },
]
data = addKeyToArrayItem(data)
const ChildLevelInfo: React.FC = () => {
  return (
    <div>
      <h5>下線資訊</h5>
      <Table
        columns={columns}
        dataSource={data}
        size="small"
        bordered
        pagination={false}
      />
    </div>
  )
}

export default ChildLevelInfo
