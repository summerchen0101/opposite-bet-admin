import { TableSets } from '@/components'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Col, Input, Row, Space, Table } from 'antd'
import React from 'react'

interface TableItem {
  id: string
}
const eventTypes = [
  { label: '主', count: 8 },
  { label: '和', count: 4 },
  { label: '客', count: 8 },
]

const columns = [
  { title: '', render: (_, row, index) => `1-${index}`, width: 50 },
  {
    title: '最小下注',
    render: (_, row) => <Input size="small" placeholder="0" />,
  },
  {
    title: '最注限額',
    render: (_, row) => <Input size="small" placeholder="0" />,
  },
  {
    title: '最場限額',
    render: (_, row) => <Input size="small" placeholder="0" />,
  },
]

const TableData: React.FC = () => {
  return (
    <Row>
      {eventTypes.map((t, i) => {
        return (
          <Col span={8} key={i}>
            <Table
              columns={addKeyToArrayItem(columns)}
              dataSource={addKeyToArrayItem([...Array(t.count)])}
              size="small"
              title={(rows) => t.label}
              bordered
              pagination={false}
            />
          </Col>
        )
      })}
    </Row>
  )
}

export default TableData
