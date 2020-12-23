import { Col, Row } from 'antd'
import React from 'react'
import DataForm from './DataForm'
const eventTypes = [
  { label: '主', count: 8 },
  { label: '和', count: 4 },
  { label: '客', count: 8 },
]

const DataFormGroup: React.FC = () => {
  return (
    <div>
      {eventTypes.map((t) => (
        <Col span={12}>
          <DataForm title={t.label} count={t.count} />
        </Col>
      ))}
    </div>
  )
}

export default DataFormGroup
